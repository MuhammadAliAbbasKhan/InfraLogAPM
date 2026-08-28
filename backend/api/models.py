from django.db import models
from django.utils import timezone

class UserAccount(models.Model):
    username = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    company = models.CharField(max_length=255, blank=True, null=True)
    is_paid = models.BooleanField(default=False)
    active_plan = models.CharField(max_length=100, default='Free Tier')
    paid_until = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_subscription_active(self):
        if not self.is_paid:
            return False
        if not self.paid_until:
            return False
        return timezone.now() < self.paid_until

    def __str__(self):
        return f"{self.email} ({self.active_plan})"

class SubscriptionOrder(models.Model):
    stripe_payment_id = models.CharField(max_length=255, unique=True)
    plan_id = models.CharField(max_length=50, default='200')
    plan_name = models.CharField(max_length=100, default='Pro Growth Plan')
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=200.00)
    currency = models.CharField(max_length=10, default='USD')
    billing_cycle = models.CharField(max_length=20, default='monthly')
    email = models.EmailField()
    cardholder = models.CharField(max_length=255, blank=True, null=True)
    card_last4 = models.CharField(max_length=4, default='4242')
    status = models.CharField(max_length=50, default='succeeded')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.stripe_payment_id} - ${self.amount} ({self.email})"

class TelemetryMetric(models.Model):
    metric_name = models.CharField(max_length=255)
    host_name = models.CharField(max_length=255, default='k8s-worker-node-01')
    environment = models.CharField(max_length=50, default='production')
    value = models.FloatField()
    unit = models.CharField(max_length=50, default='ms')
    tags = models.JSONField(default=list)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.metric_name} = {self.value} ({self.host_name})"

class LogEntry(models.Model):
    service = models.CharField(max_length=100)
    level = models.CharField(max_length=20, default='INFO')
    message = models.TextField()
    trace_id = models.CharField(max_length=100, blank=True, null=True)
    status_code = models.IntegerField(default=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"[{self.level}] {self.service}: {self.message[:50]}"

class ApmTrace(models.Model):
    trace_id = models.CharField(max_length=100, unique=True)
    operation_name = models.CharField(max_length=255)
    service_name = models.CharField(max_length=100)
    duration_ms = models.FloatField()
    http_method = models.CharField(max_length=10, default='GET')
    http_url = models.CharField(max_length=500, default='/')
    spans_count = models.IntegerField(default=12)
    error = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Trace {self.trace_id} - {self.operation_name} ({self.duration_ms}ms)"

class Inquiry(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    company = models.CharField(max_length=255, blank=True, null=True)
    monthly_nodes = models.CharField(max_length=50, default='10-50')
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Inquiry from {self.full_name} ({self.email})"

class NewsletterSubscriber(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email

class SubscriptionPlan(models.Model):
    user_email = models.EmailField()
    plan_name = models.CharField(max_length=100, default='Pro Growth Plan')
    hosts_count = models.IntegerField(default=75)
    monthly_price = models.FloatField(default=200.0)
    stripe_payment_intent = models.CharField(max_length=255, blank=True, null=True)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user_email} - {self.plan_name}"
