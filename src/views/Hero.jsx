import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import { colors } from "../../tailwind";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import { UpDown, UpDownWide } from "../styles/animations";
import SVG from "../components/SVG";

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`;

const Hero = ({ children, offset }) => (
  <Content
    id="home"
    className="home-area wave-area"
    offset={offset}
    speed={0.4}
  >
    <div className="water-effect" />
    <div className="container h-100">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-12 col-md-8 col-lg-8 home-content text-center">
          {children}
          <p className="description">
            I'm a Full-Stack Web Developer with extensive experience for over 5
            years. My expertise is to create Websites, Progressive Web Apps,
            Single Page Applications and many more...
          </p>
          <div className="button-area">
            <a className="btn scroll button-scheme" href="#quote">
              Hire me
            </a>
          </div>
        </div>
      </div>
    </div>
  </Content>
);

export default Hero;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
};
