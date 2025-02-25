import React from "react";
import "./Gallery.css";

import ATIProject from "../../accets/gallery/ATI Project.jpg";
import ATIProject2 from "../../accets/gallery/ATI Project2.jpg";
import ATIProject3 from "../../accets/gallery/ATI Project3.jpg";

import personOne from "../../accets/gallery/personOne.jpg";
import personTwo from "../../accets/gallery/personTwo.jpg";
import personThree from "../../accets/gallery/personThree.jpg";
import pesonFour from "../../accets/gallery/personFour.jpg";
import personFive from "../../accets/gallery/personFive.jpg";

import photoOne from "../../accets/gallery/photoOne.jpg";
import photoTwo from "../../accets/gallery/photoTwo.jpg";
import photoThree from "../../accets/gallery/photoThree.jpg";
import photoFour from "../../accets/gallery/photoFour.jpg";
import photoFive from "../../accets/gallery/photoFive.jpg";
import photoSix from "../../accets/gallery/photoSix.jpg";
import photoSaven from "../../accets/gallery/photoSaven.jpg";

const Gallery = () => {
  return (
    <div className="gallery_parent_div">
      <div className="gallery_grid_div">
        <div>
          <img src={ATIProject} alt="" />
        </div>

        <div>
          <img src={ATIProject2} alt="" />
        </div>

        <div>
          <img src={ATIProject3} alt="" />
        </div>

        <div>
          <img src={personOne} alt="" />
        </div>

        <div>
          <img src={personTwo} alt="" />
        </div>

        <div>
          <img src={personThree} alt="" />
        </div>

        <div>
          <img src={pesonFour} alt="" />
        </div>

        <div>
          <img src={personFive} alt="" />
        </div>

        <div>
          <img src={photoOne} alt="" />
        </div>

        <div>
          <img src={photoTwo} alt="" />
        </div>

        <div>
          <img src={photoThree} alt="" />
        </div>

        <div>
          <img src={photoFour} alt="" />
        </div>

        <div>
          <img src={photoFive} alt="" />
        </div>

        <div>
          <img src={photoSix} alt="" />
        </div>

        <div>
          <img src={photoSaven} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
