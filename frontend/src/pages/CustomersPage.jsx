// src/pages/CustomersPage.jsx
import React, { useState, useEffect, useRef } from "react";

export default function CustomersPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [filterType, setFilterType] = useState([]);
  const [filterIndustry, setFilterIndustry] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [filterRegion, setFilterRegion] = useState([]);
  const [filterUseCase, setFilterUseCase] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Customer carousel data
  const carouselItems = [
    {
      id: "porsche_informatik",
      bgColor: "#036",
      logo: "https://corp.dd-static.net/img/customers/logos/porsche_informatik_white.svg",
      logoWidth: "140px",
      title: "Porsche Informatik accelerates Volkswagen Group's digital transformation with help from Datadog",
      speakerName: "Manfred Immitzer",
      speakerTitle: "CEO/CDO<br>Porsche Informatik",
      videoSrc: "1100115295",
      videoEmbed: "https://player.vimeo.com/progressive_redirect/playback/1100115295/rendition/1080p/file.mp4?loc=external&signature=f811719b1dfec64c13f7d7ac9626a04d31729ac679623880ce2a57adebd8d964",
      poster: "https://corp.dd-static.net/img/case-studies/porsche-informatik/porsche-informatik-video-poster.png",
      image: "https://corp.dd-static.net/img/customers/carousel-featured-image/porsche-informatik.png?ch=Width,DPR&losless=true&auto=compress,format",
      link: "https://www.datadoghq.com/case-studies/porsche-informatik"
    },
    {
      id: "auth0",
      bgColor: "#000",
      logo: "https://corp.dd-static.net/img/customers/logos/auth0.svg",
      logoWidth: "140px",
      title: "Auth0 strengthens resiliency and service reliability with Datadog",
      speakerName: "Andrew Yu",
      speakerTitle: "VP Engineering<br>Auth0",
      videoSrc: "1155134001",
      videoEmbed: "https://player.vimeo.com/progressive_redirect/playback/1155134001/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=82ac61e91fce2955af9414af556acd2278b833a56772a96edbb536325ba2cf5b",
      poster: "https://corp.dd-static.net/img/case-studies/auth0/auth0-video-poster.png",
      image: "https://corp.dd-static.net/img/customers/carousel-featured-image/auth0.jpg?ch=Width,DPR&losless=true&auto=compress,format",
      link: "https://www.datadoghq.com/case-studies/auth0"
    },
    {
      id: "forbes",
      bgColor: "#000",
      logo: "https://corp.dd-static.net/img/customers/logos/forbes-logo-white.svg",
      logoWidth: "140px",
      title: "How Forbes delivers a premium digital experience with Datadog",
      speakerName: "Sameer Patwardhan",
      speakerTitle: "SVP of Technology<br>Forbes",
      videoSrc: "1059088968",
      videoEmbed: "https://player.vimeo.com/progressive_redirect/playback/1059088968/rendition/1080p/file.mp4?loc=external&signature=e1ec30111dcae7d891a23f3bc02bf8dade5d87165e8a90c59bff5b23f3f23b07",
      poster: "",
      image: "https://corp.dd-static.net/img/customers/carousel-featured-image/forbes-carousel.png?ch=Width,DPR&losless=true&auto=compress,format",
      link: "https://www.datadoghq.com/customer-testimonial/forbes"
    },
    {
      id: "itau-unibanco",
      bgColor: "#ff6200",
      logo: "https://corp.dd-static.net/img/customers/logos/itau-unibanco.svg",
      logoWidth: "36px",
      title: "Itaú Unibanco modernizes its observability platform with Datadog",
      speakerName: "Thiago Morais",
      speakerTitle: "Associate Director<br>Itaú Unibanco",
      videoSrc: "1201842973",
      videoEmbed: "https://player.vimeo.com/progressive_redirect/playback/1201842973/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&oauth2_token_id=1796735760&signature=fdcd861539757dfa6d07551bba5aa0b0d4e2923b9c2cbc7d2fa891b2c28506a2",
      poster: "https://corp.dd-static.net/img/case-studies/itau-unibanco/itau_video_thumbnail.png",
      image: "https://corp.dd-static.net/img/customers/carousel-featured-image/itau-unibanco-carousel-thumbnail.jpg?ch=Width,DPR&losless=true&auto=compress,format",
      link: "https://www.datadoghq.com/case-studies/itau-unibanco"
    },
    {
      id: "sas",
      bgColor: "#0766d1",
      logo: "https://corp.dd-static.net/img/customers/logos/sas.svg",
      logoWidth: "140px",
      title: "SAS powers trusted, AI-driven analytics at scale with Datadog unified observability",
      speakerName: "Dharmita Lutz",
      speakerTitle: "Principal Software Performance Engineer<br>SAS",
      videoSrc: "1156599692",
      videoEmbed: "https://player.vimeo.com/progressive_redirect/playback/1156599692/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=302df7dd0c81376d17b5dbc621eb868e1d1e830cb4f1533c0b8348ce2eb96a04",
      poster: "https://corp.dd-static.net/img/case-studies/sas/sas-video-poster.png",
      image: "https://corp.dd-static.net/img/customers/carousel-featured-image/sas.jpg?ch=Width,DPR&losless=true&auto=compress,format",
      link: "https://www.datadoghq.com/case-studies/sas"
    },
    {
      id: "toyota_motor_north_america",
      bgColor: "#eb0a1e",
      logo: null,
      logoText: "Toyota Motor North America",
      title: "How Toyota is using Datadog and AI/ML to invent new ways for humans to be more mobile",
      speakerName: "Zakir Mohammed",
      speakerTitle: "Lead of Digital Automation Engineering<br>Toyota Motor North America",
      videoSrc: "884458114",
      videoEmbed: "https://player.vimeo.com/progressive_redirect/playback/884458114/rendition/1080p/file.mp4?loc=external&signature=7fcbb3a942a4e9ae250147eb038578d9bc491bf92509d330b68938302fcae84d",
      poster: "",
      image: "https://corp.dd-static.net/img/customers/carousel-featured-image/toyota_north_america_right_light.png?ch=Width,DPR&losless=true&auto=compress,format",
      link: "https://www.datadoghq.com/customer-testimonial/toyota"
    },
    {
      id: "trizetto",
      bgColor: "#000048",
      logo: "https://corp.dd-static.net/img/customers/logos/cognizant-white.png",
      logoWidth: "140px",
      title: "How TriZetto's CIO Consolidates Tools to Reduce IT Costs with Datadog",
      speakerName: "Robert Wise",
      speakerTitle: "CIO<br>Cognizant TriZetto",
      videoSrc: "884557515",
      videoEmbed: "https://player.vimeo.com/progressive_redirect/playback/884557515/rendition/1080p/file.mp4?loc=external&signature=6d5e640ae5749654de33586edd530972a78909dbf7df236a413f805ace329287",
      poster: "",
      image: "https://corp.dd-static.net/img/customers/carousel-featured-image/trizetto_light-right.png?ch=Width,DPR&losless=true&auto=compress,format",
      link: "https://www.datadoghq.com/customer-testimonial/cognizant"
    },
    {
      id: "autodesk",
      bgColor: "#000",
      logo: "https://corp.dd-static.net/img/customers/logos/autodesk-logo.svg",
      logoWidth: "170px",
      title: "How Autodesk uses Datadog to help its users design and make anything",
      speakerName: "Morgan Goose",
      speakerTitle: "Infrastructure Group Lead<br>Autodesk",
      videoSrc: "884458114",
      videoEmbed: "https://player.vimeo.com/progressive_redirect/playback/907510875/rendition/1080p/file.mp4?loc=external&signature=3e8fc542e0748f308ab1278ed055fc1301dea2d6acfebec904f22d72769ecf90",
      poster: "",
      image: "https://corp.dd-static.net/img/customers/carousel-featured-image/autodesk-carousel.png?ch=Width,DPR&losless=true&auto=compress,format",
      link: "https://www.datadoghq.com/customer-testimonial/autodesk"
    }
  ];

  // Customer logos data
  const customerLogos = [
    { name: "LG Electronics", img: "https://corp.dd-static.net/img/customers/logos/lg-electronics-2026-v2.svg" },
    { name: "21st Century Fox Home Entertainment", img: "https://corp.dd-static.net/img/customers/logos/21stc-fox.png" },
    { name: "Itaú", img: "https://corp.dd-static.net/img/customers/logos/itau-2026-v2.svg" },
    { name: "OpenAI", img: "https://corp.dd-static.net/img/customers/logos/open-ai.svg" },
    { name: "Lufthansasystems", img: "https://corp.dd-static.net/img/customers/logos/lufthansasystems.png" },
    { name: "Whole Foods Market", img: "https://corp.dd-static.net/img/customers/logos/wholefoods.png" },
    { name: "Maersk", img: "https://corp.dd-static.net/img/customers/logos/logo2_maersk.png" },
    { name: "HashiCorp", img: "https://corp.dd-static.net/img/customers/logos/hashicorp.png" },
    { name: "Deloitte Cloud", img: "https://corp.dd-static.net/img/customers/logos/deloitte.png" },
    { name: "Legosystemas", img: "https://corp.dd-static.net/img/customers/logos/legosystemas.png" },
    { name: "Washington Post", img: "https://corp.dd-static.net/img/customers/logos/thewashingtonpost.png" },
    { name: "Sainsburys", img: "https://corp.dd-static.net/img/customers/logos/sainsburys.png" },
    { name: "PayPal", img: "https://corp.dd-static.net/img/customers/logos/paypal.png" },
    { name: "Comcast", img: "https://corp.dd-static.net/img/customers/logos/comcast.png" },
    { name: "Plaid", img: "https://corp.dd-static.net/img/customers/logos/plaid.png" },
    { name: "DreamWorks Animation", img: "https://corp.dd-static.net/img/customers/logos/dreamworks_logo_v2.png" },
    { name: "Alamo", img: "https://corp.dd-static.net/img/customers/logos/alamo.png" },
    { name: "Mercado Libre", img: "https://corp.dd-static.net/img/customers/logos/mercadolibre.png" },
    { name: "Best Western", img: "https://corp.dd-static.net/img/customers/logos/bestwestern.png" },
    { name: "Nasdaq", img: "https://corp.dd-static.net/img/customers/logos/nasdaq.png" },
    { name: "Nikon", img: "https://corp.dd-static.net/img/customers/logos/nikon.png" },
    { name: "Sotheby's", img: "https://corp.dd-static.net/img/customers/logos/sothebys.png" },
    { name: "Twilio", img: "https://corp.dd-static.net/img/customers/logos/twilio.png" },
    { name: "FICO - Cloud Services", img: "https://corp.dd-static.net/img/customers/logos/fico.png" },
    { name: "Eurostar International Limited", img: "https://corp.dd-static.net/img/customers/logos/eurostar.png" },
    { name: "Condé Nast", img: "https://corp.dd-static.net/img/customers/logos/condenast.png" },
    { name: "Zendesk", img: "https://corp.dd-static.net/img/customers/logos/zendesk.png" },
    { name: "Pbs", img: "https://corp.dd-static.net/img/customers/logos/pbs.png" },
    { name: "Sonos", img: "https://corp.dd-static.net/img/customers/logos/sonos.png" },
    { name: "Harvard Medical School", img: "https://corp.dd-static.net/img/customers/logos/harvardmedicalschool.png" },
    { name: "Lenovo", img: "https://corp.dd-static.net/img/customers/logos/lenovo.png" },
    { name: "Zillow Group", img: "https://corp.dd-static.net/img/customers/logos/zillowgroup.png" },
    { name: "Asana", img: "https://corp.dd-static.net/img/customers/logos/asana.png" },
    { name: "Capgemini", img: "https://corp.dd-static.net/img/customers/logos/capgemini.png" },
    { name: "Chef", img: "https://corp.dd-static.net/img/customers/logos/chef.png" },
    { name: "Evernote", img: "https://corp.dd-static.net/img/customers/logos/evernote-2.png" },
    { name: "EventBrite", img: "https://corp.dd-static.net/img/customers/logos/eventbrite.png" },
    { name: "Hearst", img: "https://corp.dd-static.net/img/customers/logos/logo2_hearst.png" },
    { name: "Porsche Informatik", img: "https://corp.dd-static.net/img/customers/logos/porsche_informatik_v2.svg" },
    { name: "Siemensnederland", img: "https://corp.dd-static.net/img/customers/logos/siemensnederland.png" },
    { name: "Uber Freight", img: "https://corp.dd-static.net/img/customers/logos/uber_freight.svg" },
    { name: "Cognizant TriZetto", img: "https://corp.dd-static.net/img/customers/logos/cognizant.png" }
  ];

  // Spotlight data
  const spotlights = [
    {
      id: 0,
      title: "PayPal",
      quote: "Datadog's support for interoperability with OpenTelemetry proved to be the best solution for the level of scale, observability, and support we need.",
      speaker: "Tapan Sanghvi",
      role: "Director of Software Development<br>PayPal",
      image: "https://corp.dd-static.net/img/customers/carousel-featured-image/paypal_spotlight_thumbnail_overlay_desktop.png",
      link: "https://www.datadoghq.com/case-studies/paypal"
    },
    {
      id: 1,
      title: "Posten Bring",
      quote: "With Datadog, we don't just see problems, we prevent them. And that means we can deliver faster, smarter, and with more confidence, for every customer, every day.",
      speaker: "Arne Erik Berntzen",
      role: "CIO<br>Posten Bring",
      image: "https://corp.dd-static.net/img/customers/carousel-featured-image/posten-bring_desktop_thumbnail.png",
      link: "https://www.datadoghq.com/case-studies/posten-bring"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselItems.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  // Handle carousel navigation
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  // Handle video play
  const playVideo = (videoEmbed, poster) => {
    // In a real implementation, this would open a video modal
    console.log("Playing video:", videoEmbed);
  };

  return (
    <div className="customers-page" style={{ fontFamily: "Lato, sans-serif", backgroundColor: "#ffffff" }}>
      
      {/* ===== CAROUSEL HEADER ===== */}
      <div id="carousel-header-customers" className="carousel slide p-relative" style={{
        position: "relative",
        overflow: "hidden"
      }}>
        <div className="carousel-inner p-absolute" style={{
          position: "relative"
        }}>
          {carouselItems.map((item, index) => (
            <div 
              key={item.id}
              className={`carousel-item item h-100 ${index === activeSlide ? 'active' : ''}`}
              style={{
                backgroundColor: item.bgColor,
                display: index === activeSlide ? 'block' : 'none',
                minHeight: "500px",
                padding: "40px 0"
              }}
            >
              <div className="container carousel-item-inner overflow-x-visible" style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 20px"
              }}>
                <div className="row flex-md-row-reverse" style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  flexWrap: "wrap",
                  alignItems: "center"
                }}>
                  {/* Video/Image Column */}
                  <div className="col-12 col-md-5 col-lg-6 p-0 overflow-x-visible" style={{
                    flex: "0 0 50%",
                    maxWidth: "50%",
                    padding: "0",
                    position: "relative"
                  }}>
                    <div className="testimonial-video" style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight: "300px",
                      borderRadius: "8px",
                      position: "relative",
                      overflow: "hidden"
                    }}>
                      <div className="overlay lighter-bg position-absolute w-100 h-100" style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: "0",
                        left: "0",
                        background: "rgba(0,0,0,0.2)"
                      }}></div>
                      <button 
                        className="cp-ui-play-btn position-absolute w-100 h-100 border-0 d-flex justify-content-center align-items-center js-video-modal-header-testimonial"
                        aria-label="play button"
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          border: "none",
                          background: "transparent",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                          zIndex: "2"
                        }}
                        onClick={() => playVideo(item.videoEmbed, item.poster)}
                      >
                        <i className="icon-play-circle" style={{
                          fontSize: "80px",
                          color: "rgba(255,255,255,0.8)",
                          transition: "all 0.3s ease"
                        }}>▶</i>
                      </button>
                      <div className="testimonial-video-legend p-absolute d-flex flex-column text-white" style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "20px",
                        zIndex: "3",
                        color: "#ffffff"
                      }}>
                        <h6 className="speaker-name" style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          margin: "0"
                        }}>{item.speakerName}</h6>
                        <span className="speaker-title" style={{
                          fontSize: "14px",
                          opacity: "0.9"
                        }} dangerouslySetInnerHTML={{ __html: item.speakerTitle }} />
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className="testimonial-details col-12 col-md-7 col-lg-6 d-flex flex-column align-items-center justify-content-md-start align-items-md-start" style={{
                    flex: "0 0 50%",
                    maxWidth: "50%",
                    padding: "20px 30px"
                  }}>
                    <div className="logo-container d-none d-md-flex align-items-start" style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "16px"
                    }}>
                      {item.logo ? (
                        <img 
                          className="logo" 
                          src={item.logo} 
                          alt={item.id} 
                          style={{
                            width: item.logoWidth || "140px",
                            maxWidth: item.logoWidth || "140px",
                            height: "auto"
                          }}
                        />
                      ) : (
                        <span className="customer-name text-white text-uppercase fw-semibold" style={{
                          color: "#ffffff",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          fontSize: "18px"
                        }}>{item.logoText}</span>
                      )}
                    </div>
                    <h2 className="text-center text-md-start text-white fw-bold" style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#ffffff",
                      textAlign: "left",
                      marginBottom: "16px",
                      lineHeight: "1.3"
                    }}>{item.title}</h2>
                    
                    {/* Desktop Buttons */}
                    <div className="d-flex d-md-none d-lg-flex flex-column flex-lg-row w-100 mt-lg-2 btns-container" style={{
                      display: "flex",
                      gap: "12px",
                      flexWrap: "wrap"
                    }}>
                      <a href={item.link} className="cp-ui-btn-cta cp-ui-btn-cta--large cp-ui-btn-cta--solid-white width-full d-flex justify-content-center align-items-center text-center" aria-label="Read the story" style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "12px 28px",
                        backgroundColor: "#ffffff",
                        color: "#1a1a1a",
                        borderRadius: "4px",
                        fontWeight: "600",
                        textDecoration: "none",
                        fontSize: "14px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        minWidth: "160px"
                      }}>
                        <span className="cp-ui-btn-cta--text fw-semibold text-uppercase">Read the story</span>
                      </a>
                      <button 
                        className="cp-ui-btn-cta js-video-modal-header-testimonial cp-ui-btn-cta--large cp-ui-btn-cta--outline-white icon-start width-full d-flex justify-content-center align-items-center text-center"
                        aria-label="Watch Video"
                        style={{
                          display: "inline-flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "12px 28px",
                          backgroundColor: "transparent",
                          color: "#ffffff",
                          borderRadius: "4px",
                          fontWeight: "600",
                          textDecoration: "none",
                          fontSize: "14px",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          border: "2px solid #ffffff",
                          minWidth: "160px",
                          cursor: "pointer"
                        }}
                        onClick={() => playVideo(item.videoEmbed, item.poster)}
                      >
                        <i className="icon-play-2 cp-ui-btn-cta--icon" style={{ marginRight: "8px" }}>▶</i>
                        <span className="cp-ui-btn-cta--text fw-semibold text-uppercase">Watch Video</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="position-absolute bottom-0 start-0 w-100" style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          padding: "20px 0"
        }}>
          <div className="container">
            <div className="row">
              <ol className="carousel-indicators col-12 col-md-7 col-lg-6 position-relative mx-auto mx-md-0" style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                listStyle: "none",
                padding: "0",
                margin: "0 auto",
                maxWidth: "50%"
              }}>
                {carouselItems.map((_, idx) => (
                  <li 
                    key={idx}
                    data-bs-target="#carousel-header-customers" 
                    data-bs-slide-to={idx}
                    className={idx === activeSlide ? 'active' : ''}
                    onClick={() => goToSlide(idx)}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: idx === activeSlide ? "#ffffff" : "rgba(255,255,255,0.4)",
                      cursor: "pointer",
                      border: "none",
                      transition: "background-color 0.3s ease"
                    }}
                  ></li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <a className="p-absolute carousel-control carousel-control-prev" role="button" aria-label="prev carousel button" style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: "10",
          cursor: "pointer",
          background: "rgba(0,0,0,0.3)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          textDecoration: "none"
        }} onClick={prevSlide}>
          <span className="arrow-icon arrow-icon--prev" aria-hidden="true" style={{
            display: "inline-block",
            width: "12px",
            height: "12px",
            borderLeft: "3px solid #ffffff",
            borderBottom: "3px solid #ffffff",
            transform: "rotate(45deg)"
          }}></span>
        </a>
        <a className="p-absolute carousel-control carousel-control-next" role="button" aria-label="next carousel button" style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: "10",
          cursor: "pointer",
          background: "rgba(0,0,0,0.3)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          textDecoration: "none"
        }} onClick={nextSlide}>
          <span className="arrow-icon arrow-icon--next" aria-hidden="true" style={{
            display: "inline-block",
            width: "12px",
            height: "12px",
            borderRight: "3px solid #ffffff",
            borderTop: "3px solid #ffffff",
            transform: "rotate(45deg)"
          }}></span>
        </a>
      </div>

      {/* ===== CUSTOMER LOGOS SECTION ===== */}
      <section className="customers-logo bg-gray-lightest py-4 py-lg-6" style={{
        backgroundColor: "#f5f5f5",
        padding: "40px 0 60px 0"
      }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div className="row">
            <div className="col-12 text-center">
              <h2 style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#1a1a1a",
                marginBottom: "24px",
                fontFamily: "NationalWeb, sans-serif"
              }}>Thousands of customers love &amp; trust Datadog</h2>
            </div>
          </div>
          <div className="logos-grid mt-lg-4 mx-auto" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "16px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            {customerLogos.map((logo, idx) => (
              <div key={idx} className="customer-logo bg-white d-flex justify-content-center align-items-center text-center" style={{
                backgroundColor: "#ffffff",
                padding: "16px",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "80px",
                transition: "box-shadow 0.3s ease"
              }}>
                <img 
                  alt={logo.name} 
                  className="img-fluid" 
                  src={logo.img}
                  style={{
                    maxHeight: "50px",
                    maxWidth: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12 js-toggle-section toggle-section text-center pt-3">
              <div className="expand-btn d-flex justify-content-center m-auto cursor-pointer" style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                alignItems: "center",
                gap: "8px"
              }}>
                <h5 className="me-1" style={{ fontSize: "16px", fontWeight: "600", margin: "0" }}>View more</h5>
                <i className="icon icon-down-carrot-normal">▼</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CUSTOMER SPOTLIGHTS ===== */}
      <section className="customer-spotlights py-4 py-lg-6" style={{
        padding: "40px 0 60px 0",
        backgroundColor: "#ffffff"
      }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div className="row">
            <div className="col-12 text-center">
              <h2 style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#1a1a1a",
                marginBottom: "32px",
                fontFamily: "NationalWeb, sans-serif"
              }}>Customer Spotlights</h2>
            </div>
          </div>
          <div className="spotlights-row position-relative row flex-nowrap" style={{
            display: "flex",
            gap: "30px",
            overflowX: "auto",
            padding: "10px 0"
          }}>
            {spotlights.map((spotlight) => (
              <div key={spotlight.id} className="spotlight-container col-12 col-md-6 d-flex" style={{
                flex: "0 0 calc(50% - 15px)",
                maxWidth: "calc(50% - 15px)",
                minWidth: "300px"
              }}>
                <div className="spotlight-item d-flex flex-column mb-4 mb-md-0" style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  overflow: "hidden"
                }}>
                  <a href={spotlight.link} style={{ textDecoration: "none" }}>
                    <div className="spotlight-item--header p-relative cursor-pointer" style={{
                      position: "relative",
                      cursor: "pointer"
                    }}>
                      <img 
                        src={spotlight.image} 
                        className="w-100" 
                        alt={spotlight.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block"
                        }}
                      />
                      <div className="overlay bg-transparent position-absolute w-100 h-100 d-flex justify-content-start align-items-end text-white" style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        padding: "20px",
                        background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                        color: "#ffffff"
                      }}>
                        <div>
                          <span className="speaker-name d-block fw-semibold" style={{
                            fontWeight: "600",
                            fontSize: "18px"
                          }}>{spotlight.speaker}</span>
                          <span className="speaker-info d-block m-0" style={{
                            fontSize: "14px",
                            opacity: "0.9"
                          }} dangerouslySetInnerHTML={{ __html: spotlight.role }} />
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="spotlight-item--body d-flex flex-column justify-content-start justify-content-md-between flex-md-grow-1" style={{
                    padding: "20px 24px",
                    flex: "1"
                  }}>
                    <blockquote className="px-0 pt-4 pt-md-2 pt-lg-4 mt-0 mb-4 mb-md-2 mb-md-3 fst-normal text-black text-center text-md-start" style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "#1a1a1a",
                      margin: "0 0 16px 0",
                      fontStyle: "normal"
                    }}>"{spotlight.quote}"</blockquote>
                    <div className="buttons-wrapper d-flex flex-column justify-content-center align-items-start flex-md-row justify-content-md-start align-items-md-center">
                      <a href={spotlight.link} className="cp-ui-btn-cta cp-ui-btn-cta--small cp-ui-btn-cta--solid-purple width-full d-flex justify-content-center align-items-center text-center" aria-label="Read the story" style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px 24px",
                        backgroundColor: "#632ca6",
                        color: "#ffffff",
                        borderRadius: "4px",
                        fontWeight: "600",
                        textDecoration: "none",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                      }}>
                        <span className="cp-ui-btn-cta--text fw-semibold text-uppercase">Read the story</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row d-md-none">
            <ol className="spolights-scroll-indicators d-flex justify-content-center mb-0 p-0 w-100" style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              listStyle: "none",
              padding: "0",
              marginTop: "16px"
            }}>
              <li className="active" style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#632ca6",
                cursor: "pointer"
              }}></li>
              <li style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#ccc",
                cursor: "pointer"
              }}></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== CUSTOMER STORIES / RESOURCES SECTION ===== */}
      <section className="customers-resources py-4 py-lg-6 shadow-section-inset-light" style={{
        padding: "40px 0 60px 0",
        backgroundColor: "#f5f5f5"
      }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div className="row">
            <div className="col-12 text-center">
              <h2 style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#1a1a1a",
                marginBottom: "32px",
                fontFamily: "NationalWeb, sans-serif"
              }}>Customer Stories</h2>
            </div>
          </div>
        </div>
        <div className="container-md" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div className="row resources-container mt-lg-4">
            {/* Filter Dropdown (Mobile) */}
            <div className="tab-dropdown d-flex d-md-none justify-content-center align-items-center" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "16px",
              cursor: "pointer"
            }}>
              <label className="tab-dropdown-label h5" htmlFor="chck2" style={{
                fontSize: "18px",
                fontWeight: "600",
                margin: "0",
                marginRight: "8px"
              }}>Filters</label>
              <i className="icon-down-carrot-normal tab-dropdown-icon">▼</i>
            </div>

            <div className="tab col-md-12">
              <div className="instant-search-container">
                <div className="instant-search-universal--customers col-12 p-0">
                  <div className="row">
                    {/* Filter Sidebar */}
                    <div className="col-md-3">
                      <div className="ais-Nav">
                        <div className="instant-search-nav" id="nav--customers">
                          <div id="filters--customers">
                            {/* Story Type Filter */}
                            <div className="ais-RefinementList" data-attribute="type">
                              <div className="ais-RefinementList-dropdown">
                                <div className="d-flex w-100 justify-content-between">
                                  <h3 className="ais-RefinementList-attribute" style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    color: "#1a1a1a",
                                    marginBottom: "8px"
                                  }}>Story Type</h3>
                                  <i className="icon-up-carrot-normal" id="type-icon" style={{
                                    cursor: "pointer"
                                  }}>▲</i>
                                </div>
                              </div>
                              <div id="type-container" className="ais-RefinementList-container">
                                <div id="filter-type--customers" data-attribute="type">
                                  <div className="ais-RefinementList">
                                    <ul className="ais-RefinementList-list list-unstyled mb-2" style={{
                                      listStyle: "none",
                                      padding: "0",
                                      margin: "0"
                                    }}>
                                      {["Case Studies", "Partner Case Studies", "Tam Brief", "Video Testimonials"].map((type, idx) => (
                                        <li key={idx} className="ais-RefinementList-item">
                                          <div>
                                            <label className="ais-RefinementList-label" style={{
                                              display: "flex",
                                              alignItems: "center",
                                              cursor: "pointer",
                                              fontSize: "14px",
                                              color: "#555"
                                            }}>
                                              <input 
                                                className="ais-RefinementList-checkbox" 
                                                type="checkbox" 
                                                value={type.toLowerCase().replace(/ /g, '-')}
                                                style={{
                                                  marginRight: "8px",
                                                  width: "16px",
                                                  height: "16px",
                                                  cursor: "pointer"
                                                }}
                                              />
                                              <span className="ais-RefinementList-checkmark"></span>
                                              <span className="ais-RefinementList-labelText">{type}</span>
                                            </label>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Industry Filter */}
                            <div className="ais-RefinementList" data-attribute="industry">
                              <div className="ais-RefinementList-dropdown">
                                <div className="d-flex w-100 justify-content-between">
                                  <h3 className="ais-RefinementList-attribute" style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    color: "#1a1a1a",
                                    marginBottom: "8px"
                                  }}>Industry</h3>
                                  <i className="icon-down-carrot-normal" id="industry-icon" style={{
                                    cursor: "pointer"
                                  }}>▼</i>
                                </div>
                              </div>
                              <div id="industry-container" className="ais-RefinementList-container d-none">
                                {/* Industry items would be rendered here */}
                              </div>
                            </div>

                            {/* Product Filter */}
                            <div className="ais-RefinementList" data-attribute="product">
                              <div className="ais-RefinementList-dropdown">
                                <div className="d-flex w-100 justify-content-between">
                                  <h3 className="ais-RefinementList-attribute" style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    color: "#1a1a1a",
                                    marginBottom: "8px"
                                  }}>Product</h3>
                                  <i className="icon-down-carrot-normal" id="product-icon" style={{
                                    cursor: "pointer"
                                  }}>▼</i>
                                </div>
                              </div>
                              <div id="product-container" className="ais-RefinementList-container d-none">
                                {/* Product items would be rendered here */}
                              </div>
                            </div>

                            {/* Region Filter */}
                            <div className="ais-RefinementList" data-attribute="region">
                              <div className="ais-RefinementList-dropdown">
                                <div className="d-flex w-100 justify-content-between">
                                  <h3 className="ais-RefinementList-attribute" style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    color: "#1a1a1a",
                                    marginBottom: "8px"
                                  }}>Region</h3>
                                  <i className="icon-down-carrot-normal" id="region-icon" style={{
                                    cursor: "pointer"
                                  }}>▼</i>
                                </div>
                              </div>
                              <div id="region-container" className="ais-RefinementList-container d-none">
                                {/* Region items would be rendered here */}
                              </div>
                            </div>

                            {/* Use Case Filter */}
                            <div className="ais-RefinementList" data-attribute="use_case">
                              <div className="ais-RefinementList-dropdown">
                                <div className="d-flex w-100 justify-content-between">
                                  <h3 className="ais-RefinementList-attribute" style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    color: "#1a1a1a",
                                    marginBottom: "8px"
                                  }}>Use Case</h3>
                                  <i className="icon-down-carrot-normal" id="use_case-icon" style={{
                                    cursor: "pointer"
                                  }}>▼</i>
                                </div>
                              </div>
                              <div id="use_case-container" className="ais-RefinementList-container d-none">
                                {/* Use Case items would be rendered here */}
                              </div>
                            </div>
                          </div>
                          <div id="clear--customers" style={{ marginTop: "16px" }}>
                            <div className="ais-ClearRefinements">
                              <button className="ais-ClearRefinements-button customers-clear-button" style={{
                                padding: "8px 16px",
                                backgroundColor: "transparent",
                                border: "1px solid #632ca6",
                                color: "#632ca6",
                                borderRadius: "4px",
                                cursor: "pointer",
                                fontSize: "14px",
                                fontWeight: "600"
                              }}>Clear All</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="col-md-9">
                      <div id="hits--customers">
                        <div className="ais-Hits">
                          <ol className="ais-Hits-list" style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                            gap: "24px",
                            listStyle: "none",
                            padding: "0",
                            margin: "0"
                          }}>
                            {/* Sample customer story cards */}
                            {[
                              { title: "USDA", desc: "ECCO Select uses Datadog to enhance USDA's digital capabilities and meet FedRAMP® requirements", link: "https://www.datadoghq.com/case-studies/usda", img: "https://corp.dd-static.net/img/case-studies/usda.png" },
                              { title: "Delta Dental of New Jersey and Connecticut", desc: "Delta Dental of New Jersey and Connecticut uses Datadog to accelerate time to insight and get new features to market faster.", link: "https://www.datadoghq.com/case-studies/delta-dental", img: "https://corp.dd-static.net/img/case-studies/delta-dental-thumbnail.png" },
                              { title: "London Stock Exchange Group", desc: "Learn how Datadog helps LSEG proactively identify issues and prevent system outages to ensure the exchange runs smoothly.", link: "#", img: "https://corp.dd-static.net/img/testimonials/cards_thumbnails/thumbnail_lseg-min.png", isVideo: true },
                              { title: "HashiCorp", desc: "Improving Application Performance and DevOps Collaboration with a Unified Monitoring Platform", link: "https://www.datadoghq.com/case-studies/hashicorp", img: "https://corp.dd-static.net/img/case-studies/resources_hashicorp_casestudy@2x.png" },
                              { title: "SNCF", desc: "How Datadog empowered different business units by giving them a single source of truth on their path to modernization", link: "https://www.datadoghq.com/case-studies/sncf", img: "https://corp.dd-static.net/img/case-studies/resources_sncf_casestudy@2x.png" },
                              { title: "Wayfair", desc: "How Datadog provides plug and play visibility into distributed systems.", link: "#", img: "https://corp.dd-static.net/img/testimonials/cards_thumbnails/thumbnail_wayfair-min.png", isVideo: true },
                              { title: "Appfolio", desc: "AppFolio selects Datadog Agent Observability to monitor and optimize its AI applications", link: "https://www.datadoghq.com/case-studies/appfolio", img: "https://corp.dd-static.net/img/case-studies/appfolio_thumbnail.png" },
                              { title: "Mercado Libre", desc: "Learn how Datadog bridged the gap between application and infrastructure teams to enable cross-team collaboration.", link: "https://www.datadoghq.com/case-studies/mercadolibre", img: "https://corp.dd-static.net/img/case-studies/resources_mercadolibre_casestudy@2x.png" },
                              { title: "Toyota", desc: "Toyota accelerates feature delivery, troubleshooting, and onboarding at scale by monitoring its AWS environment with Datadog", link: "https://www.datadoghq.com/case-studies/toyota", img: "https://corp.dd-static.net/img/case-studies/resources_toyota_casestudy.png" },
                              { title: "Flight Centre Corporate", desc: "Flight Centre Corporate gains first-class visibility: improving reliability, consistency, and cloud efficiency", link: "#", img: "https://corp.dd-static.net/img/testimonials/cards_thumbnails/thumbnail_flightcenter-min.png", isVideo: true },
                              { title: "Nomad Health", desc: "How Nomad Health controls AI costs and risk with Datadog Agent Observability", link: "https://www.datadoghq.com/case-studies/nomad-health", img: "https://corp.dd-static.net/img/case-studies/nomad-health/nomad-health-thumbnail.png" },
                              { title: "Contentful", desc: "How Contentful accelerated troubleshooting with Flex Logs", link: "https://www.datadoghq.com/case-studies/contentful", img: "https://corp.dd-static.net/img/case-studies//contentful/contentful-thumbnail.png" }
                            ].map((story, idx) => (
                              <li key={idx} className="ais-Hits-item">
                                {story.isVideo ? (
                                  <div className="video-testimonial cp-ui-card cp-ui-card-bg-white cp-ui-card-shadow h-100" style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "8px",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                    overflow: "hidden",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    cursor: "pointer"
                                  }}>
                                    <div className="cp-ui-card--header position-relative" style={{
                                      position: "relative"
                                    }}>
                                      <picture className="d-block">
                                        <img className="card-img-top img-fluid cursor-pointer" loading="lazy" src={story.img} alt={story.title} style={{
                                          width: "100%",
                                          height: "auto",
                                          display: "block"
                                        }} />
                                      </picture>
                                      <div className="overlay position-absolute w-100 h-100" style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                        background: "rgba(0,0,0,0.2)"
                                      }}></div>
                                      <button className="cp-ui-play-btn position-absolute w-100 h-100 border-0" aria-label="play button" style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                        border: "none",
                                        background: "transparent",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer"
                                      }}>
                                        <i className="icon-play-circle" style={{
                                          fontSize: "60px",
                                          color: "rgba(255,255,255,0.8)"
                                        }}>▶</i>
                                      </button>
                                    </div>
                                    <div className="cp-ui-card--body" style={{
                                      padding: "16px 20px",
                                      flex: "1",
                                      display: "flex",
                                      flexDirection: "column"
                                    }}>
                                      <p className="card-title fw-semibold" style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        color: "#1a1a1a",
                                        margin: "0 0 8px 0"
                                      }}>{story.title}</p>
                                      <p className="card-description mt-0" style={{
                                        fontSize: "14px",
                                        lineHeight: "1.5",
                                        color: "#555",
                                        margin: "0"
                                      }}>{story.desc}</p>
                                    </div>
                                  </div>
                                ) : (
                                  <a className="card-outer-link h-100" href={story.link} style={{
                                    textDecoration: "none",
                                    display: "block",
                                    height: "100%"
                                  }}>
                                    <div className="cp-ui-card cp-ui-card-bg-white cp-ui-card-shadow h-100" style={{
                                      backgroundColor: "#ffffff",
                                      borderRadius: "8px",
                                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                      overflow: "hidden",
                                      height: "100%",
                                      display: "flex",
                                      flexDirection: "column"
                                    }}>
                                      <div className="cp-ui-card--header">
                                        <picture className="d-block">
                                          <img className="card-img-top img-fluid" loading="lazy" src={story.img} alt={story.title} style={{
                                            width: "100%",
                                            height: "auto",
                                            display: "block"
                                          }} />
                                        </picture>
                                      </div>
                                      <div className="cp-ui-card--body" style={{
                                        padding: "16px 20px",
                                        flex: "1",
                                        display: "flex",
                                        flexDirection: "column"
                                      }}>
                                        <p className="card-title fw-semibold text-black" style={{
                                          fontSize: "18px",
                                          fontWeight: "600",
                                          color: "#1a1a1a",
                                          margin: "0 0 8px 0"
                                        }}>{story.title}</p>
                                        <p className="card-description mt-0" style={{
                                          fontSize: "14px",
                                          lineHeight: "1.5",
                                          color: "#555",
                                          margin: "0"
                                        }}>{story.desc}</p>
                                      </div>
                                    </div>
                                  </a>
                                )}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                      <div id="loadmore--customers" className="mt-3" data-pagination-fixed="true">
                        <div className="ais-Pagination">
                          <ul className="ais-Pagination-list" style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "4px",
                            listStyle: "none",
                            padding: "0",
                            margin: "16px 0 0 0"
                          }}>
                            <li className="ais-Pagination-item ais-Pagination-item--disabled ais-Pagination-item--previousPage">
                              <span className="ais-Pagination-link" aria-label="Previous Page" style={{
                                padding: "8px 12px",
                                color: "#ccc",
                                cursor: "not-allowed"
                              }}>‹</span>
                            </li>
                            <li className="ais-Pagination-item ais-Pagination-item--page ais-Pagination-item--selected">
                              <a className="ais-Pagination-link" aria-label="Page 1" href="#" style={{
                                padding: "8px 12px",
                                backgroundColor: "#632ca6",
                                color: "#ffffff",
                                borderRadius: "4px",
                                textDecoration: "none"
                              }}>1</a>
                            </li>
                            <li className="ais-Pagination-item ais-Pagination-item--page">
                              <a className="ais-Pagination-link" aria-label="Page 2" href="#" style={{
                                padding: "8px 12px",
                                color: "#555",
                                textDecoration: "none"
                              }}>2</a>
                            </li>
                            <li className="ais-Pagination-item ais-Pagination-item--page">
                              <a className="ais-Pagination-link" aria-label="Page 3" href="#" style={{
                                padding: "8px 12px",
                                color: "#555",
                                textDecoration: "none"
                              }}>3</a>
                            </li>
                            <li className="ais-Pagination-item ais-Pagination-item--page">
                              <a className="ais-Pagination-link" aria-label="Page 4" href="#" style={{
                                padding: "8px 12px",
                                color: "#555",
                                textDecoration: "none"
                              }}>4</a>
                            </li>
                            <li className="ais-Pagination-item ais-Pagination-item--page">
                              <a className="ais-Pagination-link" aria-label="Page 5" href="#" style={{
                                padding: "8px 12px",
                                color: "#555",
                                textDecoration: "none"
                              }}>5</a>
                            </li>
                            <li className="ais-Pagination-item ais-Pagination-item--nextPage">
                              <a className="ais-Pagination-link" aria-label="Next Page" href="#" style={{
                                padding: "8px 12px",
                                color: "#555",
                                textDecoration: "none"
                              }}>›</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY SECTION ===== */}
      <section className="community" style={{
        padding: "0",
        backgroundColor: "#1a1a1a"
      }}>
        <div className="container-fluid h-100 p-md-0" style={{
          padding: "0"
        }}>
          <div className="row p-relative h-100" style={{
            display: "flex",
            flexWrap: "wrap",
            minHeight: "300px",
            position: "relative"
          }}>
            <div className="community-img-container p-0 col-12 col-md-6" style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "0",
              position: "relative",
              overflow: "hidden"
            }}>
              <img 
                src="https://corp.dd-static.net/img/customers/join-datadog-community.png?auto=format" 
                alt="Datadog community"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
              <div className="overlay d-md-none p-absolute w-100 h-100" style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.3)",
                display: "none"
              }}></div>
            </div>
            <div className="text-container d-flex flex-column justify-content-between h-100 col-8 col-md-6 py-2 ps-md-4 pe-md-2 pt-md-4 pb-md-5 text-white" style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              padding: "30px",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <h2 className="d-block d-md-none d-lg-block" style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "16px"
              }}>Join our Datadog community</h2>
              <h4 className="d-none d-md-block d-lg-none mt-0" style={{
                fontSize: "20px",
                fontWeight: "600",
                margin: "0 0 16px 0"
              }}>Join our Datadog community</h4>
              <div className="slack-btn d-flex align-items-center">
                <a href="https://chat.datadoghq.com/" className="font-16 text-uppercase fw-semibold" target="_blank" style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  <i className="icon icon-slack" style={{ fontSize: "24px" }}>#</i>
                  Slack Channel &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INLINE CTA BANNER ===== */}
      <div className="inline-cta-bg" style={{
        background: "linear-gradient(90deg, #0094ff -2.84%, #2812fc 48.8%, #d324c8 104.36%)",
        padding: "30px 0"
      }}>
        <div className="banner-regular">
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
            <div className="row py-4 flex-column justify-content-center align-items-center" style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"
            }}>
              <div className="col-12 pb-2">
                <h3 className="text-white mb-0 text-center mt-md-0" style={{
                  color: "#ffffff",
                  fontSize: "24px",
                  fontWeight: "700",
                  margin: "0"
                }}>Webinar: Better Reliability with SLOs</h3>
                <p className="text-white text-center mt-1 mb-2 mb-md-0" style={{
                  color: "#ffffff",
                  fontSize: "16px",
                  margin: "4px 0 0 0"
                }}>Learn key metrics for setting SLIs and how to define SLOs.</p>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center" style={{
                zIndex: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "12px"
              }}>
                <a href="https://www.datadoghq.com/dg/webinars/demo-webinars-se-slo-us/" target="_blank" className="cp-ui-btn-cta cp-ui-btn-cta--small cp-ui-btn-cta--solid-white width-full d-flex justify-content-center align-items-center text-center" aria-label="Watch the webinar" style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 24px",
                  backgroundColor: "#ffffff",
                  color: "#1a1a1a",
                  borderRadius: "4px",
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  <span className="cp-ui-btn-cta--text fw-semibold text-uppercase">Watch the webinar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .col-md-5, .col-md-7 {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
          .testimonial-details {
            padding: 20px !important;
          }
          .testimonial-video {
            min-height: 200px !important;
          }
          .logos-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)) !important;
          }
          .spotlights-row {
            flex-wrap: wrap !important;
          }
          .spotlight-container {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            min-width: unset !important;
          }
          .community-img-container {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
          .text-container {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            padding: 20px !important;
          }
          [style*="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))"] {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)) !important;
          }
        }

        @media (max-width: 767px) {
          .carousel-item {
            min-height: 400px !important;
          }
          .testimonial-video {
            min-height: 150px !important;
          }
          .testimonial-details h2 {
            font-size: 20px !important;
            text-align: center !important;
          }
          .logo-container {
            justify-content: center !important;
            width: 100% !important;
          }
          .btns-container {
            flex-direction: column !important;
            width: 100% !important;
          }
          .btns-container a, .btns-container button {
            width: 100% !important;
            justify-content: center !important;
          }
          .logos-grid {
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)) !important;
            gap: 10px !important;
          }
          .customer-logo {
            min-height: 60px !important;
            padding: 10px !important;
          }
          .customer-logo img {
            max-height: 35px !important;
          }
          .spotlight-item--header .overlay {
            padding: 12px !important;
          }
          .spotlight-item--header .speaker-name {
            font-size: 14px !important;
          }
          .spotlight-item--header .speaker-info {
            font-size: 12px !important;
          }
          .text-container h2 {
            font-size: 22px !important;
          }
          .inline-cta-bg .row {
            padding: 12px 0 !important;
          }
          .inline-cta-bg h3 {
            font-size: 18px !important;
          }
          .inline-cta-bg p {
            font-size: 14px !important;
          }
          .carousel-control-prev, .carousel-control-next {
            width: 32px !important;
            height: 32px !important;
          }
          [style*="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          .ais-Pagination-list {
            flex-wrap: wrap !important;
          }
        }
      `}</style>
    </div>
  );
}