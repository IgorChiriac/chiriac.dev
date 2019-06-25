import React from "react";

const Home = () => (
  <div id="home" className="home-area wave-area">
    <div className="water-effect" />
    <div className="container h-100">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-12 col-md-8 col-lg-8 home-content text-center">
          <h5 className="greet">
            Hello, my name is <strong>Igor Chiriac</strong>
          </h5>
          <h1 className="skills cd-headline letters scale">
            <span>I'm a FullStack Developer</span>
          </h1>
          <p className="description">
            I'm a Full-Stack Web Developer with extensive experience for over 8
            years. My expertise is to develop Websites, Progressive Web Apps ,
            Mobile Applications and many more...
          </p>
          {/*<div className="button-area">*/}
          {/*<a className="btn scroll" href="#portfolio">*/}
          {/*Portfolio*/}
          {/*</a>*/}
          {/*<a className="btn scroll button-scheme" href="#quote">*/}
          {/*Hire me*/}
          {/*</a>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  </div>
);

export default Home;
