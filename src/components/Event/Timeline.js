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
import img from "../Assets/imgs/Timeline.png";
import imgRight from "../Assets/imgs/EventBawahKanan.png";
import imgLeft from "../Assets/imgs/EventBawahKiri.png";

function Timeline({ lineHeading, heading, description }) {
  return (
    <>
      <EventDescSection>
        <Container>
          <LogoImg src={img} alt="home.png" />
          <IMGWrap>
            <IMG1 src={imgLeft} alt="home.png" />
            <IMG2 src={imgRight} alt="home.png" />
          </IMGWrap>
        </Container>
      </EventDescSection>
    </>
  );
}

export default Timeline;
