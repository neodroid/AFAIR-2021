import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Event/HeroEvent";
import Timeline from "../Event/Timeline";

import { HeroData } from "../Landing/Data";

const Event = () => {
  return (
    <>
      <Navbar />
      <Hero {...HeroData} />
      <Timeline />
      <Footer />
    </>
  );
};

export default Event;
