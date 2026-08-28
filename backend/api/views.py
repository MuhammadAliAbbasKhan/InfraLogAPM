from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
import datetime
import time
from .models import (
    TelemetryMetric, LogEntry, ApmTrace, Inquiry,
    NewsletterSubscriber, SubscriptionPlan, UserAccount, SubscriptionOrder
)
from .serializers import (
    TelemetryMetricSerializer, LogEntrySerializer, ApmTraceSerializer,
    InquirySerializer, NewsletterSubscriberSerializer, SubscriptionPlanSerializer,
    UserAccountSerializer, SubscriptionOrderSerializer
)
from .db_mongo import sync_to_mongo

ADMIN_PASSCODE = 'aliabbas1234578!'

# ================= USER AUTHENTICATION =================
@api_view(['POST'])
def register_user(request):
    data = request.data
    username = data.get('username', '').strip()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '').strip()
    company = data.get('company', '').strip()

    if not email:
        return Response({'success': False, 'message': 'Email address is required'}, status=status.HTTP_400_BAD_REQUEST)
    if not password:
        return Response({'success': False, 'message': 'Password is required'}, status=status.HTTP_400_BAD_REQUEST)

    if not username:
        username = email.split('@')[0]

    # Check if user exists
    user = UserAccount.objects.filter(email=email).first()
    if user:
        return Response({'success': False, 'message': 'Account with this email already exists. Please Sign In.'}, status=status.HTTP_400_BAD_REQUEST)

    user = UserAccount.objects.create(
        username=username,
        email=email,
        password=password,
        company=company,
        is_paid=False,
        active_plan='Free Tier'
    )

    # Sync to MongoDB Atlas
    sync_to_mongo('users', {
        'username': username,
        'email': email,
        'company': company,
        'is_paid': False,
        'active_plan': 'Free Tier',
        'created_at': time.time()
    })

    token = f'infralogapm_token_{user.id}_{int(time.time())}'

    return Response({
        'success': True,
        'message': 'Account created successfully! You can now Sign In.',
        'token': token,
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'company': user.company,
            'is_paid': False,
            'active_plan': user.active_plan,
            'paid_until': None
        }
    }, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login_user(request):
    data = request.data
    email = data.get('email', '').strip().lower()
    password = data.get('password', '').strip()

    if not email or not password:
        return Response({'success': False, 'message': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    # STRICT CHECK: User MUST be registered first!
    user = UserAccount.objects.filter(email=email).first()
    if not user:
        return Response({'success': False, 'message': 'Account not found. You must Sign Up / Register first before logging in!'}, status=status.HTTP_401_UNAUTHORIZED)

    if user.password and user.password != password:
        return Response({'success': False, 'message': 'Incorrect password. Please check your credentials.'}, status=status.HTTP_401_UNAUTHORIZED)

    is_paid_active = user.is_subscription_active()
    token = f'infralogapm_token_{user.id}_{int(time.time())}'

    return Response({
        'success': True,
        'message': 'Sign in successful!',
        'token': token,
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'company': user.company,
            'is_paid': is_paid_active,
            'active_plan': user.active_plan if is_paid_active else 'Free Tier',
            'paid_until': user.paid_until.strftime('%Y-%m-%d') if (user.paid_until and is_paid_active) else None
        }
    })

@api_view(['GET'])
def get_user_profile(request):
    email = request.query_params.get('email', '').strip().lower()
    if not email:
        return Response({'success': False, 'message': 'Email parameter required'}, status=status.HTTP_400_BAD_REQUEST)

    user = UserAccount.objects.filter(email=email).first()
    if not user:
        return Response({'success': False, 'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    is_paid_active = user.is_subscription_active()

    return Response({
        'success': True,
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'company': user.company,
            'is_paid': is_paid_active,
            'active_plan': user.active_plan if is_paid_active else 'Free Tier',
            'paid_until': user.paid_until.strftime('%Y-%m-%d') if (user.paid_until and is_paid_active) else None
        }
    })

# ================= PRICING & SUBSCRIPTION SYSTEM ($100, $200, $300) =================
@api_view(['POST'])
def subscribe_plan(request):
    data = request.data
    email = data.get('email', '').strip().lower()
    plan_id = str(data.get('plan_id', '200'))
    
    # Map tier prices to plan names
    tier_map = {
        '100': ('Starter Plan ($100/mo)', 100.00),
        '200': ('Pro Growth Plan ($200/mo)', 200.00),
        '300': ('Ultimate Enterprise ($300/mo)', 300.00)
    }
    plan_name, amount = tier_map.get(plan_id, (data.get('plan_name', 'Pro Growth Plan ($200/mo)'), float(data.get('amount', 200.00))))

    if not email:
        return Response({'success': False, 'message': 'User email required for subscription'}, status=status.HTTP_400_BAD_REQUEST)

    # User MUST be registered first to subscribe!
    user = UserAccount.objects.filter(email=email).first()
    if not user:
        return Response({
            'success': False,
            'message': 'You must Sign Up / Register an account before purchasing a subscription plan!'
        }, status=status.HTTP_400_BAD_REQUEST)

    # Check active subscription
    if user.is_subscription_active():
        return Response({
            'success': True,
            'already_paid': True,
            'message': f'Your subscription to {user.active_plan} is already active for this month until {user.paid_until.strftime("%Y-%m-%d")}! You do not need to pay again.',
            'user': {
                'email': user.email,
                'is_paid': True,
                'active_plan': user.active_plan,
                'paid_until': user.paid_until.strftime('%Y-%m-%d')
            }
        })

    stripe_id = f"pi_stripe_infralogapm_{int(time.time())}_{user.id}"
    card_num = str(data.get('cardNumber', data.get('card_number', '4242'))).replace(' ', '')
    last4 = card_num[-4:] if len(card_num) >= 4 else '4242'

    thirty_days_later = timezone.now() + datetime.timedelta(days=30)
    user.is_paid = True
    user.active_plan = plan_name
    user.paid_until = thirty_days_later
    user.save()

    order = SubscriptionOrder.objects.create(
        stripe_payment_id=stripe_id,
        plan_id=plan_id,
        plan_name=plan_name,
        amount=amount,
        currency='USD',
        billing_cycle=data.get('billing_cycle', 'monthly'),
        email=email,
        cardholder=data.get('cardholder', user.username),
        card_last4=last4,
        status='succeeded'
    )

    sync_to_mongo('subscriptions', {
        'stripe_payment_id': stripe_id,
        'plan_name': order.plan_name,
        'amount': float(order.amount),
        'currency': 'USD',
        'email': order.email,
        'card_last4': last4,
        'status': 'succeeded',
        'paid_until': thirty_days_later.isoformat(),
        'timestamp': time.time()
    })

    return Response({
        'success': True,
        'message': f'Stripe payment of ${order.amount} USD successful! Subscription to {order.plan_name} active until {thirty_days_later.strftime("%Y-%m-%d")}. The Paid Features Portal is unlocked!',
        'stripe_payment_id': stripe_id,
        'user': {
            'email': user.email,
            'is_paid': True,
            'active_plan': user.active_plan,
            'paid_until': thirty_days_later.strftime('%Y-%m-%d')
        }
    })

@api_view(['POST'])
def generate_stripe_payment_intent(request):
    data = request.data
    amount = data.get('amount', 20000)
    currency = data.get('currency', 'usd')
    client_secret = f"pi_infralogapm_secret_{int(time.time())}_{amount}"
    
    return Response({
        'success': True,
        'client_secret': client_secret,
        'amount': amount,
        'currency': currency,
        'status': 'requires_payment_method'
    })

# ================= TELEMETRY, LOGS, APM TRACES =================
@api_view(['GET', 'POST'])
def telemetry_metrics(request):
    if request.method == 'GET':
        metrics = TelemetryMetric.objects.all().order_by('-timestamp')[:50]
        serializer = TelemetryMetricSerializer(metrics, many=True)
        return Response({'success': True, 'metrics': serializer.data})
    
    elif request.method == 'POST':
        serializer = TelemetryMetricSerializer(data=request.data)
        if serializer.is_valid():
            metric = serializer.save()
            sync_to_mongo('telemetry_metrics', serializer.data)
            return Response({'success': True, 'metric': serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def log_entries(request):
    if request.method == 'GET':
        logs = LogEntry.objects.all().order_by('-created_at')[:100]
        serializer = LogEntrySerializer(logs, many=True)
        return Response({'success': True, 'logs': serializer.data})
    
    elif request.method == 'POST':
        serializer = LogEntrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            sync_to_mongo('log_entries', serializer.data)
            return Response({'success': True, 'log': serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def apm_traces(request):
    if request.method == 'GET':
        traces = ApmTrace.objects.all().order_by('-timestamp')[:50]
        serializer = ApmTraceSerializer(traces, many=True)
        return Response({'success': True, 'traces': serializer.data})
    
    elif request.method == 'POST':
        serializer = ApmTraceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            sync_to_mongo('apm_traces', serializer.data)
            return Response({'success': True, 'trace': serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def submit_inquiry(request):
    serializer = InquirySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        sync_to_mongo('inquiries', serializer.data)
        return Response({'success': True, 'message': 'Inquiry submitted successfully!'}, status=status.HTTP_201_CREATED)
    return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def newsletter_subscribe(request):
    serializer = NewsletterSubscriberSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        sync_to_mongo('newsletter', serializer.data)
        return Response({'success': True, 'message': 'Subscribed to telemetry newsletter!'}, status=status.HTTP_201_CREATED)
    return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

# ================= ADMIN ANALYTICS (Passcode Protected) =================
@api_view(['GET'])
def admin_analytics(request):
    passcode = request.headers.get('X-Admin-Passcode', '')
    if passcode != ADMIN_PASSCODE:
        return Response({'success': False, 'message': 'Unauthorized admin passcode'}, status=status.HTTP_401_UNAUTHORIZED)

    users_count = UserAccount.objects.count()
    paid_users_count = UserAccount.objects.filter(is_paid=True).count()
    subs = list(SubscriptionOrder.objects.values('id', 'stripe_payment_id', 'plan_name', 'amount', 'email', 'status', 'created_at')[:10])
    metrics_count = TelemetryMetric.objects.count()
    logs_count = LogEntry.objects.count()

    return Response({
        'success': True,
        'activeNodes': 1450,
        'ingestedEventsPerSec': '14,500,000',
        'totalUsers': users_count,
        'paidSubscribers': paid_users_count,
        'metricsCount': metrics_count,
        'logsCount': logs_count,
        'monthlyRevenue': paid_users_count * 200,
        'mongoSyncStatus': 'CONNECTED (infralogapm_db / cloud_atlas)',
        'subscriptions': subs,
        'logs': [
            {'timestamp': '15:20:10', 'level': 'INFO', 'message': 'Kubernetes worker-node-04 eBPF probe telemetry active'},
            {'timestamp': '15:18:05', 'level': 'SUCCESS', 'message': 'Dual DB Sync: Records committed to MongoDB Cloud Atlas'},
            {'timestamp': '15:10:00', 'level': 'INFO', 'message': 'Bits AI anomaly detection engine operating nominally'},
        ]
    })
