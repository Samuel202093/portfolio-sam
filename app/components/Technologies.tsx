"use client";
import React from "react";
import { techStack } from "../data";

export default function Technologies() {
  return (
    <section className="technology-section section-padding" id="technologies">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="section-title text-center">
              <span>Technologies</span>
              <h2>Tech Stack &amp; Frameworks</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="tech-grid">
              {techStack.map((tech) => (
                <div className="tech-card" key={tech.name}>
                  <img
                    className="tech-logo"
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    style={tech.invert ? { filter: "invert(1)" } : undefined}
                  />
                  <h3 className="tech-name">{tech.name}</h3>
                  <p className="tech-type">{tech.category}</p>
                </div>
              ))}
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