import React from "react";
import "./OurServices.css";

import EarthFillingLandDevelopment from "../../accets/ourServices/EarthFillingLandDevelopment.jpg";
import SandFilling from "../../accets/ourServices/SandFilling.jpg";
import SupplyofConstructionMaterials from "../../accets/ourServices/SupplyofConstructionMaterials.jpg";
import BuildingConstruction from "../../accets/ourServices/BuildingConstruction.jpg";
import InfrastructureDevelopment from "../../accets/ourServices/InfrastructureDevelopment.jpg";
import DredgingServices from "../../accets/ourServices/DredgingServices.jpg";
import DrumTruckCarryingServices from "../../accets/ourServices/DrumTruckCarryingServices.jpg";
const OurServices = () => {
  return (
    <div className="ourServices_parent_div">
      <h1>Our Services</h1>
      <div className="ourServices_grid_div">
        <div>
          <img src={EarthFillingLandDevelopment} alt="" />
        </div>
        <div className="our_Services_right_text_div">
          <h2>Earth Filling & Land Development</h2>
          <p>
            We provide high-quality earth filling for site preparation and land
            development, ensuring a solid foundation for construction projects.
          </p>
        </div>
      </div>

      {/*  */}

      <div className="ourServices_grid_div_two">
        <div className="our_Services_left_text_div">
          <h2>Sand Filling</h2>
          <p>
            We supply and deliver premium sand to meet the needs of various
            construction projects.
          </p>
        </div>
        <div>
          <img src={SandFilling} alt="" />
        </div>
      </div>

      {/*  */}

      <div className="ourServices_grid_div">
        <div>
          <img src={SupplyofConstructionMaterials} alt="" />
        </div>
        <div className="our_Services_right_text_div">
          <h2>Supply of Construction Materials</h2>
          <p>
            We offer top-grade materials, including bricks, cement, rods,
            aggregates, and more, ensuring durability and strength.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="ourServices_grid_div_two">
        <div className="our_Services_left_text_div">
          <h2>Building Construction</h2>
          <p>
            From foundation to finishing, we deliver complete construction
            solutions with expertise and reliability.
          </p>
        </div>
        <div>
          <img src={BuildingConstruction} alt="" />
        </div>
      </div>

      {/*  */}
      <div className="ourServices_grid_div">
        <div>
          <img src={InfrastructureDevelopment} alt="" />
        </div>
        <div className="our_Services_right_text_div">
          {" "}
          <h2>Infrastructure Development</h2>
          <p>
            We engage in small- to large-scale infrastructure projects, ensuring
            high-quality outcomes with innovative approaches.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="ourServices_grid_div_two">
        <div className="our_Services_left_text_div">
          {" "}
          <h2>Dredging Services</h2>
          <p>
            Our dredging solutions clear waterways, reclaim land, and support
            construction projects efficiently.
          </p>
        </div>
        <div>
          <img src={DredgingServices} alt="" />
        </div>
      </div>

      {/*  */}
      <div className="ourServices_grid_div">
        <div>
          <img src={DrumTruckCarryingServices} alt="" />
        </div>
        <div className="our_Services_right_text_div">
          <h2>Drum Truck Carrying Services</h2>
          <p>
            Reliable bulk transportation services for construction materials
            using drum trucks.
          </p>
        </div>
      </div>

      {/* <p>
        Home, (AboutUs - Mission and vission, Company over view, why chose
        us,team), (OurServices - ),(Projects - ),(Glarry - ),Contact
      </p> */}
    </div>
  );
};

export default OurServices;
