import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Contact/HeroContact";
import Desc from "../Contact/ContactDesc";

import { HeroData } from "../Landing/Data";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero {...HeroData} />
      <Desc />
      <Footer />
    </>
  );
};

export default Contact;
