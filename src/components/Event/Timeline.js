import React from "react";

import {
  EventDescSection,
  IMGWrap,
  IMG2,
  IMG1,
  Line,
  Heading,
  Paragraph,
  ImageWrapper,
  DivLine,
  LogoImg,
} from "./TimelineElement";

import { Container } from "../../GlobalStyles";
import img from "../Assets/imgs/TimelineFix.png";
import imgRight from "../Assets/imgs/EventBawahKanan.png";
import imgLeft from "../Assets/imgs/ConceptBottomRight.png";

function Timeline({ lineHeading, heading, description }) {
  return (
    <>
      <EventDescSection>
        <Container>
          <Line>KEEP AN EYE FOR OUR UPCOMING EVENTS!</Line>
          <LogoImg src={img} alt="home.png" />
          <IMGWrap>
            <IMG2 src={imgRight} alt="home.png" />
            <IMG1 src={imgLeft} alt="home.png" />
          </IMGWrap>
        </Container>
      </EventDescSection>
    </>
  );
}

export default Timeline;
