import React from "react";
import "./Experties.css";
import data from "../Data.json";

function Experties() {
  const { expertise } = data;
  return (
    <div className="experties" id="Experties">
      <h3>
        {" "}
        <b>Experience the Expertise of Our Fashion Designers</b>
      </h3>
      <div className="expertise-list">
        {expertise.map((expertise, index) => (
          <div key={index} className="expertise-item">
            <h2 className="expertise-title">: {expertise.title}</h2>
            <p className="expertise-description">{expertise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experties;
