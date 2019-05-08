import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import "../components/header.css";
import Home from "../views/Home";
import About from "../views/About";
import "./index.css";
import "./bootstrap.css";
import "./fontawesome.css";
import "./fontastic.css";

// Components
import Layout from "../components/Layout";
import Header from "../components/Header";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs";

const Content = styled(ParallaxLayer)`
  ${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50`};
`;

const Index = () => (
  <>
    <Layout />
    <div className="left-side-area">
      <Header />
    </div>
    <div className="right-side-area">
      <Home />
      <About />
    </div>
  </>
);

export default Index;
