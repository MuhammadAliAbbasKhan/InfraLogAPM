from django.urls import path
from . import views

urlpatterns = [
    # Auth endpoints
    path('auth/register/', views.register_user, name='register_user'),
    path('auth/login/', views.login_user, name='login_user'),
    path('auth/profile/', views.get_user_profile, name='get_user_profile'),

    # Pricing & Subscription endpoints ($100, $200, $300)
    path('pricing/subscribe/', views.subscribe_plan, name='subscribe_plan'),
    path('pricing/stripe-payment-intent/', views.generate_stripe_payment_intent, name='generate_stripe_payment_intent'),

    # Telemetry, Logs, APM
    path('telemetry/', views.telemetry_metrics, name='telemetry_metrics'),
    path('logs/', views.log_entries, name='log_entries'),
    path('traces/', views.apm_traces, name='apm_traces'),
    path('inquiry/', views.submit_inquiry, name='submit_inquiry'),
    path('newsletter/', views.newsletter_subscribe, name='newsletter_subscribe'),

    # Passcode-protected Admin Analytics
    path('admin/analytics/', views.admin_analytics, name='admin_analytics'),
]
