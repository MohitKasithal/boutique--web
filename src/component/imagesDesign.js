import React from "react";
import data from "../images.json";
import "./imagesDesign.css";
function ImagesDesign() {
  const { images } = data;
  return (
    <>
      <div className="gallery">
        <h3>
          <b> Design Your Dream Wardrobe with Our Expert Team</b>
        </h3>
        <div className="image-gallery-container" id="design">
          {images.map((image, index) => (
            <div className="image-container" key={index}>
              <img src={image.url} alt="" className="image" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImagesDesign;
