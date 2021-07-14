import React, { useEffect } from "react";

import {
  EventDescSection,
  IMGWrap,
  IMG2,
  IMG1,
  Line,
  LogoImg,
} from "./TimelineElement";

import { Container } from "../../GlobalStyles";
import img from "../Assets/imgs/TimelineFix.png";
import imgRight from "../Assets/imgs/EventBawahKanan.png";
import imgLeft from "../Assets/imgs/ConceptBottomRight.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <EventDescSection>
        <Container>
          <Line data-aos="fade-up">KEEP AN EYE FOR OUR UPCOMING EVENTS!</Line>
          <div data-aos="fade-up">
            <LogoImg src={img} alt="home.png" />
          </div>
          <IMGWrap>
            <IMG2 src={imgRight} alt="home.png" />
            <IMG1 src={imgLeft} alt="home.png" />
          </IMGWrap>
        </Container>
      </EventDescSection>
    </>
  );
};

export default Timeline;
