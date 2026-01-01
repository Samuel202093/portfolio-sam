"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "service",
      "portfolio",
      "blog",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);
  const openMobile = () => setMobileOpen(true);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
  } as const;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const body = document.body;
    if (mobileOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
    return () => body.classList.remove("no-scroll");
  }, [mobileOpen]);

  return (
    <>
      {/* JSON-LD structured data for WebSite and Person */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://samuel-onyebueke.netlify.app/",
          "name": "Samuel Onyebueke Portfolio",
          "publisher": {
            "@type": "Person",
            "name": "Samuel Onyebueke",
            "sameAs": [
              "https://x.com/ONYEBUEKEIFEAN2",
              "https://linkedin.com/in/onyebueke-ifeanyi-1b52411b4",
              "https://github.com/Samuel202093",
            ]
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://samuel-onyebueke.netlify.app/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })
      }} />
      <div id="__next">
        <div className="br-app">
          <div className="fixed-navbar">
            <header id="header" className="site-header header-style-1">
              <nav className="navigation navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="open-btn" onClick={openMobile}>
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">
                      <img src="images/hero/logo2.png" alt="Samuel Onyebueke logo" className="w-[500px] h-[200px]y object-contain"/>
                    </a>
                  </div>
                  {/* Desktop navigation holder remains for larger screens */}
                  <div
                    id="navbar"
                    className="navbar-collapse navigation-holder"
                  >
                    

                    <button className="close-navbar">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <button className="close-navbar-2">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </button>

                     
                    <ul className="nav navbar-nav">

                      <li className={"home" + (activeSection === "home" ? " active" : "")}>
                        <a href="#home">Home</a>
                      </li>
                      <li className={"about" + (activeSection === "about" ? " active" : "")}>
                        <a href="#about">About Me</a>
                      </li>
                      <li className={"service" + (activeSection === "service" ? " active" : "")}>
                        <a href="#service">Service</a>
                      </li>
                      <li className={"protfolio" + (activeSection === "portfolio" ? " active" : "")}>
                        <a href="#portfolio">Portfolio</a>
                      </li>
                      <li className={"blog" + (activeSection === "blog" ? " active" : "")}>
                        <a href="#blog">Blog</a>
                      </li>
                      <li className={"contact" + (activeSection === "contact" ? " active" : "")}>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>

                  <AnimatePresence>
                    {mobileOpen && (
                      <motion.div
                        key="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="mobile-menu-panel"
                      >
                        <button className="close-navbar" onClick={closeMobile}>
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                        <ul className="nav navbar-nav" onClick={closeMobile}>
                          <li className={"home" + (activeSection === "home" ? " active" : "")}>
                            <a href="#home">Home</a>
                          </li>
                          <li className={"about" + (activeSection === "about" ? " active" : "")}>
                            <a href="#about">About Me</a>
                          </li>
                          <li className={"service" + (activeSection === "service" ? " active" : "")}>
                            <a href="#service">Service</a>
                          </li>
                          <li className={"protfolio" + (activeSection === "portfolio" ? " active" : "")}>
                            <a href="#portfolio">Portfolio</a>
                          </li>
                          <li className={"blog" + (activeSection === "blog" ? " active" : "")}>
                            <a href="#blog">Blog</a>
                          </li>
                          <li className={"contact" + (activeSection === "contact" ? " active" : "")}>
                            <a href="#contact">Contact</a>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="menu-open-btn-holder">
                    <button className="menu-open-btn" onClick={openMobile}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                  <div className="menu-open-btn-holder">
                    <button className="menu-open-btn">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </nav>
            </header>
          </div>
          <Hero />
          <div>
            <About />
          </div>
          <div>
            <Services />
          </div>
          <div>
            <Portfolio />
          </div>
         
          <Technologies />
          <div>
            <Blog />
          </div>
          <div>
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
