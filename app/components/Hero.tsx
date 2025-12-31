"use client";

export default function Hero() {
  return (
    <section id="home" className="hero hero-slider-wrapper hero-style-1">
      <div className="hero-slider">
        <div
          className="slide"
          style={{ backgroundImage: "url(/images/hero/hero-img2.avif)" }}
          aria-label="Hero background"
        >
          <div className="container">
            <div className="row">
              <div className="col col-md-10 col-sm-12 slide-caption">
                <div className="slide-subtitle">
                  <h4>I Am Samuel Onyebueke</h4>
                </div>
                <div className="slide-title">
                  <h2>Fullstack Developer</h2>
                </div>
                <div className="flex gap-4 btns">
                  <a href="#contact" className="template-btn go-contact-area">
                    Contact Me
                  </a>
                  <a
                    href="/resume/samuel-onyebueke-ifeanyi-cv.pdf"
                    className="template-btn go-contact-area"
                    download="samuel-onyebueke-ifeanyi-cv.pdf"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-links">
        <div className="overlay"></div>
        <ul>
          <li className="cursor-pointer">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Samuel202093"
              aria-label="GitHub"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/ONYEBUEKEIFEAN2"
            >
              <i className="fa fa-twitter cursor-pointer"></i>
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/onyebueke-ifeanyi-1b52411b4"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="white_svg">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </section>
  );
}
