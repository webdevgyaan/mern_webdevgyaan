import React from "react";
import Header from "../../components/Header";

import About from "./About";
import Intro from "./Intro";

const Home = () => {
  return (
    <div className=" p-10 bg-primary">
      <Header />
      <Intro />

      <About />
    </div>
  );
};

export default Home;
