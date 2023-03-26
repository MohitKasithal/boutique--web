import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <div className="about-container" id="About">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are a team of passionate designers and developers dedicated to
            delivering high-quality and visually stunning products for our
            clients. Our mission is to make your ideas come to life and help you
            achieve your business goals through our expertise.
          </p>
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>
              <strong>Address:</strong> Nirankari Market, Babain, Kurukshetra,
              Haryana
            </p>
            <p>
              <strong>Mobile:</strong> 74191-74194
            </p>
            <p>
              <strong>Email:</strong> onday84@gmail.com
            </p>
            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/onday846"
                rel="noreferrer"
                target="_blank">
                onday846
              </a>
            </p>

            <p>
              <strong>facebook:</strong>

              <a
                href="https://www.facebook.com/onday"
                rel="noreferrer"
                target="_blank">
                onday
              </a>
            </p>
          </div>
          <h3 className="footer--home">
            <a href="#home">Back to home</a>
          </h3>
        </div>
      </div>
    </>
  );
}

export default About;
