import React from "react";
import avatar from "../images/avatar.jpg";

const Header = () => (
  <header className="header-left-area">
    <div className="container">
      <nav className="navbar">
        <div className="header-content">
          <div className="image-item">
            <div className="status active" />
            <img src={avatar} alt="" />
          </div>
          <div className="caption-area">
            <h5 className="name">Igor Chiriac</h5>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#side-menu"
          aria-controls="side-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <span className="icon-th" />
          </span>
        </button>
        <div className="menu-main-area align-items-center">
          <div className="collapse navbar-collapse" id="side-menu">
            <ul id="menu_scroll" className="navbar-nav side-menu">
              <li>
                <a href="#home" className="scroll active">
                  <span className="icon-home-house-streamline" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="scroll">
                  <span className="icon-map-streamline-user" /> About
                </a>
              </li>
              <li>
                <a href="#experience" className="scroll">
                  <span className="icon-dashboard-speed-streamline" />{" "}
                  Experience
                </a>
              </li>
              <li>
                <a href="#services" className="scroll">
                  <span className="icon-settings-streamline-1" /> Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="scroll">
                  <span className="icon-streamline-suitcase-travel" /> Portfolio
                </a>
              </li>
              <li>
                <a href="#clients" className="scroll">
                  <span className="icon-speech-streamline-talk-user" /> Clients
                </a>
              </li>
              <li>
                <a href="#blog" className="scroll">
                  <span className="icon-design-graphic-tablet-streamline-tablet" />{" "}
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="header-social-icons">
          <li>
            <a href="#0" target="_blank" title="Facebook">
              {" "}
              <i className="fab fa-facebook-f" />{" "}
            </a>
          </li>
          <li>
            <a href="#0" target="_blank" title="Twitter">
              {" "}
              <i className="fab fa-twitter" />{" "}
            </a>
          </li>
          <li>
            <a href="#0" target="_blank" title="Instagram">
              {" "}
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#0" target="_blank" title="Behance">
              {" "}
              <i className="fab fa-behance" />{" "}
            </a>
          </li>
        </ul>
        <h6 className="copy-txt">Copyright © 2018 Resume</h6>
      </nav>
    </div>
  </header>
);

export default Header;
