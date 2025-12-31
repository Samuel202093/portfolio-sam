"use client";


export default function About() {
  return (
    <section id="about" className="tp-about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="tp-about-wrap">
              <div className="tp-about-img">
                <img src="images/hero/hero2.avif" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12">
            <div className="tp-about-text">
              <div className="tp-about-icon">
                <i className="fa fa-laptop icon-tp" aria-hidden="true"></i>
              </div>
              <div className="tp-about-icon-content">
                <h2>
                  Full-Stack Developer Delivering Scalable, High-Impact Web Applications
                </h2>
                <p>
                  I design and build scalable, high-impact web applications tailored to real business needs. From intuitive user interfaces to robust backend systems, I deliver end-to-end solutions with clean architecture, secure integrations, and performance in mind. <br />
                  I bring strong experience in system design and application architecture, building solutions that are modular, maintainable, and designed to scale. I make deliberate technical decisions that balance speed, reliability, and long-term growth, ensuring production-ready systems that evolve with business demands. <br />
                  Security and data integrity are core to my development process. I implement secure authentication and authorization, role-based access control, safe API design, and best practices to protect user data and prevent common vulnerabilities in modern web applications. <br />I work effectively in remote, cross-functional teams, taking ownership from concept to deployment. With a product-focused mindset and clear communication, I deliver reliable, scalable solutions that meet the expectations of global teams and distributed organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white_svg svg_white">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </section>
  );
}