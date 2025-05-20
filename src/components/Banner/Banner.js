import React from "react";
import "./Banner.css";
import video from "../../accets/BannerVideo/BannerVideo.mp4";

const Banner = () => {
  return (
    <div className="banner_parent_div">
      <div className="overlay"></div>
      <video className="video" src={video} autoPlay loop muted />
      <div className="banner_container">
        <h1>Welcome to M/S SAR ENTERPRISE</h1>
        <p>
          {/* Welcome to M/S SAR ENTERPRISE, */}A trusted name in construction
          and material supply. Established in 2024, we specialize in earth
          filling, sand filling, construction materials supply, and complete
          building construction solutions. With a commitment to quality,
          efficiency, and customer satisfaction, we ensure durable and
          cost-effective results for our clients..
        </p>
      </div>
    </div>
  );
};

export default Banner;
