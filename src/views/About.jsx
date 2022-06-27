import React from "react";
import AboutImage from "../images/about-image.png";

const About = () => (
  <div id="about" className="single-section about-area">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <div className="about-img">
            {/* <img src={AboutImage} alt="" /> */}
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="about-content">
            <div className="section-heading">
              <h2 className="section-title">About Me</h2>
              <h6 className="about-role">I am a Full-Stack Web Developer</h6>
            </div>
            <p>
              Experienced Frontend Developer with a demonstrated history of working in the information technology and
              services industry. Skilled in Javascript, NodeJs, React, Typescript, and GraphQL. Strong engineering
              professional with a Master of Computer Applications (MCA) focused in Distributed Systems in Internet from
              Johannes Kepler Universität Linz.
            </p>
            <hr />
            <ul className="list-inline about-info">
              <li>
                <span>Name:</span>
                <p>Igor chiriac</p>
              </li>
              <li>
                <span>Email:</span>
                <p>
                  <a href="mailto:igorchiriac@outlook.com">igorchiriac[@]outlook.com</a>
                </p>
              </li>
              <li>
                <span>Age:</span>
                <p>{new Date().getFullYear() - 1991}</p>
              </li>
              <li>
                <span>From:</span>
                <p>Cantemir, Republic of Moldova</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
