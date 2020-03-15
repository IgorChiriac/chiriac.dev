import React from "react";
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
