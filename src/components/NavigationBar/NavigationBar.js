import React from "react";
import "./NavigationBar.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// import logo from "../../accets/logo/Logo PNG.png";

const NavigationBar = ({ footerRef, aboutUsRef }) => {
  const handleScrollToFooter = (e) => {
    e.preventDefault();

    if (footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <header>
        <Link to="/home">
          {/* <img className="logo" src="" alt="" /> */}
          <h1 className="quickVanuk">Sar Enterprise</h1>
        </Link>
        <input type="checkbox" id="menu-bar" />
        <label htmlFor="menu-bar">
          <FontAwesomeIcon icon={faBars} />
        </label>

        <nav className="navbar">
          <ul>
            <div className="li_div">
              <li className="photo_gallery">
                <Link to="/home">Home</Link>
              </li>
              <li className="photo_gallery">
                <Link to="/home#about">About Us</Link>
              </li>

              <li>
                <li>
                  <Link to="/home#services">
                    Our Services
                    {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                  </Link>
                </li>
                {/* NASTED MENU START */}
                {/* <ul>
                  <li>
                    <Link to="/earthFilling">
                      Earth Filling & Land Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/sandFilling">Sand Filling</Link>
                  </li>
                  <li>
                    <Link to="/SupplyOfConstruction">
                      Supply of Construction Materials
                    </Link>
                  </li>
                  <li>
                    <Link to="/BuildingConstruction">
                      Building Construction
                    </Link>
                  </li>
                  <li>
                    <Link to="/InfrastructureDevelopment">
                      Infrastructure Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/dredgingServices">Dredging Services</Link>
                  </li>
                  <li>
                    <Link to="/drumTruck">Drum Truck Carrying Services</Link>
                  </li>
                  <li>
                    <Link to="/requestAQuote">
                      Request a Quote (Call-to-action button)
                    </Link>
                  </li>
                </ul> */}
                {/* NASTED MENU END */}
              </li>

              {/* ================== */}

              <li>
                <li>
                  <Link to="/home#projects">
                    Projects
                    {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                  </Link>
                </li>
                {/* NASTED MENU START */}
                {/* <ul>
                  <li>
                    <Link to="/ongoing">Ongoing & Completed Projects</Link>
                  </li>
                  <li>
                    <Link to="/clientList">Client List & Testimonials</Link>
                  </li>
                  <li>
                    <Link to="/WorkOrders">
                      Work Orders (Active & In-Progress)
                    </Link>
                  </li>
                  <li>
                    <Link to="/corporateSocial">
                      Corporate Social Responsibility
                    </Link>
                  </li>
                  <li>
                    <Link to="/environmental">
                      Environmental responsibility
                    </Link>
                  </li>
                  <li>
                    <Link to="/communityContributions">
                      Community contributions
                    </Link>
                  </li>
                </ul> */}
                {/* NASTED MENU END */}
              </li>

              {/* ================= */}

              <li>
                <li>
                  <Link to="/home#gallery">
                    Gallery
                    {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                  </Link>
                </li>
                {/* NASTED MENU START */}
                {/* <ul>
                  <li>
                    <Link to="/imagesOfProjects">Images of Projects</Link>
                  </li>
                  <li>
                    <Link to="/workInProgress">Work-in-Progress Pictures</Link>
                  </li>
                  <li>
                    <Link to="/teamAndEquipment">
                      Team & Equipment Showcase
                    </Link>
                  </li>
                </ul> */}
                {/* NASTED MENU END */}
              </li>

              <li>
                <a href="#" onClick={handleScrollToFooter}>
                  Contact
                </a>
              </li>

              {/* <li>
                <Link>
                  Gallery <FontAwesomeIcon icon={faAngleDown} />
                </Link>
                <ul>
                  <li>
                    <Link to="/photoGallery">Photo Gallery</Link>
                  </li>
                  <li>
                    <Link to="/videoGallery">Patient Feedback</Link>
                  </li>
                </ul>
              </li> */}
            </div>
            <li>
              <div className="nav_fle_div">
                {/* <FontAwesomeIcon className="faEnvelope" icon={faEnvelope} /> */}
                {/* <Link>kazidmc@gmail.com</Link> */}
                {/* <p>
                  {" "}
                  Home, (AboutUs - Mission and vission, Company over view, why
                  chose us,team), (OurServices - ),(Projects - ),(Glarry -
                  ),Contact
                </p> */}
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavigationBar;
