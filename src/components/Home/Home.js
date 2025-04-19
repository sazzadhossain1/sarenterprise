import React, { useEffect, useRef } from "react";
import "./Home.css";
import AboutUs from "../AboutUs/AboutUs";
import OurServices from "../OurServices/OurServices";
import Projects from "../Projects/Projects";
import Gallery from "../Gallery/Gallery";
import { useLocation } from "react-router-dom";

const Home = () => {
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const projectRef = useRef(null);
  const galleryRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#services" && serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#projects" && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#gallery" && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className="home_page_main_parent_div">
      <p>
        Welcome to M/S SAR ENTERPRISE, a trusted name in construction and
        material supply. Established in 2024, we specialize in earth filling,
        sand filling, construction materials supply, and complete building
        construction solutions. With a commitment to quality, efficiency, and
        customer satisfaction, we ensure durable and cost-effective results for
        our clients.
      </p>

      {/* Attach ref here */}
      <div ref={aboutRef}>
        <AboutUs />
      </div>

      <div ref={serviceRef}>
        <OurServices />
      </div>

      <div ref={projectRef}>
        <Projects />
      </div>

      <div ref={galleryRef}>
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
