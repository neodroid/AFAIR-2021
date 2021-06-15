import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Landing/HomeRegister/HomeRegister";

import { HeroData } from "../Landing/Data";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero {...HeroData} />
      <Footer />
    </>
  );
};

export default Landing;
