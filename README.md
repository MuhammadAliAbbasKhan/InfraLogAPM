# InfraLogAPM ⚡

> **InfraLogAPM** is a full-stack, AI-powered cloud observability and application performance monitoring (APM) web platform inspired by Datadog.

![InfraLogAPM Banner](https://corp.dd-static.net/img/products/product/homepage-screencaps-integrations-d.png)

## 🌟 Key Features

- **Full-Stack Observability Platform**: 24 sub-pages covering Infrastructure, APM & Distributed Tracing, Log Management, Cloud SIEM, Synthetic Testing, Real User Monitoring (RUM), Database Profiling, Network NPM, Serverless, and Bits AI Copilot.
- **600+ Integrations Catalog**: Searchable integration directory supporting AWS, Kubernetes, GCP, Azure, Postgres, Kafka, Docker, Nginx, and MongoDB.
- **Bits AI Copilot**: Automated root cause analysis and incident investigation assistant.
- **$100, $200, $300 Pricing Tiers**: Transparent pay-as-you-go pricing integrated with Stripe Payment Intent generation.
- **Django REST Backend**: Django API endpoints for telemetry metrics, log streams, APM traces, user authentication, subscription tracking, and MongoDB Atlas fail-soft syncing.
- **Passcode Protected System Admin Dashboard**: Secure analytics dashboard protected via `X-Admin-Passcode: aliabbas1234578!`.
- **100% Mobile & Cross-Device Responsive**: Built for Desktop, Tablet, iOS, and Android mobile devices with touch target optimization and sticky navigation drawers.

---

## 🛠️ Technology Stack

- **Frontend**: React (Vite), React Router DOM v6, TailwindCSS, Lucide React Icons, Axios
- **Backend**: Python 3.10+, Django 5.0+, Django REST Framework, PyMongo Driver
- **Databases**: SQLite3 & MongoDB Atlas Cloud Database

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/MuhammadAliAbbasKhan/InfraLogAPM.git
cd InfraLogAPM
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npx vite --port 3000
```

### 3. Backend Setup
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate
# Linux/Mac: source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

---

## 📧 Contact & Support

- **Domain**: [infralogapm.com](https://infralogapm.com)
- **Support Email**: support@infralogapm.com
- **Sales Email**: sales@infralogapm.com
- **Global Toll-Free**: +1 (800) 883-9201
- **Corporate HQ**: InfraLogAPM Inc., 620 8th Ave, Floor 42, New York, NY 10018, USA
