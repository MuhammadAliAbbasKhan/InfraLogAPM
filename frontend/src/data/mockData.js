export const INTEGRATIONS_LIST = [
  { id: 1, name: "Kubernetes", category: "Containers & Orchestration", icon: "Boxes", stars: "4.9", description: "Collect cluster metrics, node health, and container logs automatically." },
  { id: 2, name: "Amazon Web Services (AWS)", category: "Cloud Providers", icon: "Cloud", stars: "5.0", description: "Deep integration with EC2, EKS, Lambda, S3, CloudWatch, and RDS." },
  { id: 3, name: "PostgreSQL", category: "Databases", icon: "Database", stars: "4.8", description: "Query execution plan profiling, table lock analysis, and connection pool metrics." },
  { id: 4, name: "Apache Kafka", category: "Messaging & Streaming", icon: "Activity", stars: "4.9", description: "Consumer lag monitoring, partition health, and throughput streaming metrics." },
  { id: 5, name: "Docker", category: "Containers & Orchestration", icon: "Box", stars: "4.7", description: "Daemon stats, container CPU/RAM quotas, and stdout/stderr stream ingestion." },
  { id: 6, name: "Redis Enterprise", category: "Databases", icon: "Zap", stars: "4.8", description: "Memory fragmentation, cache hit ratio, key eviction rates, and latency spikes." },
  { id: 7, name: "Nginx / Nginx Plus", category: "Web Servers & Proxies", icon: "Globe", stars: "4.6", description: "HTTP request rates, status codes breakdown, upstream response times." },
  { id: 8, name: "Google Cloud Platform (GCP)", category: "Cloud Providers", icon: "CloudSun", stars: "4.9", description: "GKE telemetry, Cloud Run traces, and Pub/Sub queue monitoring." },
  { id: 9, name: "Microsoft Azure", category: "Cloud Providers", icon: "Server", stars: "4.8", description: "Azure Kubernetes Service (AKS), App Services, and Azure SQL monitoring." },
  { id: 10, name: "PyTorch & TensorFlow", category: "AI & Machine Learning", icon: "Cpu", stars: "4.9", description: "GPU memory allocation, model inference latency, and gradient tracking." },
  { id: 11, name: "GraphQL API", category: "APIs & Microservices", icon: "Code", stars: "4.7", description: "Resolver execution flamegraphs, field error rates, and query complexity metrics." },
  { id: 12, name: "Databricks & Spark", category: "Data Engineering", icon: "BarChart3", stars: "4.8", description: "Distributed query execution, node allocation, and data pipeline bottlenecks." }
];

export const LIVE_LOG_SAMPLES = [
  { id: "log-101", timestamp: "12:34:22.019", service: "api-gateway", level: "INFO", message: "GET /api/v1/checkout - 200 OK (duration: 14.2ms) - client_ip=192.168.1.42", traceId: "tr-94a8c1" },
  { id: "log-102", timestamp: "12:34:22.088", service: "payment-service", level: "WARN", message: "Stripe API latency response exceeds threshold 450ms (actual: 512ms)", traceId: "tr-94a8c1" },
  { id: "log-103", timestamp: "12:34:22.145", service: "auth-service", level: "INFO", message: "User session validated: user_id=usr_883921 - scope=admin_read", traceId: "tr-77b3d2" },
  { id: "log-104", timestamp: "12:34:22.204", service: "inventory-db", level: "ERROR", message: "Deadlock detected in transaction #88921. Retrying SQL execution queue...", traceId: "tr-33c9e9" },
  { id: "log-105", timestamp: "12:34:22.311", service: "k8s-ingress", level: "INFO", message: "TLS Handshake completed with ECDHE-RSA-AES128-GCM-SHA256 in 3.1ms", traceId: "tr-11f8b4" },
  { id: "log-106", timestamp: "12:34:22.420", service: "recommendation-ml", level: "INFO", message: "Inference batch executed on CUDA:0 (tensor_shape=[128, 512])", traceId: "tr-55e1a2" }
];

export const APM_SPAN_SAMPLES = [
  { id: "span-1", name: "POST /v2/orders/checkout", service: "web-store", duration: "148.5 ms", widthPct: "100%", color: "bg-indigo-500", offsetPct: "0%" },
  { id: "span-2", name: "auth.VerifyJWTToken()", service: "auth-service", duration: "12.3 ms", widthPct: "15%", color: "bg-purple-500", offsetPct: "5%" },
  { id: "span-3", name: "SELECT * FROM inventory WHERE item_id = ?", service: "postgres-db", duration: "34.1 ms", widthPct: "25%", color: "bg-emerald-500", offsetPct: "22%" },
  { id: "span-4", name: "payment.ChargeStripeIntent()", service: "payment-service", duration: "82.4 ms", widthPct: "52%", color: "bg-amber-500", offsetPct: "48%" },
  { id: "span-5", name: "redis.SetEx(order_cache_key)", service: "redis-cache", duration: "4.2 ms", widthPct: "6%", color: "bg-pink-500", offsetPct: "92%" }
];

export const PRICING_TIERS = [
  {
    name: "Free Developer",
    price: "$0",
    period: "forever free",
    description: "Essential cloud infrastructure monitoring for indie developers and experimental side projects.",
    features: [
      "Up to 5 Hosts / Nodes",
      "1-day log retention",
      "Basic metric dashboards",
      "Standard email alerts",
      "Community Support"
    ],
    highlight: false,
    ctaText: "Start Free Now"
  },
  {
    name: "Pro Infrastructure",
    price: "$15",
    period: "per host / month",
    description: "Complete observability for high-growth engineering teams & production Kubernetes workloads.",
    features: [
      "Unlimited Hosts & Containers",
      "15-day log retention",
      "Full APM & Distributed Tracing",
      "600+ Out-of-box Integrations",
      "Bits AI Anomaly Detection",
      "24/7 Priority Support & SLA"
    ],
    highlight: true,
    ctaText: "Start 14-Day Trial"
  },
  {
    name: "Enterprise Complete",
    price: "$23",
    period: "per host / month",
    description: "Advanced Cloud SIEM security, real user monitoring, synthetic testing, and dedicated SLA.",
    features: [
      "Includes all Pro Features",
      "30-day+ customizable log index",
      "Cloud Security Posture (SIEM)",
      "Real User Session Replay (RUM)",
      "Custom Role-Based Access (RBAC)",
      "Dedicated Technical Account Manager"
    ],
    highlight: false,
    ctaText: "Contact Enterprise Sales"
  }
];

export const CUSTOMER_STORIES = [
  {
    company: "FinTech Global Scale",
    logo: "Building2",
    quote: "InfraLogAPM allowed our SRE team to cut mean time to resolution (MTTR) by 74% across 1,200 microservices.",
    stats: "74% MTTR Reduction",
    author: "Elena Rostova, VP of Infrastructure"
  },
  {
    company: "CyberStream Media",
    logo: "Tv",
    quote: "Ingesting 80 TB of log telemetry daily with zero dropped events during Super Bowl live streaming peaks.",
    stats: "80 TB/Day Log Scale",
    author: "Marcus Vance, Principal Cloud Architect"
  },
  {
    company: "HealthCore AI",
    logo: "ShieldCheck",
    quote: "Full HIPAA and SOC 2 Type II compliance out of the box with real-time audit logging and threat detection.",
    stats: "100% Audit Compliance",
    author: "Dr. Sarah Lin, Chief Security Officer"
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "How InfraLogAPM Processes 10 Million Telemetry Events Per Second with Zero Latency",
    date: "August 24, 2026",
    category: "Engineering Architecture",
    readTime: "6 min read",
    snippet: "A deep dive into our distributed stream engine built with Rust, eBPF kernel probes, and columnar indexing."
  },
  {
    id: 2,
    title: "The 2026 State of Cloud Security & Kubernetes Container Vulnerabilities",
    date: "August 18, 2026",
    category: "Cloud Security",
    readTime: "9 min read",
    snippet: "Analysis of 5,000 enterprise clusters: how misconfigurations occur and automated remediations with Bits AI."
  },
  {
    id: 3,
    title: "Mastering Distributed Tracing in Serverless & Microservice Ecosystems",
    date: "August 10, 2026",
    category: "DevOps & APM",
    readTime: "5 min read",
    snippet: "Learn context propagation, OpenTelemetry spans, and flamegraph bottlenecks optimization."
  }
];
