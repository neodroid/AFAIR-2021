import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Competition/HomeRegister";
import NavbarBawah from "../Competition/NavbarBawah";
import Desc from "../Competition/CompetitionDesc";
import Register from "../Competition/RegisterNowButton";
import FAQ from "../Competition/FAQ";

import { HeroData } from "../Landing/Data";

const Competition = () => {
  return (
    <>
      <Navbar />
      <Hero {...HeroData} />
      <NavbarBawah />
      <Desc />
      <Register />
      <FAQ />

      <Footer />
    </>
  );
};

export default Competition;
