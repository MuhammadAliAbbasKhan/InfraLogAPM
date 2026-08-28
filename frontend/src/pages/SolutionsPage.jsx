// src/pages/SolutionsPage.jsx
import React, { useState, useEffect } from "react";

export default function SolutionsPage() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [openProduct, setOpenProduct] = useState(0);

  // Banner data from the HTML
  const banners = [
    {
      id: 0,
      title: "EBOOK: MIGRATE TO AWS WITHOUT DISRUPTION",
      subtitle: "Define and track KPIs for successfully moving your data and applications to AWS",
      cta: "Get the eBook",
      link: "https://www.datadoghq.com/resources/cloud-excellence-aws-migration-ebook/?utm_source=inbound&utm_medium=corpsite-display&utm_campaign=dg-coreplatform-ww-homepage-rotating-ebook-awsmigration2024",
      desktopBg: "https://corp.dd-static.net/img/homepage/banner/cloud_migration_aws_ebook_supporting_assets_homepage_rotating_slide_desktop_240405.png?&ch=Width,DPR&auto=format&q=75",
      mobileBg: "https://corp.dd-static.net/img/homepage/banner/cloud_migration_aws_ebook_supporting_assets_homepage_rotating_slide_mobile_240405.png?&ch=Width,DPR&width=768&auto=format&q=75"
    },
    {
      id: 1,
      title: "EBOOK: MIGRATE TO AZURE WITHOUT DISRUPTION",
      subtitle: "Define and track KPIs for successfully moving your data and applications to Azure",
      cta: "Get the eBook",
      link: "https://www.datadoghq.com/resources/cloud-excellence-azure-migration-ebook/?utm_source=inbound&utm_medium=corpsite-display&utm_campaign=dg-coreplatform-ww-homepage-rotating-ebook-azuremigration2024",
      desktopBg: "https://corp.dd-static.net/img/homepage/banner/cloud-migration-azure-ebook-rotating-slide-2800x614-desktop-240806.png?&ch=Width,DPR&auto=format&q=75",
      mobileBg: "https://corp.dd-static.net/img/homepage/banner/cloud-migration-azure-ebook-rotating_slide-1536x1206-mobile-240806.png?&ch=Width,DPR&width=768&auto=format&q=75"
    },
    {
      id: 2,
      title: "EBOOK: MIGRATE TO GOOGLE CLOUD WITHOUT DISRUPTION",
      subtitle: "Define and track KPIs for successfully<br>moving your data and applications to GCP",
      cta: "Get the eBook",
      link: "https://www.datadoghq.com/resources/cloud-excellence-gcp-migration-ebook/?utm_source=inbound&utm_medium=corpsite-display&utm_campaign=dg--ww-homepage-rotating-ebook-gcpmigration2024",
      desktopBg: "https://corp.dd-static.net/img/homepage/banner/gcpcloudexcellence-homepage-rotating-slide-2800x614-desktop.png?&ch=Width,DPR&auto=format&q=75",
      mobileBg: "https://corp.dd-static.net/img/homepage/banner/gcpcloudexcellence-homepage-rotating-slide-1536x1206-mobile.png?&ch=Width,DPR&width=768&auto=format&q=75"
    },
    {
      id: 3,
      title: "2025 GARTNER® MAGIC QUADRANT™",
      subtitle: "Datadog has been recognized as a Leader in the Gartner Magic Quadrant™ for Digital Experience Monitoring",
      cta: "Learn More",
      link: "resources/gartner-magic-quadrant-digital-experience-monitoring-2025/?utm_source=inbound&utm_medium=corpsite-display&utm_campaign=int-rum-ww-homepage-rotating-report-gartnermq2025-dem",
      desktopBg: "https://corp.dd-static.net/img/homepage/banner/gartnerdem2025desktop2800x614.png?&ch=Width,DPR&auto=format&q=75",
      mobileBg: "https://corp.dd-static.net/img/homepage/banner/gartnerdem2025mobile1536x1206.png?&ch=Width,DPR&width=768&auto=format&q=75"
    },
    {
      id: 4,
      title: "2026 GARTNER® MAGIC QUADRANT™",
      subtitle: "Datadog has been named a leader in the 2026 Gartner® Magic Quadrant™ for Observability Platforms",
      cta: "Read the full report",
      link: "resources/gartner-magic-quadrant-observability-platforms-2026/?utm_source=inbound&utm_medium=corpsite-display&utm_campaign=dg-apm-ww-report-product-banner-gartnermq2026-obsplat",
      desktopBg: "https://corp.dd-static.net/img/homepage/banner/gartner2025obplatformrotatingdesktop2800x614.png?&ch=Width,DPR&auto=format&q=75",
      mobileBg: "https://corp.dd-static.net/img/homepage/banner/gartner2025obplatformrotatingmobile1536x1206.png?&ch=Width,DPR&width=768&auto=format&q=75"
    }
  ];

  // Product data for accordion
  const products = [
    {
      id: 0,
      name: "Infrastructure",
      description: "From overview to deep details, fast",
      link: "https://www.datadoghq.com/product/infrastructure-monitoring/",
      video: "https://corp.dd-static.net/video/Hostmap-compressed.mp4",
      poster: "https://corp.dd-static.net/img/home-hostmap-static.png?w=804&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40",
      image: "https://corp.dd-static.net/img/home-hostmap-static.png?format=png&auto=format&fit=max&w=804"
    },
    {
      id: 1,
      name: "Log Management",
      description: "Analyze and explore your logs for rapid troubleshooting",
      link: "https://www.datadoghq.com/product/log-management/",
      video: "https://corp.dd-static.net/video/clickthrough-logs.mp4",
      poster: "https://corp.dd-static.net/img/clickthrough-logs.png?w=804&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40",
      image: "https://corp.dd-static.net/img/clickthrough-logs.png?format=png&auto=format&fit=max&w=804"
    },
    {
      id: 2,
      name: "APM",
      description: "Monitor, optimize, and investigate app performance",
      link: "https://www.datadoghq.com/product/apm/",
      video: "https://corp.dd-static.net/video/APM-comp.mp4",
      poster: "https://corp.dd-static.net/img/home-apm-static.png?w=804&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40",
      image: "https://corp.dd-static.net/img/home-apm-static.png?format=png&auto=format&fit=max&w=804"
    },
    {
      id: 3,
      name: "Bits AI",
      description: "AI agents that chat, investigate, and remediate issues",
      link: "https://www.datadoghq.com/product/ai/bits-ai-agents/",
      video: "https://corp.dd-static.net/video/bits-ai-sre-autonomous_investigations_small_compressed.mp4",
      poster: "https://corp.dd-static.net/img/products/bits-ai-sre/bits-ai-sre_investigations.png?w=804&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40",
      image: "https://corp.dd-static.net/img/products/bits-ai-sre/bits-ai-sre_investigations.png?format=png&auto=format&fit=max&w=804"
    },
    {
      id: 4,
      name: "Security",
      description: "Outpace AI-powered attacks with unified security and observability",
      link: "https://www.datadoghq.com/products/security/",
      video: "https://corp.dd-static.net/video/products/security-monitoring/cloud-siem-security-analyst-2026.mp4",
      poster: "https://corp.dd-static.net/img/homepage/prioritize_high-risk_vulnerabilities_1_desktop.png?w=804&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40",
      image: "https://corp.dd-static.net/img/homepage/prioritize_high-risk_vulnerabilities_1_desktop.png?format=png&auto=format&fit=max&w=804"
    },
    {
      id: 5,
      name: "Network Monitoring",
      description: "Analyze network traffic patterns across your cloud environments",
      link: "https://www.datadoghq.com/product/network-monitoring/",
      video: "https://corp.dd-static.net/video/network-map-comp.mp4",
      poster: "https://corp.dd-static.net/img/network/network-map-poster.png?w=804&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40",
      image: "https://corp.dd-static.net/img/network/network-map-poster.png?format=png&auto=format&fit=max&w=804"
    },
    {
      id: 6,
      name: "Synthetic Monitoring",
      description: "Proactive, AI-driven monitoring of critical application features",
      link: "https://www.datadoghq.com/product/synthetic-monitoring/",
      video: "https://corp.dd-static.net/video/Browsertest_03.mp4",
      poster: "https://corp.dd-static.net/img/Browsertest_03.png?w=804&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40",
      image: "https://corp.dd-static.net/img/Browsertest_03.png?format=png&auto=format&fit=max&w=804"
    },
    {
      id: 7,
      name: "Real User Monitoring",
      description: "Monitor user journeys and frontend performance in one place",
      link: "https://www.datadoghq.com/product/real-user-monitoring/",
      video: "https://corp.dd-static.net/video/products/rum/rum-video.mp4",
      poster: "https://corp.dd-static.net/img/products/rum/rum-video.png?w=804&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40",
      image: "https://corp.dd-static.net/img/products/rum/rum-video.png?format=png&auto=format&fit=max&w=804"
    },
    {
      id: 8,
      name: "Serverless",
      description: "A comprehensive view of your serverless application",
      link: "https://www.datadoghq.com/product/serverless-monitoring/",
      video: "https://corp.dd-static.net/video/troubleshooting-serverless-1080p.mp4",
      poster: "https://corp.dd-static.net/img/serverless/serverless-1-all-your-functions-poster.png?w=804&fit=crop&fm=jpg&auto=format&dpr=1.75&q=40",
      image: "https://corp.dd-static.net/img/serverless/serverless-1-all-your-functions-poster.png?format=png&auto=format&fit=max&w=804"
    }
  ];

  // Customer logos
  const customerLogos = [
    { name: "LG Electronics", svg: "lg" },
    { name: "Itaú", svg: "itau" },
    { name: "OpenAI", svg: "openai" },
    { name: "FICO", svg: "fico" },
    { name: "MidJourney", svg: "midjourney" },
    { name: "Perplexity AI", svg: "perplexity" }
  ];

  // Auto-rotate banners
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="solutions-page" style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff" }}>
      
      {/* ===== ANNOUNCEMENT BANNER ===== */}
      <div className="announcement-banner text-center" style={{
        backgroundColor: "#632ca6",
        padding: "8px 0",
        width: "100%"
      }}>
        <a className="fw-semibold text-nowrap" href="https://www.datadoghq.com/resources/gartner-magic-quadrant-observability-platforms-2026/?utm_source=inbound&utm_medium=corpsite-display&utm_campaign=dg-apm-ww-announcement-corpsite-announcement-gartnermq2026-obsplat" style={{
          color: "#ffffff",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "600"
        }}>
          <span className="d-none d-md-block">Datadog named a Leader in the Gartner® Magic Quadrant™ for Observability Platforms</span>
          <span className="d-block d-md-none">Leader in the Gartner® Magic Quadrant™</span>
        </a>
      </div>

      {/* ===== HERO SECTION ===== */}
      <header className="intro-header header-home" style={{
        paddingTop: "48px",
        backgroundColor: "#f5f5f5"
      }}>
        <div className="tw-flex tw-flex-col">
          <div className="container tw-text-center" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
            <h1 className="tw-text-h1-bold--corp-ui tw-font-semibold" style={{
              fontSize: "48px",
              fontWeight: "600",
              lineHeight: "1.2",
              color: "#1a1a1a"
            }}>AI-Powered Observability and Security</h1>
            <span className="tw-block tw-text-subtitle-1--corp-ui" style={{
              display: "block",
              fontSize: "24px",
              lineHeight: "1.4",
              color: "#555",
              marginTop: "12px"
            }}>See inside any stack, any app, at any scale, anywhere.</span>
          </div>

          {/* Hero Video */}
          <div className="section-video container text-center" style={{
            marginTop: "36px",
            marginBottom: "40px",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            <video
              poster="https://corp.dd-static.net/img/dd-homepage.jpg?width=1700&height=956&fit=crop&format=auto&quality=80"
              id="datadog-video"
              playsInline
              autoPlay
              muted
              loop
              preload="auto"
              style={{
                width: "100%",
                maxWidth: "1100px",
                borderRadius: "12px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
              }}
            >
              <source src="https://corp.dd-static.net//video/home/homepage-animation-1080.mp4?auto=format&fit=max" type="video/mp4" />
            </video>
          </div>

          {/* CTA Buttons */}
          <div className="container" style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap"
          }}>
            <div style={{ flex: "0 0 auto" }}>
              <a
                href="#"
                className="js-cta-HeaderCTA btn"
                style={{
                  backgroundColor: "#632ca6",
                  color: "#ffffff",
                  padding: "16px 32px",
                  borderRadius: "4px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background-color 0.3s ease"
                }}
              >
                Free trial
              </a>
            </div>
            <div style={{ flex: "0 0 auto" }}>
              <a
                href="#"
                className="btn modal-tour"
                style={{
                  border: "2px solid #632ca6",
                  color: "#632ca6",
                  padding: "16px 32px",
                  borderRadius: "4px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  transition: "all 0.3s ease"
                }}
              >
                <div className="d-flex justify-content-center align-items-center" style={{ gap: "8px" }}>
                  <i style={{ fontSize: "20px" }}>▶</i>
                  <span>SEE THE PLATFORM</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Customer Logos */}
        <div className="container enterprise-customers" style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px 80px 20px",
          position: "relative"
        }}>
          <div className="row justify-content-center">
            <div className="col-12" style={{ textAlign: "center" }}>
              <span style={{
                display: "block",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "1px",
                color: "#888",
                textTransform: "uppercase"
              }}>Thousands of customers love &amp; trust Datadog</span>
            </div>
            <div className="col-12 col-md-10 col-lg-12">
              <div className="logos" style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px 60px"
              }}>
                {/* LG Electronics */}
                <a href="https://www.datadoghq.com/customers/" aria-label="LG Electronics Customer Logo" style={{ pointerEvents: "none" }}>
                  <svg width="120" height="53" viewBox="0 0 752 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M666.061 189.973H706.381V227.537C698.981 230.363 684.461 233.19 670.691 233.19C626.081 233.19 611.251 210.516 611.251 164.473C611.251 120.531 625.371 94.6721 669.931 94.6721C694.771 94.6721 708.861 102.475 720.541 117.355L751.351 89.0081C732.541 62.1421 699.691 54.0001 668.861 54.0001C599.541 53.9731 563.081 91.8361 563.081 164.107C563.081 236.018 596.021 275 668.491 275C701.771 275 734.291 266.52 752.001 254.09V149.939H666.061V189.973ZM454.531 230.007H557.151V271.81H405.001V57.1511H454.531V230.007Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M282.531 282.53C347.161 217.895 347.161 113.096 282.521 48.4771C217.891 -16.1539 113.091 -16.1619 48.4712 48.4701C-16.1588 113.103 -16.1587 217.903 48.4813 282.52C113.111 347.16 217.911 347.16 282.531 282.53Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M114.921 132.652C118.711 132.634 122.401 131.497 125.541 129.386C128.671 127.275 131.111 124.284 132.551 120.79C133.981 117.297 134.351 113.456 133.601 109.756C132.851 106.054 131.021 102.658 128.341 99.9941C125.651 97.3311 122.241 95.5201 118.531 94.7901C114.821 94.0601 110.971 94.4441 107.481 95.8931C103.981 97.3431 101.001 99.7921 98.9012 102.933C96.8012 106.074 95.6813 109.765 95.6813 113.541C95.6813 116.057 96.1913 118.547 97.1613 120.869C98.1313 123.192 99.5512 125.3 101.331 127.074C103.121 128.849 105.241 130.255 107.571 131.212C109.901 132.17 112.401 132.659 114.921 132.652ZM290.431 170.198H206.051V157.724H302.801C302.931 160.14 303.001 162.555 303.001 165C303.001 240.11 241.661 301 166.011 301C90.3512 301 29.0012 240.15 29.0012 165C29.0012 89.8571 90.3312 29.0001 165.991 29.0001C167.991 29.0001 169.981 29.0401 171.961 29.1221V41.5031C169.981 41.4151 168.001 41.3711 166.011 41.3711C97.2512 41.3711 41.4812 96.7231 41.4812 164.987C41.4812 233.253 97.2412 288.62 166.011 288.62C232.891 288.62 287.531 236.244 290.421 170.545L290.431 170.198ZM205.861 222.167H171.941V95.0181H159.411V234.726H171.971V234.642H205.891L205.861 222.167Z" fill="white"/>
                  </svg>
                </a>

                {/* Itaú */}
                <a href="https://www.datadoghq.com/customers/" aria-label="Itaú Customer Logo" style={{ pointerEvents: "none" }}>
                  <svg width="120" height="120" viewBox="0 0 474 474" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M206.077 0.299176C192.437 0.624176 182.427 1.10415 164.067 2.23515C155.587 2.74215 146.317 3.48818 139.797 4.14018C138.157 4.31818 134.727 4.64715 132.197 4.88615C121.567 5.93015 105.777 7.92316 99.1374 9.05516C97.7274 9.29516 95.6774 9.62319 94.5174 9.80119C93.3874 9.95219 91.3575 10.3072 90.0475 10.5472C88.7375 10.7862 86.5274 11.2042 85.1374 11.4392C80.2174 12.2742 71.8474 13.9732 67.1074 15.1062C65.7974 15.4342 63.4475 15.9981 61.8975 16.3581C60.3475 16.7131 58.9475 17.0422 58.7675 17.0722C50.0375 19.1562 41.3674 23.3592 34.6974 28.8102C28.2074 34.0842 22.3974 42.6051 19.4774 51.0661C18.9974 52.3761 18.5174 53.7171 18.3774 54.0451C17.8674 55.1781 15.6674 64.7092 14.0874 72.5182C13.8474 73.8282 13.4274 75.7632 13.1874 76.8382C12.9474 77.9082 12.6275 79.7852 12.4175 81.0072C12.2375 82.2272 11.9974 83.7192 11.8474 84.2832C11.3974 85.9842 9.58749 97.6012 8.42749 106.033C7.28749 114.197 6.54746 120.128 5.89746 126.144C5.56746 129.091 5.23749 131.981 5.17749 132.549C5.08749 133.113 4.81748 136.004 4.54748 138.956C4.30748 141.903 3.95746 145.509 3.77746 147C3.14746 152.479 1.59739 176.346 0.827389 193.18C0.237389 205.66 -0.152509 232.386 0.0574911 246.956C0.267491 265.128 0.707437 281.368 1.12744 287.027C1.27744 289.319 1.57743 294.149 1.74743 297.753C1.92743 301.358 2.16738 305.975 2.31738 308.031C3.00738 318.34 3.53749 325.1 3.80749 327.25C3.95749 328.56 4.30748 332.04 4.54748 334.96C4.78748 337.88 5.14748 341.37 5.29748 342.71C5.47748 344.05 5.80747 346.94 6.03747 349.15C6.78747 356.21 7.35739 360.82 7.82739 363.89C8.06739 365.53 8.4874 368.33 8.7174 370.15C9.5874 376.7 10.5974 383.08 11.6974 388.92C11.9374 390.23 12.3274 392.44 12.5974 393.83C13.0974 396.81 14.2674 402.74 15.0974 406.5C17.9574 419.64 19.2074 423.57 22.5774 430.03C23.4974 431.82 24.6874 433.91 25.2274 434.65C25.7274 435.4 26.4774 436.47 26.8674 437.04C28.5574 439.57 33.4174 444.51 36.0974 446.42C36.5474 446.75 37.4074 447.37 37.9774 447.82C38.5774 448.29 39.1375 448.65 39.2875 448.65C39.4075 448.65 39.7074 448.86 39.9374 449.1C41.1074 450.23 49.2975 454.14 52.8075 455.18C53.4675 455.39 54.2674 455.65 54.5974 455.81C55.3774 456.16 59.7475 457.26 65.0275 458.46C67.3175 458.99 69.6674 459.56 70.2374 459.71C71.6074 460.06 80.2474 461.79 86.7674 462.98C90.5274 463.67 97.8275 464.83 102.407 465.49C104.137 465.72 106.347 466.05 107.327 466.23C110.927 466.86 125.827 468.59 135.177 469.48C138.547 469.81 142.687 470.19 144.407 470.37C147.217 470.67 150.067 470.91 163.777 471.89C165.827 472.04 170.507 472.31 174.197 472.49C177.897 472.67 183.047 472.93 185.677 473.08C206.877 474.31 267.537 474.31 288.447 473.08C291.067 472.91 296.217 472.67 299.917 472.49C306.257 472.19 308.587 472.04 318.527 471.3C331.277 470.31 350.027 468.49 356.367 467.6C358.177 467.33 361.307 466.92 363.367 466.65C370.957 465.67 381.387 464.09 387.347 462.98C393.867 461.79 402.507 460.06 403.877 459.71C404.447 459.56 406.797 458.99 409.097 458.46C414.247 457.29 418.717 456.16 419.517 455.81C420.507 455.45 421.507 455.1 422.497 454.76C424.937 453.96 433.047 450.11 433.727 449.46C433.937 449.25 434.537 448.8 435.037 448.5C437.367 447.05 438.437 446.21 440.547 444.3C442.937 442.13 446.247 438.55 447.047 437.33C447.317 436.92 448.027 435.9 448.617 435.1C449.247 434.27 449.757 433.52 449.757 433.4C449.757 433.28 450.237 432.45 450.797 431.55C451.367 430.66 452.047 429.35 452.317 428.63C452.617 427.95 452.917 427.2 453.037 427.06C453.597 426.31 455.687 420.38 456.577 417.01C457.977 411.8 460.597 399.5 461.557 393.68C461.787 392.2 462.057 390.8 462.147 390.56C462.417 389.9 464.057 379.68 465.547 369.26C465.867 366.96 466.197 364.67 466.287 364.19C466.527 362.82 467.597 353.67 468.077 348.85C468.317 346.46 468.637 343.72 468.817 342.74C468.997 341.75 469.327 338.54 469.567 335.59C469.807 332.64 470.137 329 470.277 327.54C470.457 326.06 470.727 322.66 470.907 319.95C471.087 317.23 471.357 313.9 471.497 312.5C471.677 311.1 472.007 305.944 472.247 301.03C472.517 296.112 472.817 290.064 472.987 287.623C474.337 265.962 474.337 209.118 472.987 186.774C472.837 184.239 472.577 179.267 472.397 175.75C472.217 172.234 471.947 167.586 471.797 165.47C471.617 163.325 471.237 158.051 470.907 153.704C470.577 149.354 470.247 145.269 470.157 144.617C470.067 143.959 469.807 141.07 469.567 138.21C469.327 135.352 469.057 132.669 468.967 132.252C468.877 131.835 468.557 129.091 468.227 126.144C467.457 119.022 466.497 111.159 466.287 110.237C466.197 109.819 465.867 107.435 465.547 104.989C464.087 93.8492 461.377 78.3252 459.047 67.7502C458.717 66.2592 458.187 63.8472 457.857 62.3872C457.027 58.5732 456.037 54.7301 455.717 54.0451C455.567 53.7171 455.297 52.9132 455.087 52.2572C454.437 50.0542 451.127 42.6942 450.287 41.5312C450.167 41.3522 449.217 39.9542 448.207 38.4052C446.087 35.2172 440.667 29.5562 437.427 27.1722C430.987 22.4352 423.837 19.2172 414.607 16.9532C413.017 16.5642 411.427 16.1651 409.837 15.7591C408.737 15.4341 406.527 14.9562 401.797 13.9732C400.457 13.6922 399.107 13.4031 397.777 13.1081C392.027 11.7091 373.317 8.66916 361.137 7.12016C358.687 6.82216 356.277 6.49416 355.767 6.37816C354.877 6.19616 350.557 5.75215 341.767 4.88615C339.327 4.64715 335.957 4.29118 334.317 4.14018C332.687 3.96218 329.737 3.69514 327.767 3.51414C325.807 3.36814 322.587 3.09715 320.617 2.95115C313.947 2.38315 295.417 1.31214 285.167 0.863141C265.357 -0.000858963 228.777 -0.267824 206.077 0.299176ZM74.8274 201.611C75.0074 201.758 75.8674 202.029 76.7274 202.236C78.3374 202.623 80.6075 203.666 82.2975 204.798C83.6375 205.691 86.7975 209.087 87.4275 210.281C87.7275 210.876 88.0474 211.413 88.1374 211.503C88.2274 211.591 88.4974 212.186 88.7374 212.843C88.9474 213.496 89.2074 214.184 89.3674 214.33C89.7474 214.898 90.1974 218.441 90.1974 221.065C90.1974 223.627 89.8075 226.636 89.2975 227.738C87.6975 231.431 86.9175 232.652 84.8975 234.8C83.0175 236.736 82.2475 237.332 79.6775 238.584C77.5975 239.626 76.1075 240.163 74.9175 240.279C73.9575 240.399 73.1275 240.608 73.0375 240.728C72.8275 241.087 66.3674 241.087 66.3674 240.728C66.3674 240.608 65.6175 240.399 64.6675 240.279C63.7375 240.163 62.5874 239.893 62.0774 239.685C61.4274 239.394 60.7774 239.126 60.1074 238.881C59.5474 238.673 59.0075 238.432 58.9175 238.344C58.8275 238.225 58.3774 237.958 57.8774 237.718C56.1474 236.856 52.5675 232.891 51.5275 230.716C50.9575 229.554 50.4275 228.422 50.2775 228.186C49.2675 226.158 49.0875 216.923 50.0375 214.778C50.3075 214.211 50.6975 213.26 50.9075 212.692C51.1075 212.128 51.3474 211.59 51.4374 211.503C51.5274 211.413 51.8874 210.814 52.2174 210.161C52.7774 209.056 56.3274 205.243 56.8274 205.243C56.9474 205.243 57.2175 205.035 57.4275 204.768C57.9975 204.141 60.8874 202.743 62.6374 202.296C63.4774 202.086 64.3974 201.788 64.7274 201.638C65.0574 201.491 65.8574 201.341 66.5174 201.252C68.2674 201.074 74.4374 201.341 74.8274 201.611ZM399.407 222.375V237.419H341.617V217.282L344.837 216.773C351.957 215.672 356.397 214.926 356.667 214.748C356.837 214.628 358.297 214.392 359.937 214.184C361.577 213.975 363.067 213.704 363.217 213.584C363.397 213.469 364.797 213.199 366.347 212.99C367.897 212.812 369.917 212.453 370.817 212.217C371.707 212.009 373.587 211.68 374.987 211.503C376.387 211.32 377.787 211.054 378.117 210.934C378.437 210.787 379.927 210.517 381.387 210.309C382.877 210.13 384.547 209.863 385.117 209.682C385.677 209.535 387.827 209.119 389.877 208.789C391.937 208.461 394.617 208.018 395.837 207.808C397.057 207.569 398.367 207.391 398.757 207.36L399.407 207.329V222.375ZM152.757 235.662V253.509H182.537V280.026H152.727L152.837 307.645C152.937 337.41 152.867 335.95 154.487 339.61C155.707 342.44 159.157 345.33 162.137 346.05C162.647 346.17 163.207 346.4 163.447 346.58C164.017 347.03 176.077 347.03 176.617 346.55C176.847 346.38 177.927 346.14 179.057 346.02L181.057 345.81V371.94L180.247 372.29C179.507 372.62 176.077 373.16 171.377 373.72C164.667 374.5 152.457 374.59 151.737 373.84C151.567 373.7 151.087 373.58 150.637 373.58C149.477 373.58 144.647 372.68 144.287 372.41C144.117 372.29 143.307 372 142.477 371.82C141.677 371.61 140.867 371.34 140.687 371.22C140.537 371.07 139.857 370.81 139.197 370.6C138.547 370.39 137.947 370.12 137.857 370.03C137.767 369.94 137.237 369.61 136.667 369.28C134.197 367.97 133.447 367.5 132.137 366.39C131.367 365.77 130.647 365.23 130.497 365.23C130.207 365.2 127.937 362.73 126.157 360.47C124.787 358.71 122.757 355.34 122.067 353.61C121.827 353.05 121.567 352.51 121.477 352.42C121.357 352.33 121.057 351.41 120.757 350.34C120.487 349.27 120.137 348.13 119.987 347.8C119.837 347.48 119.477 346.14 119.247 344.83C118.987 343.58 118.717 342.34 118.437 341.1C118.227 340.21 118.077 329.72 117.987 309.88L117.867 280.026H100.617V253.509H117.897V223.476L119.927 223.268C121.027 223.152 122.067 222.943 122.217 222.823C122.397 222.703 123.857 222.437 125.497 222.228C127.137 222.02 128.627 221.718 128.777 221.602C128.947 221.483 130.827 221.154 132.947 220.887C135.087 220.586 136.967 220.261 137.117 220.142C137.287 220.022 138.277 219.813 139.347 219.724C140.747 219.556 142.137 219.328 143.517 219.041C146.707 218.384 152.277 217.517 152.547 217.669C152.667 217.727 152.757 225.833 152.757 235.662ZM251.507 250.677C255.677 250.916 260.387 251.453 260.737 251.72C260.917 251.839 261.637 252.049 262.377 252.138C264.077 252.408 268.217 253.628 270.717 254.64C272.807 255.476 277.457 257.798 278.167 258.397C278.407 258.575 278.937 258.93 279.357 259.111C279.777 259.32 281.087 260.359 282.247 261.376C283.407 262.419 284.487 263.312 284.627 263.369C285.077 263.578 290.377 270.015 290.377 270.37C290.377 270.46 290.647 270.939 290.977 271.383C291.607 272.279 294.257 277.434 294.257 277.762C294.257 277.878 294.497 278.535 294.817 279.219C295.117 279.907 295.477 280.95 295.597 281.514C295.717 282.082 295.927 282.677 296.037 282.854C296.157 283.006 296.427 283.956 296.637 284.941C296.817 285.923 297.057 286.94 297.147 287.175C297.267 287.414 297.527 288.693 297.767 290.007C298.127 291.973 298.217 299.391 298.337 332.22L298.457 372.08H265.957L265.927 368.57C265.897 366.66 265.807 363.89 265.687 362.43L265.507 359.75L264.647 360.94C263.277 362.76 258.777 367.05 256.987 368.24C253.087 370.81 252.047 371.43 250.967 371.79C250.317 371.97 249.447 372.32 249.037 372.56C248.587 372.77 247.487 373.13 246.587 373.31C245.697 373.51 244.807 373.78 244.657 373.9C243.137 375.03 224.367 375.01 222.907 373.87C222.757 373.75 221.687 373.49 220.527 373.28C219.387 373.07 218.047 372.74 217.547 372.5C217.067 372.29 215.787 371.76 214.747 371.34C213.547 370.82 212.377 370.24 211.237 369.61C210.437 369.12 209.637 368.66 208.817 368.21C207.567 367.53 207.147 367.14 203.757 363.74C200.267 360.26 199.817 359.78 199.817 359.45C199.817 359.33 199.437 358.68 198.987 357.99C198.507 357.31 197.827 356.06 197.467 355.25C197.107 354.42 196.637 353.43 196.427 353.02C196.187 352.6 195.857 351.53 195.647 350.63C195.447 349.74 195.177 348.85 195.057 348.7C194.727 348.28 194.157 344.05 194.157 342.2C194.157 341.34 194.017 340.48 193.837 340.3C193.477 339.94 193.567 338.75 194.487 331.57C194.667 330.17 194.937 328.88 195.057 328.74C195.177 328.56 195.437 327.78 195.617 326.98C196.007 325.43 196.817 323.4 197.647 321.88C197.917 321.38 198.267 320.69 198.457 320.33C198.627 319.95 198.867 319.65 199.017 319.65C199.137 319.65 199.227 319.47 199.227 319.26C199.227 318.93 202.497 314.67 203.067 314.29C203.187 314.2 203.397 313.9 203.487 313.6C203.607 313.27 203.957 312.98 204.287 312.89C204.617 312.8 204.887 312.62 204.887 312.5C204.887 312.2 209.887 308.267 211.587 307.285C212.807 306.54 215.547 305.141 219.537 303.232C220.107 302.936 225.677 301.149 228.127 300.463C229.017 300.196 230.777 299.836 231.997 299.659C233.217 299.45 234.377 299.21 234.527 299.095C234.707 298.974 236.487 298.704 238.547 298.526C240.607 298.348 243.137 298.051 244.207 297.9C248.437 297.275 263.297 297.395 264.877 298.051C265.417 298.287 265.447 298.17 265.237 295.636C265.117 294.176 264.917 292.924 264.797 292.835C264.647 292.746 264.467 292.182 264.347 291.583C264.137 290.481 263.007 288.071 261.937 286.429C261.247 285.39 258.357 282.406 258.027 282.406C257.917 282.406 257.407 282.109 256.897 281.723C255.587 280.768 253.477 279.818 252.187 279.578C251.567 279.459 251.057 279.25 251.057 279.13C251.057 277.82 231.817 277.612 226.037 278.894C225.287 279.041 223.567 279.369 222.167 279.609C220.767 279.844 219.367 280.173 219.037 280.324C218.707 280.47 217.637 280.742 216.647 280.919C215.667 281.097 214.597 281.367 214.267 281.514C213.937 281.664 212.747 281.993 211.617 282.26C210.487 282.527 209.417 282.824 209.237 282.974C209.057 283.095 208.257 283.391 207.417 283.6C206.617 283.809 205.777 284.107 205.627 284.226C205.457 284.346 204.647 284.612 203.837 284.822C203.007 285 201.847 285.416 201.257 285.714C200.627 286.042 200.057 286.282 199.967 286.282C199.877 286.282 199.817 280.053 199.817 272.458C199.817 261.701 199.917 258.574 200.207 258.335C200.417 258.157 201.257 257.86 202.057 257.651C202.887 257.473 203.697 257.203 203.837 257.084C204.027 256.964 205.007 256.609 206.077 256.338C207.147 256.04 208.157 255.715 208.307 255.596C208.487 255.445 209.417 255.205 210.367 255.001C211.347 254.793 212.367 254.522 212.597 254.374C212.867 254.256 214.087 253.926 215.307 253.66C216.257 253.475 217.207 253.266 218.147 253.034C218.467 252.941 220.137 252.675 221.867 252.435C223.597 252.199 225.407 251.871 225.887 251.72C227.617 251.186 243.227 250.202 246.737 250.411C247.717 250.468 249.867 250.588 251.507 250.677ZM87.2174 312.8V372.08H52.3674V253.509H87.2174V312.8ZM350.557 290.451C350.557 325.73 350.707 332.55 351.417 333.5C351.567 333.65 351.747 334.25 351.867 334.82C352.287 337.05 354.217 340.3 356.427 342.5C357.587 343.69 358.897 344.74 359.317 344.85C359.757 344.95 360.087 345.12 360.087 345.24C360.087 345.36 361.137 345.78 362.407 346.19C364.317 346.79 365.337 346.91 368.307 346.91C370.397 346.91 372.217 346.76 372.627 346.58C373.017 346.38 373.937 346.08 374.687 345.87C375.427 345.66 376.767 345.04 377.667 344.44C379.337 343.37 382.427 340.51 382.427 340.03C382.427 339.88 382.847 339.22 383.327 338.6C383.827 337.94 384.217 337.29 384.217 337.11C384.217 336.93 384.487 336.3 384.787 335.71C385.117 335.11 385.467 334.1 385.587 333.47C385.677 332.82 385.887 332.16 386.037 332.01C386.787 331.06 386.897 325.04 386.897 290.095V253.509H421.757V372.09H405.247C392.357 372.09 388.657 372 388.477 371.7C388.357 371.52 388.207 368.69 388.147 365.44C388.087 362.22 387.937 359.57 387.827 359.57C387.707 359.57 387.347 359.93 386.987 360.38C385.327 362.64 382.697 365.2 378.587 368.6C377.997 369.07 376.777 369.73 374.087 371.04C372.867 371.64 371.527 372.32 371.117 372.53C370.697 372.74 369.567 373.07 368.577 373.28C367.597 373.49 366.727 373.75 366.647 373.87C366.347 374.32 361.077 374.77 355.857 374.77C350.737 374.77 346.567 374.41 345.347 373.9C345.017 373.75 343.887 373.4 342.807 373.13C341.737 372.86 340.757 372.5 340.577 372.38C340.427 372.26 339.717 371.96 339.027 371.76C338.317 371.58 337.747 371.31 337.747 371.19C337.747 371.07 337.217 370.81 336.557 370.6C335.907 370.39 335.367 370.12 335.367 370C335.367 369.88 335.037 369.64 334.647 369.46C332.087 368.3 326.277 362.85 323.837 359.33C322.347 357.19 320.047 352.9 319.577 351.32C319.397 350.69 319.037 349.77 318.827 349.29C318.627 348.79 318.267 347.72 318.087 346.91C317.907 346.08 317.637 345.21 317.487 344.92C317.347 344.64 317.077 343.25 316.897 341.79C316.717 340.36 316.387 338.9 316.207 338.57C315.937 338.12 315.817 327.48 315.767 295.725L315.677 253.509H350.557V290.451Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M247.278 319.28C245.828 319.43 244.338 319.67 244.008 319.82C243.678 320 242.618 320.26 241.638 320.47C240.688 320.65 239.408 321.01 238.818 321.28C234.358 323.22 232.198 324.51 230.718 326.06C229.288 327.56 227.858 330.33 227.628 332.06C227.568 332.66 227.358 333.44 227.178 333.77C226.848 334.45 226.968 336.57 227.508 339.35C228.098 342.37 230.478 346.04 232.578 347.15C236.318 349.09 237.038 349.39 239.118 349.72C242.848 350.28 249.978 349.96 251.518 349.12C251.788 348.97 252.888 348.46 253.958 347.98C255.028 347.48 256.418 346.67 257.068 346.16C257.728 345.65 258.468 345.06 258.738 344.85C260.428 343.56 263.548 338.37 263.958 336.22C264.048 335.68 264.288 335.05 264.468 334.81C264.668 334.54 264.818 331.79 264.878 326.86L264.998 319.34L263.398 319.16C261.228 318.89 250.538 318.98 247.278 319.28Z" fill="black"/>
                  </svg>
                </a>

                {/* OpenAI */}
                <a href="https://www.datadoghq.com/customers/" aria-label="OpenAI Customer Logo" style={{ pointerEvents: "none" }}>
                  <svg width="120" height="39" viewBox="0 0 1006 326" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M169.42 49.12c49.75 0 90.25 40.5 90.25 90.25s-40.5 90.25-90.25 90.25-90.25-40.5-90.25-90.25 40.5-90.25 90.25-90.25ZM169.92 197.12c30 0 54.75-24 54.75-57.75s-24.75-57.75-54.75-57.75h-1c-30 0-54.75 24-54.75 57.75s24.75 57.75 54.75 57.75h1Z" fill="black"/>
                    <path d="M277.01 276.88V101.88h32.5v13c7.25-8.5 20.5-15.75 38-15.75 35 0 62 28.75 62 65.25s-27 65.25-62 65.25c-17.5 0-30.75-7.25-38-15.75v63h-32.5ZM343.26 200.88c18.25 0 33.75-14.25 33.75-36.25s-15.5-36.75-33.75-36.75h-1c-18.25 0-33.75 14.75-33.75 36.75s15.5 36.25 33.75 36.25h1Z" fill="black"/>
                    <path d="M485.36 229.62c-37 0-64-26.75-64-64.75s28.5-65.75 64-65.75 63 25.5 63 67.75c0 2.75 0 5.5-.25 8.5h-94.25c.5 11.5 11.5 28 30.25 28h1c13.75 0 24.25-7.5 28.5-15.75h33c-5.75 19.25-25.5 42-61.25 42ZM515.11 151.62c-1-13.25-12.5-26.25-30-26.25h-1c-16 0-27.5 12.75-30 26.25h61Z" fill="black"/>
                    <path d="M567.78 226.88v-125h32.5v13c7-8.25 20-15.75 36.25-15.75 29.25 0 48.75 19.5 48.75 52v75.75h-32.5v-71.75c0-17.25-9.75-27-25-27h-1c-15.75 0-26.5 14-26.5 32.25v66.5h-32.5Z" fill="black"/>
                    <path d="M697.84 226.88l71.75-175h39.5l70 175h-36.5l-15-38.25h-79.25l-15.25 38.25h-35.25ZM760.09 158.62h55.75l-27.75-70.5-28 70.5Z" fill="black"/>
                    <path d="M892.33 226.88V51.88h34.5v175h-34.5Z" fill="black"/>
                  </svg>
                </a>

                {/* FICO */}
                <a href="https://www.datadoghq.com/customers/" aria-label="FICO Customer Logo" style={{ pointerEvents: "none" }}>
                  <svg width="120" height="43" viewBox="0 0 624 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152.157 50.2622L152.157 4.83682L0 4.83682L0 216.847L45.6646 216.847L45.6646 141.138L136.943 141.138L136.943 95.7129L45.6646 95.7129L45.6646 50.2622L152.157 50.2622Z" fill="black"/>
                    <path d="M212.025 4.83682L166.386 4.83682L166.386 216.847L212.025 216.847L212.025 4.83682Z" fill="black"/>
                    <path d="M383.127 156.53C373.887 165.246 362.288 171.08 349.758 173.315 337.228 175.55 324.315 174.088 312.61 169.109 300.905 164.13 290.918 155.852 283.881 145.294 276.844 134.736 273.064 122.36 273.007 109.69 272.95 97.0203 276.618 84.6105 283.558 73.9897 290.499 63.3689 300.41 55.0014 312.07 49.9175 323.729 44.8336 336.629 43.2558 349.178 45.3783 361.728 47.5008 373.38 53.231 382.698 61.8631 388.108 47.7322 395.936 34.6403 405.833 23.1672 389.559 10.524 370.036 2.69678 349.501 0.581463 328.966-1.53386 308.247 2.14813 289.716 11.206 271.185 20.264 255.591 34.3317 244.718 51.7993 233.845 69.2668 228.133 89.4282 228.236 109.976 228.338 130.525 234.251 150.629 245.298 167.987 256.345 185.347 272.078 199.26 290.699 208.134 309.319 217.008 330.074 220.485 350.587 218.167 371.101 215.849 390.543 207.829 406.691 195.025 396.68 183.631 388.709 170.61 383.127 156.53Z" fill="black"/>
                    <path d="M505.639 0.115774C483.892 0.115775 462.633 6.53457 444.552 18.5604 426.47 30.5861 412.378 47.6785 404.057 67.6761 395.736 87.6737 393.56 109.678 397.805 130.907 402.049 152.136 412.523 171.634 427.902 186.938 443.282 202.242 462.875 212.662 484.204 216.882 505.534 221.101 527.641 218.93 547.731 210.644 567.821 202.358 584.991 188.327 597.069 170.328 609.148 152.328 615.592 131.168 615.587 109.524 615.587 95.1537 612.743 80.9247 607.217 67.649 601.691 54.3736 593.592 42.3115 583.382 32.1517 573.172 21.9919 561.051 13.9335 547.712 8.43678 534.373 2.94001 520.076 0.112476 505.639 0.115774ZM505.639 174.51C492.724 174.515 480.098 170.708 469.357 163.57 458.616 156.432 450.244 146.285 445.298 134.411 440.352 122.536 439.056 109.468 441.572 96.8608 444.088 84.2527 450.305 72.6712 459.436 63.5795 468.566 54.4887 480.2 48.2969 492.866 45.7873 505.532 43.2777 518.662 44.5632 530.594 49.4812 542.526 54.3991 552.725 62.7284 559.9 73.4163 567.076 84.1036 570.906 96.6693 570.906 109.524 570.906 126.754 564.031 143.28 551.791 155.467 539.552 167.654 522.951 174.504 505.639 174.51Z" fill="black"/>
                  </svg>
                </a>

                {/* MidJourney */}
                <a href="https://www.datadoghq.com/customers/" aria-label="MidJourney Customer Logo" style={{ pointerEvents: "none" }}>
                  <svg width="120" height="40" viewBox="0 0 1227 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M584.264 216.732L603.116 274.097L620.357 216.732H649.622V297.559H630.116V240.211C627.691 239.606 627.805 241.583 627.186 243.462C621.516 260.961 618.041 279.882 612.468 297.479L592.377 297.267L577.372 244.083L576.765 241.926C576.426 240.717 575.429 239.802 574.207 239.558L576.163 297.576H557.31V216.749H584.293L584.264 216.732Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1180.88 234.506L1192.89 276.178L1206.21 234.506H1227C1227 234.506 1210.4 290.444 1199.4 310.701C1196.1 316.772 1187.23 325.671 1179.9 325.671H1164.63V308.745H1175.35C1178.75 308.745 1185.83 302.392 1183.97 298.167L1158.77 234.506H1180.86H1180.88Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1033.56 234.215L1036.5 242.698C1038.02 241.175 1038.71 240.782 1039.82 239.832C1048.85 232.119 1067.07 231.398 1074.98 241.093C1076.28 242.682 1080.22 248.118 1080.22 251.524V297.576H1058.68V258.008C1058.92 254.998 1056.93 252.263 1056.05 251.541C1051.75 248.003 1044.97 250.085 1042.22 254.637C1041.91 255.159 1040.39 256.816 1040.41 260.222V297.559H1018.87V234.198H1033.56V234.215Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M909.092 234.506H909.144C909.092 247.057 909.029 259.614 908.978 272.165C908.978 275.513 909.127 279.303 911.632 281.516C913.272 282.978 915.629 283.42 917.807 283.162C921.23 282.749 925.118 281.419 926.769 278.403C928.048 276.052 928.099 265.009 928.099 265.009V234.506C934.848 234.506 941.596 234.506 948.345 234.523C948.345 255.692 948.345 276.843 948.345 298.012C943.121 298.012 937.892 298.012 932.652 298.012C932.652 298.012 931.654 291.711 931.322 291.367C930.765 290.788 929.819 290.776 929.08 291.069C928.34 291.367 927.755 291.957 927.165 292.496C921.89 297.318 914.763 300.242 907.636 299.83C902.229 299.52 896.92 297.175 893.135 293.27C888.663 288.643 888.124 282.6 888.142 276.431C888.159 262.469 888.193 248.485 888.205 234.523C895.171 234.523 902.149 234.523 909.109 234.523L909.092 234.506Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M798.049 234.506V305.282C798.049 306.395 798.215 307.616 798.049 308.711C797.888 309.806 797.613 310.936 797.269 312.014C796.569 314.169 795.537 316.211 794.219 318.045C792.556 320.333 790.406 322.305 787.877 323.567C782.201 326.393 775.258 325.803 769.174 325.035C768.36 324.937 764.868 324.266 764.868 323.487V308.172C767.397 309.806 777.23 307.702 777.23 304.594V234.523H798.049V234.506Z" fill="black"/>
                  </svg>
                </a>

                {/* Perplexity AI */}
                <a href="https://www.datadoghq.com/customers/" aria-label="Perplexity AI Customer Logo" style={{ pointerEvents: "none" }}>
                  <svg width="120" height="30" viewBox="0 0 1588 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M101.008 42L190.99 124.905V124.886V42.1913H208.506V125.276L298.891 42V136.524H336V272.866H299.005V357.035L208.506 277.525V357.948H190.99V278.836L101.11 358V272.866H64V136.524H101.008V42ZM177.785 153.826H81.5159V255.564H101.088V223.472L177.785 153.826ZM118.625 231.149V319.392L190.99 255.655V165.421L118.625 231.149ZM209.01 254.812V165.336L281.396 231.068V272.866H281.489V318.491L209.01 254.812ZM299.005 255.564H318.484V153.826H222.932L299.005 222.751V255.564ZM281.375 136.524V81.7983L221.977 136.524H281.375ZM177.921 136.524H118.524V81.7983L177.921 136.524Z" fill="black"/>
                    <g>
                      <path d="M768.761 134.448H779.882V157.366H765.486C754.204 157.366 745.79 160.08 740.213 165.524C734.669 170.951 731.881 179.877 731.881 192.284V267.432H709.153V134.971H731.881V156.108C731.881 157.301 732.481 157.89 733.648 157.89C734.313 157.89 734.815 157.726 735.172 157.383C735.528 157.039 735.836 156.369 736.193 155.339C740.57 141.428 751.448 134.464 768.777 134.464H768.761V134.448ZM919.945 162.843C925.911 173.452 928.91 186.236 928.91 201.177C928.91 216.118 925.927 228.902 919.945 239.511C913.963 250.121 906.214 258.065 896.698 263.329C887.183 268.593 876.953 271.225 866.011 271.225C844.45 271.225 829.293 262.561 820.539 245.233C819.874 243.876 819.015 243.189 818.01 243.189C817.005 243.189 816.486 243.696 816.486 244.726V315.804H793.758V134.954H816.486V157.628C816.486 158.641 816.989 159.165 818.01 159.165C819.031 159.165 819.858 158.494 820.539 157.121C829.293 139.793 844.45 131.129 866.011 131.129C876.953 131.129 887.183 133.761 896.698 139.025C906.214 144.289 913.947 152.233 919.945 162.843ZM906.198 201.177C906.198 185.549 902.032 173.37 893.699 164.625C885.367 155.879 874.392 151.514 860.726 151.514C847.06 151.514 836.085 155.895 827.753 164.625C819.404 173.37 816.357 185.565 816.357 201.177C816.357 216.789 819.42 228.984 827.753 237.729C836.085 246.492 847.076 250.84 860.726 250.84C874.376 250.84 885.367 246.459 893.699 237.729C902.032 229 906.198 216.789 906.198 201.177ZM537.17 163.039C543.136 173.648 546.135 186.432 546.135 201.373C546.135 216.315 543.152 229.098 537.17 239.707C531.188 250.317 523.44 258.262 513.924 263.525C504.408 268.789 494.179 271.421 483.236 271.421C461.676 271.421 446.518 262.757 437.764 245.429C437.1 244.072 436.241 243.386 435.235 243.386C434.23 243.386 433.712 243.892 433.712 244.922V316H411V135.151H433.728V157.824C433.728 158.838 434.23 159.361 435.252 159.361C436.273 159.361 437.1 158.691 437.781 157.317C446.535 139.989 461.692 131.325 483.253 131.325C494.195 131.325 504.424 133.957 513.94 139.221C523.456 144.485 531.189 152.43 537.187 163.039H537.17ZM523.407 201.373C523.407 185.745 519.241 173.567 510.909 164.821C502.576 156.091 491.585 151.71 477.935 151.71C464.286 151.71 453.295 156.091 444.962 164.821C436.63 173.583 433.566 185.762 433.566 201.373C433.566 216.985 436.63 229.18 444.962 237.926C453.295 246.688 464.269 251.036 477.935 251.036C491.601 251.036 502.576 246.655 510.909 237.926C519.241 229.196 523.407 216.985 523.407 201.373ZM668.982 225.355H692.975C689.781 237.762 683.248 248.502 673.408 257.575C663.551 266.664 649.448 271.192 631.081 271.192C617.269 271.192 605.111 268.348 594.59 262.659C584.069 256.97 575.947 248.878 570.208 238.334C564.47 227.807 561.617 215.415 561.617 201.144C561.617 186.873 564.405 174.482 569.949 163.954C575.493 153.427 583.291 145.318 593.309 139.63C603.328 133.941 615.064 131.096 628.536 131.096C642.007 131.096 653.176 133.908 662.514 139.499C671.868 145.106 678.838 152.544 683.475 161.78C688.111 171.049 690.413 181.184 690.413 192.219V207.503H585.593C586.419 220.745 590.861 231.289 598.853 239.086C606.845 246.9 617.593 250.807 631.065 250.807C642.007 250.807 650.404 248.568 656.208 244.056C662.011 239.544 666.259 233.316 668.966 225.322L668.982 225.355ZM585.123 188.426H664.443C664.443 176.885 661.493 167.829 655.592 161.29C649.691 154.767 640.435 151.481 627.806 151.481C616.021 151.481 606.375 154.669 598.886 161.045C591.396 167.404 586.809 176.542 585.123 188.426ZM947.244 267.4H969.988V84H947.244V267.416V267.4ZM1266.89 120.487H1293.45V91.814H1266.89V120.487ZM1364.95 247.669C1360.82 248.094 1358.32 248.306 1357.5 248.306C1356.33 248.306 1355.37 247.963 1354.71 247.276C1354.04 246.606 1353.69 245.674 1353.69 244.464C1353.69 243.631 1353.91 241.113 1354.34 236.945C1354.74 232.793 1354.97 226.368 1354.97 217.72V154.342H1387.39L1381 134.938H1354.98V99.2683H1332.26V134.922H1307.53V154.326H1332.26V224.063C1332.26 238.678 1335.81 249.548 1342.87 256.676C1349.94 263.803 1360.72 267.383 1375.22 267.383H1392.9V247.015H1384.05C1375.46 247.015 1369.1 247.227 1364.97 247.652L1364.95 247.669ZM1502.34 134.938L1464.7 246.083C1464.2 247.456 1463.4 249.238 1460.83 249.238C1458.25 249.238 1457.44 247.456 1456.93 246.083L1419.29 134.938H1396.11L1439.7 267.4H1455.12C1456.12 267.4 1456.89 267.498 1457.41 267.661C1457.91 267.825 1458.33 268.25 1458.67 268.936C1459.33 269.95 1459.25 271.486 1458.41 273.514L1451.34 292.869C1450.32 295.419 1448.39 296.694 1445.54 296.694C1444.52 296.694 1442.17 296.481 1438.47 296.056C1434.76 295.631 1429.98 295.419 1424.08 295.419H1405.63V315.787H1429.88C1444.03 315.787 1452.54 313.368 1459.87 308.529C1467.2 303.691 1472.87 295.157 1476.92 282.93L1524 140.022V134.938H1502.37H1502.34ZM1189.96 184.356L1154.34 134.938H1129.33V140.022L1172.01 197.335L1119.97 262.299V267.383H1145.49L1186.92 214.14L1225.57 267.383H1250.08V262.299L1204.85 201.161L1253.88 140.284V134.938H1228.36L1189.97 184.356H1189.96ZM1269.31 267.4H1292.05V134.954H1269.31V267.416V267.4ZM1119.66 225.355C1116.45 237.762 1109.94 248.502 1100.1 257.575C1090.24 266.664 1076.14 271.192 1057.77 271.192C1043.96 271.192 1031.8 268.348 1021.28 262.659C1010.74 256.97 1002.64 248.878 996.899 238.334C991.176 227.807 988.323 215.415 988.323 201.144C988.323 186.873 991.111 174.482 996.656 163.954C1002.22 153.427 1010 145.318 1020.02 139.63C1030.03 133.941 1041.77 131.096 1055.26 131.096C1068.75 131.096 1079.9 133.908 1089.25 139.499C1098.59 145.106 1105.58 152.544 1110.21 161.78C1114.85 171.049 1117.15 181.184 1117.15 192.219V207.503H1012.32C1013.16 220.745 1017.58 231.289 1025.58 239.086C1033.57 246.9 1044.32 250.807 1057.79 250.807C1068.73 250.807 1077.13 248.568 1082.93 244.056C1088.73 239.544 1092.98 233.316 1095.67 225.322H1119.68L1119.66 225.355ZM1012.38 188.426H1091.7C1091.7 176.885 1088.75 167.829 1082.87 161.29C1076.96 154.767 1067.71 151.481 1055.08 151.481C1043.29 151.481 1033.65 154.669 1026.16 161.045C1018.67 167.404 1014.07 176.542 1012.4 188.426H1012.38Z" fill="black"/>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== DASH SECTION ===== */}
      <div className="tw-flex tw-flex-col tw-overflow-y-clip position-relative desktop:tw-grid desktop:tw-grid-cols-12" style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        position: "relative"
      }}>
        <div className="desktop:tw-col-span-6">
          <figure className="mb-0 tw-mb-0 position-relative">
            <picture>
              <source media="(max-width: 375px)" srcSet="https://corp.dd-static.net/img/home/post_dash_module_mobile_image.jpeg?format=jpg&auto=format&fit=max&w=375&h=250&dpr=2&q=90" />
              <source media="(max-width: 767px)" srcSet="https://corp.dd-static.net/img/home/post_dash_module_mobile_image.jpeg?format=jpg&auto=format&fit=max&w=375&h=250&dpr=2&q=90" />
              <source media="(max-width: 1199px)" srcSet="https://corp.dd-static.net/img/home/post_dash_module_desktop_image.jpg?format=jpg&auto=format&fit=max&w=768&dpr=2&q=90" />
              <source media="(min-width: 1200px)" srcSet="https://corp.dd-static.net/img/home/post_dash_module_desktop_image.jpg?format=jpg&auto=format&fit=max&w=756&h=490&dpr=2&q=75 2x" />
              <img className="tw-w-full" loading="lazy" width="756" height="490" alt="DASH 2025" src="https://corp.dd-static.net/img/home/post_dash_module_desktop_image.jpg?format=jpg&auto=format&fit=max&w=756&h=490" />
            </picture>
          </figure>
        </div>
        <div className="tw-relative tw-py-10 tablet:tw-py-15 desktop:tw-py-0 desktop:tw-col-span-6 desktop:tw-grid desktop:tw-grid-cols-6" style={{
          position: "relative",
          padding: "0",
          gridColumn: "span 6"
        }}>
          <div className="tw-absolute tw-w-full tw-h-full tw-top-0" style={{ position: "absolute", width: "100%", height: "100%", top: 0 }}>
            <figure className="mb-0 tw-mb-0 position-relative">
              <picture>
                <source media="(max-width: 375px)" srcSet="https://corp.dd-static.net/img/home/dash-gradient-2.png?format=png&auto=format&fit=max&w=375&h=490&dpr=2&q=80" />
                <source media="(max-width: 767px)" srcSet="https://corp.dd-static.net/img/home/dash-gradient-2.png?format=png&auto=format&fit=max&w=576&h=490&dpr=2&q=80" />
                <source media="(max-width: 1199px)" srcSet="https://corp.dd-static.net/img/home/dash-gradient-2.png?format=png&auto=format&fit=max&w=768&dpr=2&q=90" />
                <source media="(min-width: 1200px)" srcSet="https://corp.dd-static.net/img/home/dash-gradient-2.png?format=png&auto=format&fit=max&w=756&h=490&dpr=2&q=75 2x" />
                <img className="tw-w-full tw-h-screen" loading="lazy" width="756" height="490" alt="DASH Gradient Background" src="https://corp.dd-static.net/img/home/dash-gradient-2.png?format=png&auto=format&fit=max&w=756&h=490" />
              </picture>
            </figure>
          </div>
          <div className="tw-relative tw-z-10 tw-container tw-text-white desktop:tw-col-span-5 desktop:tw-col-start-2 desktop:tw-pl-0.5 desktop:tw-pr-[100px] desktop:tw-my-auto" style={{
            position: "relative",
            zIndex: 10,
            color: "#ffffff",
            padding: "40px 20px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <span className="tw-flex tw-text-eyebrow-2--corp-ui tw-uppercase"></span>
            <span className="tw-flex tw-mt-2 tw-mb-5 desktop:tw-mb-3 tw-font-bold tw-text-28 tw-leading-28 tablet:tw-text-36 tablet:tw-leading-40" style={{
              display: "flex",
              marginTop: "8px",
              marginBottom: "20px",
              fontWeight: "700",
              fontSize: "36px",
              lineHeight: "40px"
            }}>DASH 2026 — That's a wrap!</span>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>Thank you to the thousands of engineers, developers, and security experts who joined us in New York City. Catch the keynote and session recordings on demand — and get the inside scoops on DASH 2027, back in NYC on June 15–17.</p>
            <a href="https://dash.datadoghq.com/?utm_source=hp&utm_medium=internal&utm_campaign=summit-202606dash" target="_blank" className="tw-flex tw-text-eyebrow-2--corp-ui hover:tw-text-grey tw-mt-5 tw-items-center tw-gap-1 tw-uppercase" style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
              gap: "4px",
              textTransform: "uppercase",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1px"
            }}>
              LEARN MORE
              <i className="icon-right-carrot-normal-2 tw-inline-flex tw-mt-0.5 tw-text-12 tw-leading-12">›</i>
            </a>
          </div>
        </div>
      </div>

      {/* ===== ROTATING BANNERS ===== */}
      <div className="homepage-rotating-banner-set" style={{ overflow: "hidden" }}>
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            style={{
              display: activeBanner === index ? 'block' : 'none'
            }}
          >
            <div className="rotating-banner position-relative" style={{
              backgroundImage: `url(${banner.desktopBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "250px",
              position: "relative"
            }}>
              <div className="position-absolute d-block d-lg-none mobile-bg-image w-100 h-100" style={{
                backgroundImage: `url(${banner.mobileBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "none"
              }}></div>
              <div className="container position-relative py-6 py-lg-4" style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "40px 20px",
                position: "relative",
                zIndex: 2
              }}>
                <div className="row d-lg-flex">
                  <div className="text-container text-start text-white col-12 col-md-10 py-xl-2 col-lg-8" style={{
                    color: "#ffffff",
                    textAlign: "left"
                  }}>
                    <h5 style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      marginBottom: "8px"
                    }}>{banner.title}</h5>
                    <h2 style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      lineHeight: "1.2",
                      marginBottom: "16px"
                    }} dangerouslySetInnerHTML={{ __html: banner.subtitle }} />
                    <a href={banner.link} className="rotating-banner-btn btn btn-white btn-outline" aria-label={banner.title} target="" style={{
                      display: "inline-block",
                      padding: "12px 28px",
                      backgroundColor: "#ffffff",
                      color: "#1a1a1a",
                      borderRadius: "4px",
                      fontWeight: "600",
                      textDecoration: "none",
                      border: "2px solid #ffffff",
                      transition: "all 0.3s ease"
                    }}>
                      {banner.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== PRODUCTS ACCORDION SECTION ===== */}
      <section id="home-features-accordion" className="tw-bg-black tw-text-white tw-overflow-x-clip" style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "60px 0",
        overflow: "hidden"
      }}>
        <div className="tw-container" style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px"
        }}>
          <h2 className="tw-font-bold tw-text-38 tw-leading-42 tablet:tw-text-48 tablet:tw-leading-48" style={{
            fontWeight: "700",
            fontSize: "48px",
            lineHeight: "48px",
            marginBottom: "20px"
          }}>Products</h2>
          <span className="tw-block tw-pb-10 tablet:tw-pb-15"></span>
          <div className="desktop:tw-grid desktop:tw-grid-cols-12 desktop:tw-gap-x-8" style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "32px"
          }}>
            <div className="tw-relative desktop:tw-col-span-4" style={{
              position: "relative",
              gridColumn: "span 4"
            }}>
              <div className="desktop:tw-h-[452px] desktop:tw-overflow-y-scroll show-scrollbar desktop:-tw-mr-8 desktop:tw-pr-6 desktop:tw-mb-13 tw-pb-10 desktop:tw-pb-0" style={{
                height: "452px",
                overflowY: "scroll",
                paddingRight: "24px",
                marginBottom: "52px"
              }}>
                {products.map((product) => (
                  <details 
                    key={product.id}
                    name="product-feature" 
                    className="last-of-type:[&_.long-button]:tw-mb-0 tw-overflow-hidden"
                    open={openProduct === product.id}
                    style={{ overflow: "hidden" }}
                  >
                    <summary 
                      onClick={() => setOpenProduct(openProduct === product.id ? -1 : product.id)}
                      className="tw-flex tw-justify-between tw-items-center tw-gap-10 tw-pt-4 tablet:tw-pt-5 tw-pb-5 tw-font-bold tw-text-20 tw-leading-28 tablet:tw-text-22 after:tw-w-3 after:tw-h-3 after:tw-mb-1.5 after:tw-border-white after:tw-border-b-2 after:tw-border-l-2 after:tw-transform after:-tw-rotate-45 after:-tw-translate-x-1.5 after:tw-translate-y-0 after:tw-content-[''] after:tw-shrink-0 after:tw-transition-transform after:tw-duration-500 tw-border-t tw-border-t-white hover:tw-text-purple-80 hover:tw-border-purple-80 hover:after:tw-border-purple-80"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                        paddingTop: "16px",
                        paddingBottom: "20px",
                        fontWeight: "700",
                        fontSize: "22px",
                        lineHeight: "28px",
                        borderTop: "1px solid #ffffff",
                        cursor: "pointer",
                        listStyle: "none"
                      }}
                    >
                      {product.name}
                      <span style={{
                        display: "inline-block",
                        width: "12px",
                        height: "12px",
                        borderBottom: "2px solid #ffffff",
                        borderLeft: "2px solid #ffffff",
                        transform: openProduct === product.id ? "rotate(135deg)" : "rotate(-45deg)",
                        transition: "transform 0.3s ease",
                        marginBottom: openProduct === product.id ? "-6px" : "6px"
                      }}></span>
                    </summary>
                    <div className="tw-text-20 tw-leading-28 tablet:tw-text-18 tablet:tw-leading-22" style={{
                      fontSize: "18px",
                      lineHeight: "22px"
                    }}>
                      {product.description}
                    </div>
                    <span className="tw-block tw-pb-5"></span>
                    <a href={product.link} aria-label={`Learn more about Datadog ${product.name}`} className="tw-group tw-flex tw-items-center tw-gap-1 tw-w-max tw-font-bold tw-tracking-[0.09px] tw-text-white hover:tw-text-grey tw-text-16 tw-leading-16 tablet:tw-text-18 tablet:tw-leading-18" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontWeight: "700",
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: "18px",
                      lineHeight: "18px"
                    }}>
                      <span>Learn more</span>
                      <i className="icon-right-carrot-normal-2 tw-inline-flex tw-mt-0.5 tw-text-12 tw-leading-12">›</i>
                    </a>
                    <span className="tw-block tw-pb-10 desktop:tw-hidden"></span>

                    {/* Product Image/Video */}
                    <div className="desktop:tw-absolute desktop:tw-inset-[0%_auto_0%_calc(100%_+_92px)]" style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: "calc(100% + 92px)",
                      right: "auto"
                    }}>
                      <a href={product.link} aria-label={`Link to ${product.name}`} className="tw-hidden desktop:tw-flex">
                        <video 
                          preload="none" 
                          loop 
                          playsInline 
                          muted 
                          title={product.name}
                          poster={product.poster}
                          src={product.video}
                          className="home-product-video tw-w-full desktop:tw-w-[694px] desktop-lg:tw-w-[804px] desktop:tw-max-w-[694px] desktop-lg:tw-max-w-[804px]"
                          style={{
                            width: "100%",
                            maxWidth: "694px"
                          }}
                        >
                          <source src={product.video} type="video/mp4" />
                          <img src={product.poster} alt={product.name} loading="lazy" />
                        </video>
                      </a>
                      <figure className="mb-0 tw-mb-0 tw-static">
                        <a href={product.link}>
                          <picture>
                            <source media="(max-width: 375px)" srcSet={product.image + "?format=png&auto=format&fit=max&w=347&dpr=2&q=90"} />
                            <source media="(max-width: 767px)" srcSet={product.image + "?format=png&auto=format&fit=max&w=347&dpr=2&q=90"} />
                            <source media="(max-width: 1199px)" srcSet={product.image + "?format=png&auto=format&fit=max&w=712&dpr=2&q=90"} />
                            <source media="(min-width: 1200px)" srcSet={product.image + "?format=png&auto=format&fit=max&w=804&dpr=2&q=75 2x"} />
                            <img className="tw-w-full desktop:tw-hidden" loading="lazy" width="804" height="" alt={product.name} src={product.image} />
                          </picture>
                        </a>
                      </figure>
                    </div>
                    <span className="tw-block tw-pb-15 desktop:tw-pb-12"></span>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATE OF POSTGRES SECTION ===== */}
      <div className="tw-flex tw-flex-col position-relative desktop:tw-grid desktop:tw-grid-cols-12" style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        position: "relative"
      }}>
        <div className="desktop:tw-col-span-6 desktop:tw-col-start-7 desktop:tw-order-1">
          <picture className="bg">
            <source srcSet="https://corp.dd-static.net/img/blog/state-of-postgres/state-of-postgres-2026/state-of-postgres-2026-hero-no-type.png?auto=format&fit=crop&w=400" media="(max-width: 400px)" />
            <source srcSet="https://corp.dd-static.net/img/blog/state-of-postgres/state-of-postgres-2026/state-of-postgres-2026-hero-no-type.png?auto=format&fit=crop&w=600" media="(min-width: 401px) and (max-width: 768px)" />
            <source srcSet="https://corp.dd-static.net/img/blog/state-of-postgres/state-of-postgres-2026/state-of-postgres-2026-hero-no-type.png?auto=format&fit=crop&w=800" media="(min-width: 769px) and (max-width: 991px)" />
            <source srcSet="https://corp.dd-static.net/img/blog/state-of-postgres/state-of-postgres-2026/state-of-postgres-2026-hero-no-type.png?auto=format&ar=1.5:1&fit=crop&w=1200" media="(min-width: 992px)" />
            <img loading="lazy" className="w-100" alt="" src="https://corp.dd-static.net/img/blog/state-of-postgres/state-of-postgres-2026/state-of-postgres-2026-hero-no-type.png?auto=format&ar=1.5:1&fit=crop" />
          </picture>
        </div>
        <div className="home-blog-bg tw-py-10 tablet:tw-py-15 desktop:tw-py-0 desktop:tw-col-span-6 desktop:tw-grid desktop:tw-grid-cols-6" style={{
          background: "linear-gradient(90deg, #00d1fa 0%, #46a537 100%)",
          padding: "0",
          gridColumn: "span 6"
        }}>
          <div className="tw-container desktop:tw-col-span-4 desktop:tw-col-start-2 desktop:tw-px-0 desktop:tw-my-auto desktop:-tw-ml-[26px]" style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "40px 20px",
            color: "#ffffff"
          }}>
            <span className="tw-flex tw-text-eyebrow-2--corp-ui tw-uppercase" style={{
              display: "flex",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}>read the report</span>
            <span className="tw-flex tw-mt-2 tw-mb-5 desktop:tw-mb-3 tw-font-bold tw-text-28 tw-leading-28 tablet:tw-text-36 tablet:tw-leading-40" style={{
              display: "flex",
              marginTop: "8px",
              marginBottom: "20px",
              fontWeight: "700",
              fontSize: "36px",
              lineHeight: "40px"
            }}>State of Postgres</span>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>We analyzed telemetry from tens of thousands of production Postgres databases to understand how organizations are using Postgres today and where it's heading.</p>
            <a href="https://www.datadoghq.com/state-of-postgres/" className="tw-flex tw-text-eyebrow-2--corp-ui tw-text-primary hover:tw-text-neue tw-mt-5 tw-items-center tw-gap-1" aria-label="Link to post" style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
              gap: "4px",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}>
              LEARN MORE
              <i className="icon-right-carrot-normal-2 tw-inline-flex tw-mt-0.5 tw-text-12 tw-leading-12">›</i>
            </a>
          </div>
        </div>
      </div>

      {/* ===== SECURITY SECTION ===== */}
      <div className="tw-flex tw-flex-col tw-overflow-y-clip position-relative desktop:tw-grid desktop:tw-grid-cols-12" style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        position: "relative"
      }}>
        <div className="desktop:tw-col-span-6">
          <figure className="mb-0 tw-mb-0 position-relative">
            <picture>
              <source media="(max-width: 375px)" srcSet="https://corp.dd-static.net/img/homepage/banner/dashboard_security_3_desktop.png?format=png&auto=format&fit=max&w=375&h=200&dpr=2&q=90" />
              <source media="(max-width: 767px)" srcSet="https://corp.dd-static.net/img/homepage/banner/dashboard_security_3_desktop.png?format=png&auto=format&fit=max&w=375&h=200&dpr=2&q=90" />
              <source media="(max-width: 1199px)" srcSet="https://corp.dd-static.net/img/homepage/banner/dashboard_security_3_desktop.png?format=png&auto=format&fit=max&w=768&h=386&dpr=2&q=90" />
              <source media="(min-width: 1200px)" srcSet="https://corp.dd-static.net/img/homepage/banner/dashboard_security_3_desktop.png?format=png&auto=format&fit=max&w=756&h=490&dpr=2&q=75 2x" />
              <img className="tw-w-full" loading="lazy" width="756" height="490" alt="Datadog Security dashboard" src="https://corp.dd-static.net/img/homepage/banner/dashboard_security_3_desktop.png?format=png&auto=format&fit=max&w=756&h=490" />
            </picture>
          </figure>
        </div>
        <div className="tw-relative tw-py-10 tablet:tw-py-15 desktop:tw-py-0 desktop:tw-col-span-6 desktop:tw-grid desktop:tw-grid-cols-6" style={{
          position: "relative",
          padding: "0",
          gridColumn: "span 6"
        }}>
          <div className="tw-relative tw-z-10 tw-container desktop:tw-col-span-5 desktop:tw-col-start-2 desktop:tw-pl-0.5 desktop:tw-pr-[100px] desktop:tw-my-auto" style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "40px 20px"
          }}>
            <span className="tw-flex tw-mt-2 tw-mb-5 desktop:tw-mb-3 tw-font-bold tw-text-28 tw-leading-28 tablet:tw-text-36 tablet:tw-leading-40" style={{
              display: "flex",
              marginTop: "8px",
              marginBottom: "20px",
              fontWeight: "700",
              fontSize: "36px",
              lineHeight: "40px"
            }}>Defend against AI-powered attacks</span>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>Discover how integrating Security and Observability empowers organizations to decode runtime execution, eliminate exposure in dynamic AI environments, and execute Detection and Response with agentic speed to stay ahead of sophisticated threats in the modern era.</p>
            <a href="https://www.datadoghq.com/products/security/" className="tw-flex tw-text-eyebrow-2--corp-ui tw-text-primary hover:tw-text-neue tw-mt-5 tw-items-center tw-gap-1 tw-uppercase" style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
              gap: "4px",
              color: "#632ca6",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}>
              Explore Datadog Security
              <i className="icon-right-carrot-normal-2 tw-inline-flex tw-mt-0.5 tw-text-12 tw-leading-12">›</i>
            </a>
          </div>
        </div>
      </div>

      {/* ===== CAREERS SECTION ===== */}
      <div className="bg-gray-lightest tw-flex tw-flex-col position-relative desktop:tw-grid desktop:tw-grid-cols-12" style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        position: "relative",
        backgroundColor: "#f5f5f5"
      }}>
        <div className="desktop:tw-col-span-6 desktop:tw-col-start-7 desktop:tw-order-1">
          <figure className="mb-0 tw-mb-0 position-relative">
            <picture>
              <source media="(max-width: 375px)" srcSet="https://corp.dd-static.net/img/home/careers_desktop.png?format=auto&auto=format&fit=max&w=375&dpr=2&q=80" />
              <source media="(max-width: 767px)" srcSet="https://corp.dd-static.net/img/home/careers_desktop.png?format=auto&auto=format&fit=max&w=576&dpr=2&q=80" />
              <source media="(max-width: 1199px)" srcSet="https://corp.dd-static.net/img/home/careers_desktop.png?format=auto&auto=format&fit=max&w=768&dpr=2&q=90" />
              <source media="(min-width: 1200px)" srcSet="https://corp.dd-static.net/img/home/careers_desktop.png?format=auto&auto=format&fit=max&w=768&dpr=2&q=75 2x" />
              <img className="tw-w-full" loading="lazy" width="768" height="" alt="join our team" src="https://corp.dd-static.net/img/home/careers_desktop.png?format=auto&auto=format&fit=max&w=768" />
            </picture>
          </figure>
        </div>
        <div className="tw-container tw-py-10 tablet:tw-py-15 desktop:tw-col-span-5 desktop:tw-col-start-2 desktop:tw-col-end-6 desktop:tw-px-0 desktop:tw-py-0 desktop:tw-my-auto desktop:-tw-ml-[26px]" style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px"
        }}>
          <span className="tw-flex tw-text-eyebrow-2--corp-ui tw-uppercase" style={{
            display: "flex",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#888"
          }}>Careers</span>
          <span className="tw-flex tw-mt-2 tw-mb-5 desktop:tw-mb-3 tw-font-bold tw-text-28 tw-leading-28 tablet:tw-text-36 tablet:tw-leading-40" style={{
            display: "flex",
            marginTop: "8px",
            marginBottom: "20px",
            fontWeight: "700",
            fontSize: "36px",
            lineHeight: "40px",
            color: "#1a1a1a"
          }}>Join Our Pack</span>
          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#555" }}>We are building the monitoring and security platform for developers, IT operations teams and business users in the cloud age. And we need talented people like you to join our team.</p>
          <a href="https://careers.datadoghq.com/" target="_blank" className="tw-flex tw-text-eyebrow-2--corp-ui tw-text-primary hover:tw-text-neue tw-mt-5 tw-items-center tw-gap-1" style={{
            display: "flex",
            marginTop: "20px",
            alignItems: "center",
            gap: "4px",
            color: "#632ca6",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "1px",
            textTransform: "uppercase"
          }}>
            LEARN MORE
            <i className="icon-right-carrot-normal-2 tw-inline-flex tw-mt-0.5 tw-text-12 tw-leading-12">›</i>
          </a>
        </div>
      </div>

      {/* ===== CALLOUT SECTION ===== */}
      <div className="tw-flex" style={{
        backgroundImage: "url('https://corp.dd-static.net/img/homepage/reinvent_high_res_banner_desktop.png'), linear-gradient(360deg, #8904FF, #110617)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "64px 0",
        width: "100%"
      }}>
        <div className="tw-container tw-flex tw-callout-flexbox tw-w-11/12 desktop:tw-w-3/5" style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          color: "#ffffff"
        }}>
          <span className="tw-text-white tw-font-bold tw-text-center tw-text-28 tw-leading-28 tablet:tw-text-36 tablet:tw-leading-40" style={{
            fontWeight: "700",
            fontSize: "36px",
            lineHeight: "40px",
            textAlign: "center"
          }}>Want to learn more about Datadog?</span>
          <span className="subheader" style={{
            fontSize: "18px",
            lineHeight: "1.6",
            marginTop: "12px"
          }}>Datadog hosts events both online and in-person. See all that Datadog has to offer by visiting our Events &amp; Webinars hub.</span>
          <div className="callout-btns tw-mt-5 tablet:tw-flex tablet:tw-justify-center" style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center"
          }}>
            <div className="tw-flex">
              <a href="https://www.datadoghq.com/events-webinars/" className="corp-ui-button-cta-large corp-ui-button-cta-solid-white icon-start" aria-label="learn more" style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 32px",
                backgroundColor: "#ffffff",
                color: "#1a1a1a",
                borderRadius: "4px",
                fontWeight: "600",
                textDecoration: "none",
                gap: "8px"
              }}>
                <span className="corp-ui-button-cta-text">learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .desktop\\:tw-grid-cols-12 {
            grid-template-columns: 1fr !important;
          }
          .desktop\\:tw-col-span-6 {
            grid-column: 1 !important;
          }
          .desktop\\:tw-col-span-4 {
            grid-column: 1 !important;
          }
          .desktop\\:tw-absolute {
            position: relative !important;
          }
          .desktop\\:tw-hidden {
            display: none !important;
          }
          .desktop\\:tw-w-\\[694px\\] {
            width: 100% !important;
          }
          .desktop\\:tw-pr-\\[100px\\] {
            padding-right: 20px !important;
          }
          .desktop\\:tw-pl-0\\.5 {
            padding-left: 20px !important;
          }
          .desktop\\:-tw-ml-\\[26px\\] {
            margin-left: 0 !important;
          }
          .desktop\\:tw-my-auto {
            margin: 0 !important;
          }
        }

        @media (max-width: 767px) {
          .tw-text-36 {
            font-size: 28px !important;
            line-height: 32px !important;
          }
          .tw-text-48 {
            font-size: 36px !important;
            line-height: 40px !important;
          }
          .tw-py-15 {
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }
          .rotating-banner {
            min-height: 200px !important;
          }
          .mobile-bg-image {
            display: block !important;
          }
          .text-container {
            padding: 20px !important;
          }
          .text-container h2 {
            font-size: 20px !important;
          }
          .desktop\\:tw-col-span-5 {
            grid-column: 1 !important;
          }
          .desktop\\:tw-col-start-2 {
            grid-column-start: 1 !important;
          }
        }

        @media (max-width: 576px) {
          .tw-callout-flexbox {
            width: 100% !important;
          }
          .corp-ui-button-cta-large {
            padding: 12px 24px !important;
            font-size: 14px !important;
            width: 100% !important;
          }
          .tw-w-11\\/12 {
            width: 100% !important;
          }
          .desktop\\:tw-col-span-3 {
            grid-column: 1 !important;
          }
        }

        @media (max-width: 767px) {
          .d-none {
            display: none !important;
          }
          .d-block {
            display: block !important;
          }
        }

        @media (min-width: 768px) {
          .d-md-block {
            display: block !important;
          }
          .d-md-none {
            display: none !important;
          }
        }

        .icon-play-2 {
          font-size: 20px;
        }
        .icon-right-carrot-normal-2 {
          font-size: 12px;
        }

        .show-scrollbar::-webkit-scrollbar {
          -webkit-appearance: none;
          width: 8px;
        }
        .show-scrollbar::-webkit-scrollbar-thumb {
          border-radius: 20px;
          background-color: #c7c7c7;
          box-shadow: 0 0 1px rgba(255,255,255,.5);
        }

        summary::-webkit-details-marker {
          display: none;
        }

        details::details-content {
          opacity: 0;
          block-size: 0;
          transition: block-size 1s ease, content-visibility 1s ease, opacity 1s ease;
          transition-behavior: allow-discrete;
        }

        details[open]::details-content {
          block-size: auto;
          opacity: 1;
        }

        @media (prefers-reduced-motion) {
          details::details-content {
            block-size: auto;
            opacity: 1;
            transition: none;
          }
        }

        @media (max-width: 1199px) {
          details::details-content {
            opacity: 1;
            transition: block-size 1s ease, content-visibility 1s ease;
            transition-behavior: allow-discrete;
          }
        }
      `}</style>
    </div>
  );
}