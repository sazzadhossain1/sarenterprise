import React, { useRef } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

const Main = () => {
  const footerRef = useRef(null); // Create reference for footer

  return (
    <div>
      <NavigationBar footerRef={footerRef} /> {/* Pass reference to Navbar */}
      <Outlet />
      <Footer ref={footerRef} /> {/* Attach reference to Footer */}
    </div>
  );
};

export default Main;
