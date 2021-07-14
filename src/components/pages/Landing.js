import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Landing/HomeRegister/HomeRegister";
import WayoutFuture from "../Landing/WayoutFuture/WayoutFuture";
import EventUpdates from "../Landing/EventUpdates/EventUpdates";
import { Carousel } from "react-bootstrap";
import Carousell from "./Carousel";
// import Card from "../Landing/Tridi";

import img1 from "../Assets/imgs/New/NewConceptRight.png";

import { HeroData } from "../Landing/Data";

const Landing = () => {
  return (
    <>
      <Navbar />
      {/* <Card /> */}
      <Hero {...HeroData} />
      <EventUpdates {...HeroData} />
      <WayoutFuture />
      {/* <Carousell /> */}
      <Footer />
    </>
  );
};

export default Landing;
