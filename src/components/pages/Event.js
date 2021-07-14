import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Event/HeroEvent";
import Timeline from "../Event/Timeline";
import Desc from "../Event/Desc";

import { HeroData } from "../Landing/Data";

const Event = () => {
  return (
    <>
      <Hero {...HeroData} />
      <Desc />
      <Timeline />
      <Footer />
    </>
  );
};

export default Event;
