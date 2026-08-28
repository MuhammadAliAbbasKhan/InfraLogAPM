from rest_framework import serializers
from .models import TelemetryMetric, LogEntry, ApmTrace, Inquiry, NewsletterSubscriber, SubscriptionPlan, UserAccount, SubscriptionOrder

class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['id', 'username', 'email', 'company', 'is_paid', 'active_plan', 'paid_until', 'created_at']

class SubscriptionOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscriptionOrder
        fields = '__all__'

class TelemetryMetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = TelemetryMetric
        fields = '__all__'

class LogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = LogEntry
        fields = '__all__'

class ApmTraceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApmTrace
        fields = '__all__'

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__'

class NewsletterSubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscriber
        fields = '__all__'

class SubscriptionPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscriptionPlan
        fields = '__all__'
