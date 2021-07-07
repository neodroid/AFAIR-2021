import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Event/HeroEvent";
import Desc from "../Event/EventDesc";

import { HeroData } from "../Landing/Data";

const Event = () => {
  return (
    <>
      <Navbar />
      <Hero {...HeroData} />
      {/* <Desc /> */}
      <Footer />
    </>
  );
};

export default Event;
