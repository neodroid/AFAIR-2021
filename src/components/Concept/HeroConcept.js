import React, { useEffect } from "react";

import {
  HeroSection,
  Row,
  Column,
  TextWrapper,
  Line,
  Heading,
  HomeImg,
  ImageWrapper,
  DivLine,
  LogoImg,
  RightImg,
} from "./HeroElements";

import { Container } from "../../GlobalStyles";

import img2 from "../Assets/imgs/New/NewEventLeft.png";
import img3 from "../Assets/imgs/New/NewEventRIght.png";

import Aos from "aos";
import "aos/dist/aos.css";

const HeroConcept = ({ lineHeading, heading, description, img }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HeroSection id="/home">
        <Container>
          <Row>
            <Column>
              <TextWrapper>
                <div>
                  <HomeImg src={img2} alt="home.png" />
                </div>
                <LogoImg data-aos="fade-up" src={img} alt="home.png" />
                <div></div>

                <div>{/* <Paragraph>{description}</Paragraph> */}</div>
              </TextWrapper>
            </Column>
            <Column>
              <ImageWrapper>
                <RightImg src={img3} alt="home.png" />
              </ImageWrapper>
            </Column>
          </Row>
          <DivLine data-aos="fade-up">
            <Heading>A-TALK </Heading>
            <Line>WEBINAR SERIES</Line>
          </DivLine>
        </Container>
      </HeroSection>
    </>
  );
};

export default HeroConcept;
