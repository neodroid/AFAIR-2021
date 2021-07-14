import React from "react";
import Footer from "../Footer/Footer";
import Hero from "../Landing/HomeRegister/HomeRegister";
import WayoutFuture from "../Landing/WayoutFuture/WayoutFuture";
import EventUpdates from "../Landing/EventUpdates/EventUpdates";

import { HeroData } from "../Landing/Data";

const Landing = () => {
  return (
    <>
      <Hero {...HeroData} />
      <EventUpdates {...HeroData} />
      <WayoutFuture />

      <Footer />
    </>
  );
};

export default Landing;
