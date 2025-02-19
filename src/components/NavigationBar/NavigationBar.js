import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// import logo from "../../accets/logo/Logo PNG.png";

const NavigationBar = () => {
  return (
    <div>
      <header>
        <Link to="/home">
          <img className="logo" src="" alt="" />
          {/* <h1 className="quickVanuk">Quick Vanuk</h1> */}
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
              <li>
                {/* <Link>About Us</Link> */}
                <li>
                  <Link to="/aboutUs">
                    About Us <FontAwesomeIcon icon={faAngleDown} />
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs">
                    Our Services <FontAwesomeIcon icon={faAngleDown} />
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs">
                    Projects <FontAwesomeIcon icon={faAngleDown} />
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs">
                    Glarry <FontAwesomeIcon icon={faAngleDown} />
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs">Contact</Link>
                </li>

                {/* <ul>
                  <li>
                    <Link to="/brainTumourOperation">
                      Brain Tumour Operation
                    </Link>
                  </li>
                  <li>
                    <Link to="/endoscopicBrainSurgery">
                      Endoscopic Brain Surgery (Pituitory, Etv And Others)
                    </Link>
                  </li>
                  <li>
                    <Link to="/skullBaseSurgery">Skull Base Surgery</Link>
                  </li>
                  <li>
                    <Link to="/vascularNeuroSurgery">
                      Vascular Neuro Surgery
                    </Link>
                  </li>
                  <li>
                    <Link to="/pediatricNeuroSurgery">
                      Pediatric Neuro Surgery
                    </Link>
                  </li>
                  <li>
                    <Link to="/spinalSurgery">Spinal Surgery</Link>
                  </li>
                  <li>
                    <Link to="/traumaticBrainAndSpineSurgery">
                      Traumatic Brain & Spine Surgery
                    </Link>
                  </li>
                  <li>
                    <Link to="/epilepsySurgery">Epilepsy Surgery</Link>
                  </li>
                  <li>
                    <Link to="/spinalTumour">Spinal Tumour</Link>
                  </li>
                  <li>
                    <Link to="/microdiscectomy">Microdiscectomy</Link>
                  </li>
                  <li>
                    <Link to="/strokeSurgery">
                      Stroke Surgery (Urgent Surgery Of Stroke Patients)
                    </Link>
                  </li>
                </ul> */}
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
