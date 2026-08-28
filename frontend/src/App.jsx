import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import All 24 Pages
import HomePage from './pages/HomePage';
import InfrastructurePage from './pages/InfrastructurePage';
import ApmPage from './pages/ApmPage';
import LogManagementPage from './pages/LogManagementPage';
import SecurityPage from './pages/SecurityPage';
import SyntheticMonitoringPage from './pages/SyntheticMonitoringPage';
import RealUserMonitoringPage from './pages/RealUserMonitoringPage';
import DatabasePage from './pages/DatabasePage';
import NetworkPage from './pages/NetworkPage';
import ServerlessPage from './pages/ServerlessPage';
import AiCopilotPage from './pages/AiCopilotPage';
import IntegrationsPage from './pages/IntegrationsPage';
import PricingPage from './pages/PricingPage';
import SolutionsPage from './pages/SolutionsPage';
import CustomersPage from './pages/CustomersPage';
import DocsPage from './pages/DocsPage';
import BlogPage from './pages/BlogPage';
import EventsWebinarsPage from './pages/EventsWebinarsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import LiveDemoPage from './pages/LiveDemoPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F0B21] text-slate-100">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/apm" element={<ApmPage />} />
          <Route path="/log-management" element={<LogManagementPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/synthetic-monitoring" element={<SyntheticMonitoringPage />} />
          <Route path="/real-user-monitoring" element={<RealUserMonitoringPage />} />
          <Route path="/database" element={<DatabasePage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/serverless" element={<ServerlessPage />} />
          <Route path="/ai-copilot" element={<AiCopilotPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/events-webinars" element={<EventsWebinarsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          <Route path="/live-demo" element={<LiveDemoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
