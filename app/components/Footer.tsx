"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer-area text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="footer-image">
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <ul className="smothscroll" id="menu">
              <li>
                <a href="#home">
                  <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="footer-menu">
            <ul className="d-flex">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" aria-label="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://x.com/ONYEBUEKEIFEAN2" aria-label="Twitter">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/onyebueke-ifeanyi-1b52411b4" aria-label="LinkedIn">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <p className="copyright">
              © 2022 - {new Date().getFullYear()} Samuel Onyebueke — All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}