import React from "react";
import "./Container.css";
function Container() {
  return (
    <>
      <div className="container">
        <div className="con-in">
          <div className="text-container">
            <h1 className="onday">
              <span>O</span>
              <span>n</span>
              <span>D</span>
              <span>a</span>
              <span>y</span>
            </h1>

            <div className="caption">
              <h4>BOUTIQUE STUDIO</h4>
            </div>
          </div>
          <div className="btn">
            <button>
              <a href="#Experties">Explore</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
