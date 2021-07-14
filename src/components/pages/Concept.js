import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Concept/HeroConcept";
import Desc from "../Concept/ConceptDesc";

import { HeroData } from "../Landing/Data";

const Concept = () => {
  return (
    <>
      <Hero {...HeroData} />
      <Desc />
      <Footer />
    </>
  );
};

export default Concept;
