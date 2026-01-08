"use client";
import React from "react";

export default function Blog() {
  return (
    <section id="blog" className="blog-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-md-10">
            <div className="section-title text-center">
              <span>From my Blog</span>
              <h2>Latest Articles</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          {/* Blog Post 1 */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="tp-blog-item h-100">
              <div className="tp-blog-item-wrap h-100 d-flex flex-column">
                <div className="tp-blog-img">
                  <img src="images/blog/1.jpg" alt="JWT is the silent engine behind your favorite apps" className="img-fluid w-100" />
                </div>
                <div className="tp-blog-content flex-grow-1 d-flex flex-column">
                  <h2 className="h5 mb-3">
                    <a className="text-white text-decoration-none" aria-label="JWT is the silent engine behind your favorite apps" href="https://www.linkedin.com/posts/onyebueke-ifeanyi-1b52411b4_jwt-jsonwebtoken-websecurity-activity-7396481892964958208-8So5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHeY9kB3_UP3SuB37drKGJrFU7OlyQVaHU">
                      JWT is the silent engine behind your favorite apps
                    </a>
                  </h2>
                  <div className="mt-auto">
                    <a href="https://www.linkedin.com/posts/onyebueke-ifeanyi-1b52411b4_jwt-jsonwebtoken-websecurity-activity-7396481892964958208-8So5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHeY9kB3_UP3SuB37drKGJrFU7OlyQVaHU" className="btn btn-outline-light btn-sm">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="tp-blog-item h-100">
              <div className="tp-blog-item-wrap h-100 d-flex flex-column">
                <div className="tp-blog-img">
                  <img src="images/blog/2.jpg" alt="Lazy or Eager? Your Strategy for Non-Redundant Queries" className="img-fluid w-100" />
                </div>
                <div className="tp-blog-content flex-grow-1 d-flex flex-column">
                  <h2 className="h5 mb-3">
                    <a className="text-white text-decoration-none" aria-label="Lazy or Eager? Your Strategy for Non-Redundant Queries" href="https://www.linkedin.com/posts/onyebueke-ifeanyi-1b52411b4_webperformance-frontenddevelopment-reactjs-activity-7386318725076992000-Fgaa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHeY9kB3_UP3SuB37drKGJrFU7OlyQVaHU">
                      Lazy or Eager? Your Strategy for Non-Redundant Queries
                    </a>
                  </h2>
                  <div className="mt-auto">
                    <a href="https://www.linkedin.com/posts/onyebueke-ifeanyi-1b52411b4_webperformance-frontenddevelopment-reactjs-activity-7386318725076992000-Fgaa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHeY9kB3_UP3SuB37drKGJrFU7OlyQVaHU" className="btn btn-outline-light btn-sm">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="tp-blog-item h-100">
              <div className="tp-blog-item-wrap h-100 d-flex flex-column">
                <div className="tp-blog-img">
                  <img src="images/blog/3.jpg" alt="Understanding export const dynamic in Next.js" className="img-fluid w-100" />
                </div>
                <div className="tp-blog-content flex-grow-1 d-flex flex-column">
                  <h2 className="h5 mb-3">
                    <a className="text-white text-decoration-none" aria-label="Understanding export const dynamic in Next.js" href="https://www.linkedin.com/posts/onyebueke-ifeanyi-1b52411b4_nextjs-webdevelopment-performanceoptimization-activity-7360960089345744896-cU0X?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHeY9kB3_UP3SuB37drKGJrFU7OlyQVaHU">
                      Understanding export const dynamic in Next.js
                    </a>
                  </h2>
                  <div className="mt-auto">
                    <a href="https://www.linkedin.com/posts/onyebueke-ifeanyi-1b52411b4_nextjs-webdevelopment-performanceoptimization-activity-7360960089345744896-cU0X?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHeY9kB3_UP3SuB37drKGJrFU7OlyQVaHU" className="btn btn-outline-light btn-sm">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="tp-blog-item h-100">
              <div className="tp-blog-item-wrap h-100 d-flex flex-column">
                <div className="tp-blog-img">
                  <img src="images/blog/4.avif" alt="Idempotency & Rate Limiting in Production APIs" className="img-fluid w-100" />
                </div>
                <div className="tp-blog-content flex-grow-1 d-flex flex-column">
                  <h2 className="h5 mb-3">
                    <a className="text-white text-decoration-none" aria-label="Idempotency & Rate Limiting in Production APIs" href="https://www.linkedin.com/posts/onyebueke-ifeanyi-1b52411b4_systemdesign-softwarearchitecture-backendengineering-activity-7414986083928711168-jfEz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHeY9kB3_UP3SuB37drKGJrFU7OlyQVaHU">
                      Idempotency & Rate Limiting in Production APIs
                    </a>
                  </h2>
                  <div className="mt-auto">
                    <a href="https://www.linkedin.com/posts/onyebueke-ifeanyi-1b52411b4_systemdesign-softwarearchitecture-backendengineering-activity-7414986083928711168-jfEz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHeY9kB3_UP3SuB37drKGJrFU7OlyQVaHU" className="btn btn-outline-light btn-sm">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white_svg">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </section>
  );
}