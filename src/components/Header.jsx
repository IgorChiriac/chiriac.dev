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
            </ul>
          </div>
        </div>
        <ul className="header-social-icons">
          <li>
            <a href="https://twitter.com/Igor_Chiriac" target="_blank" rel="noopener noreferrer" title="Twitter">
              {" "}
              <i className="fab fa-twitter" />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/igor-chiriac/"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              {" "}
              <i className="fab fa-linkedin" />{" "}
            </a>
          </li>
          <li>
            <a href="https://github.com/IgorChiriac" target="_blank" rel="noopener noreferrer" title="Github">
              {" "}
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
        <h6 className="copy-txt">Copyright © 2019 Igor Chiriac</h6>
      </nav>
    </div>
  </header>
);

export default Header;
