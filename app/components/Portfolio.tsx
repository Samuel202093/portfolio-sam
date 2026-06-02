"use client";
import React from "react";

export default function Portfolio() {
  return (
    <div className="tp-protfolio-area section-padding" id="portfolio">
      <div className="container">
        <div className="col-12">
          <div className="section-title text-center">
            <span>Portfolio</span>
            <h2>Latest Project</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tp-protfolio-item">
              <div className="portfolio-grid">
                <div className="tp-protfolio-single">
                  <div className="tp-protfolio-img">
                    <img src="images/projects/najee-photo.png" alt="najee" />
                  </div>
                  <div className="tp-protfolio-text">
                    <h2>Fullstack</h2>
                    <span>Photography Web Application</span>
                    <button>
                      <a href="https://najeesphotography.com"  target="_blank"
                      rel="noopener noreferrer">View Work</a>
                    </button>
           
                  </div>
                </div>

                <div className="tp-protfolio-single">
                  <div className="tp-protfolio-img">
                    <img src="images/projects/spiritan.png" alt="Abstract Art" />
                  </div>
                  <div className="tp-protfolio-text">
                    <h2>Fullstack</h2>
                    <span>Spiritan HECAP Admin Dashboard</span>
                    <button>
                      <a href="https://github.com/Samuel202093/spiritan" target="_blank"
                      rel="noopener noreferrer">View Work</a>
                    </button>
                  </div>
                </div>

                <div className="tp-protfolio-single">
                  <div className="tp-protfolio-img">
                    <img src="images/projects/exams.png" alt="3D Project" />
                  </div>
                  <div className="tp-protfolio-text">
                    <h2>Backend</h2>
                    <span>ExamFlow Engine</span>
                    <button>
                      <a href="https://github.com/Samuel202093/exam_server"  target="_blank"
                      rel="noopener noreferrer">View Work</a>
                    </button>
                  </div>
                </div>

                <div className="tp-protfolio-single">
                  <div className="tp-protfolio-img">
                    <img src="images/projects/laravel-api.png" alt="Modern BG" />
                  </div>
                  <div className="tp-protfolio-text">
                    <h2>Backend</h2>
                    <span>E-commerce APIs</span>
                    <button>
                      <a href="https://github.com/Samuel202093/ecommerce-laravel-api" target="_blank"
                      rel="noopener noreferrer">View Work</a>
                    </button>
                  </div>
                </div>

                <div className="tp-protfolio-single">
                  <div className="tp-protfolio-img">
                    <img src="images/projects/hi-gadget2.png" alt="Visual Design" />
                  </div>
                  <div className="tp-protfolio-text">
                    <h2>Fullstack</h2>
                    <span>Smart School System with Attendance Tracking & Admin Dashboard</span>
                    <button>
                      <a href="https://github.com/Samuel202093/Laurel-Systems-Frontend" target="_blank"
                      rel="noopener noreferrer">View Work</a>
                    </button>
                  </div>
                </div>

                <div className="tp-protfolio-single">
                  <div className="tp-protfolio-img">
                    <img src="images/projects/access-control.png" alt="Product Design" />
                  </div>
                  <div className="tp-protfolio-text">
                    <h2>Backend</h2>
                    <span>Real Estate Access Control & Security API</span>
                    <button>
                      <a href="https://github.com/Samuel202093/access-control" target="_blank"
                      rel="noopener noreferrer">View Work</a>
                    </button>
                  </div>
                </div>
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
    </div>
  );
}