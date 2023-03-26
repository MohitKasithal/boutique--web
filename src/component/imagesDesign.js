import React from "react";
import "./imagesDesign.css";
import g1 from "../images/g-1.jpeg";
import g2 from "../images/g-2.jpeg";
import g3 from "../images/g-3.jpeg";
import g4 from "../images/g-4.jpeg";
import g5 from "../images/g-5.jpeg";
import g6 from "../images/g-6.jpeg";
import g7 from "../images/g-7.jpeg";
import g8 from "../images/g-8.jpeg";
import g9 from "../images/g-9.jpeg";
import g10 from "../images/g-10.jpeg";
import g11 from "../images/g-11.jpeg";
import g12 from "../images/g-12.jpeg";
import g13 from "../images/g-13.jpeg";
import g14 from "../images/g-14.jpeg";
import g15 from "../images/g-15.jpeg";
import g16 from "../images/g-16.jpeg";
import g17 from "../images/g-17.jpeg";
import g18 from "../images/g-18.webp";
import g19 from "../images/g-19.webp";
import g20 from "../images/g-20.jpg";

function ImagesDesign() {
  const jsonData = [
    {
      url: g1,
    },
    {
      url: g2,
    },
    {
      url: g3,
    },
    {
      url: g4,
    },
    {
      url: g5,
    },
    {
      url: g6,
    },
    {
      url: g7,
    },
    {
      url: g8,
    },
    {
      url: g9,
    },
    {
      url: g10,
    },
    {
      url: g11,
    },
    {
      url: g12,
    },
    {
      url: g13,
    },
    {
      url: g14,
    },
    {
      url: g15,
    },
    {
      url: g16,
    },
    {
      url: g17,
    },
    {
      url: g18,
    },
    {
      url: g19,
    },
    {
      url: g20,
    },
  ];

  return (
    <>
      <div className="gallery">
        <h3>
          <b> Design Your Dream Wardrobe with Our Expert Team</b>
        </h3>
        <div className="image-gallery-container" id="design">
          {jsonData.map((item, index) => (
            <div className="image-container" key={index}>
              <img src={item.url} alt="" className="image" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImagesDesign;
