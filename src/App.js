import React from "react";
import "./App.css";
import Brand from "./components/brand/Brand";
import Navbar from "./components/navbar/Navbar";
import Cta from "./components/cta/Cta";
import Blog from "./containers/blog/Blog";
import Features from "./containers/features/Features";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import Possibility from "./containers/possibility/Possibility";
import WhatProject from "./containers/WhatProject/WhatProject";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatProject />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
