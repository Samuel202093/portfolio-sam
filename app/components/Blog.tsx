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
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="tp-blog-item">
              <div className="tp-blog-item-wrap">
                <div className="tp-blog-img">
                  <img src="images/blog/1.jpg" alt="Blog item" />
                </div>
                <div className="tp-blog-content">
                  <h2>
                    <a className="text-white" aria-label="JWT is the silent engine behind your favorite apps" href="https://www.linkedin.com/posts/onyebueke-ifeanyi-1b52411b4_jwt-jsonwebtoken-websecurity-activity-7396481892964958208-8So5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHeY9kB3_UP3SuB37drKGJrFU7OlyQVaHU">𝐉𝐖𝐓 𝐢𝐬 𝐭𝐡𝐞 𝐬𝐢𝐥𝐞𝐧𝐭 𝐞𝐧𝐠𝐢𝐧𝐞 𝐛𝐞𝐡𝐢𝐧𝐝 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐚𝐩𝐩𝐬</a>
                  </h2>
  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="tp-blog-item">
              <div className="tp-blog-item-wrap">
                <div className="tp-blog-img">
                  <img src="images/blog/2.jpg" alt="Blog item" />
                </div>
                <div className="tp-blog-content">
                  <h2>
                    <a className="text-white" aria-label="Lazy or Eager? Your Strategy for Non-Redundant Queries." href="https://www.linkedin.com/posts/onyebueke-ifeanyi-1b52411b4_webperformance-frontenddevelopment-reactjs-activity-7386318725076992000-Fgaa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHeY9kB3_UP3SuB37drKGJrFU7OlyQVaHU">𝐋𝐚𝐳𝐲 𝐨𝐫 𝐄𝐚𝐠𝐞𝐫? 𝐘𝐨𝐮𝐫 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐲 𝐟𝐨𝐫 𝐍𝐨𝐧-𝐑𝐞𝐝𝐮𝐧𝐝𝐚𝐧𝐭 𝐐𝐮𝐞𝐫𝐢𝐞𝐬.</a>
                  </h2>
  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="tp-blog-item">
              <div className="tp-blog-item-wrap">
                <div className="tp-blog-img">
                  <img src="images/blog/3.jpg" alt="Blog item" />
                </div>
                <div className="tp-blog-content">
                  <h2>
                    <a className="text-white" aria-label="Understanding export const dynamic in Next.js" href="https://www.linkedin.com/posts/onyebueke-ifeanyi-1b52411b4_nextjs-webdevelopment-performanceoptimization-activity-7360960089345744896-cU0X?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHeY9kB3_UP3SuB37drKGJrFU7OlyQVaHU">𝗨𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝗲𝘅𝗽𝗼𝗿𝘁 𝗰𝗼𝗻𝘀𝘁 𝗱𝘆𝗻𝗮𝗺𝗶𝗰 𝗶𝗻 𝗡𝗲𝘅𝘁.𝗷𝘀</a>
                  </h2>
               
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