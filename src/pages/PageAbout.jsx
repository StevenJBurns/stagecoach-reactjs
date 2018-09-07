/* React */
import React from "react";

/* Stylesheets */
import "../styles/PageAbout.css";
import VideoSunset from "../assets/wheat_field.mp4";


export const PageAbout = (props) => {
  return (
    <main className="main-about">
      <section>
        <h2>About Stagecoach Meat Co LLC</h2>
        <p>Stagecoach Meat Company, LLC is a family-owned and operated custom processing and retail meat sales company, located in Wiggins, Colorado. Although the company opened for business in March 2006, the owner and manager of the company has over 20 years of experience in the meat business. Our processing plant in Wiggins also includes a retail store with a full line of high quality, USDA-inspected beef and pork products.</p>
        <p>The founder, Ray Von Loh, his wife, children, and a host of dedicated employees oversee day-to-day operations. Our number one goal is customer satisfaction, quality products, and service.</p>
      </section>
      <section>
        <h2>Ray Von Loh</h2>
        <p></p>
      </section>
      {/* <video className="video-background" autoPlay muted loop>
        <source src={VideoSunset} type="video/mp4" />
      </video> */}
    </main>
  );
};
