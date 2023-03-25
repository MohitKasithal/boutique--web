import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <div className="header" id="home">
        <div className="logo-container">
          <img src="ONDAY.png" className="logo" alt="onday" />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-links">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Experties">
                Experties
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#design">
                Design
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
