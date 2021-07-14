import React, { useEffect } from "react";

import {
  HeroSection,
  Row,
  Column,
  TextWrapper,
  Line,
  Heading,
  HomeImg,
  ContentWrap,
  ButtonWrap1,
  LogoImg,
  Button1,
  Button2,
  ButtonWrap,
} from "./HeroElements";

import { Container } from "../../GlobalStyles";
import img1 from "../Assets/imgs/CompetitionImg.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Hero = ({ lineHeading, heading, description, img }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <HeroSection id="/home">
        <Container>
          <ContentWrap>
            <Row data-aos="fade-up">
              <Column>
                <TextWrapper>
                  <LogoImg src={img} alt="home.png" />
                  <div>
                    <Line>{lineHeading}</Line>
                  </div>
                  <div>
                    <Heading>{heading}</Heading>
                  </div>
                  <div>
                    <ButtonWrap>
                      <ButtonWrap1 target="_blank" to="register" isExternal>
                        <Button1>REGISTER NOW!</Button1>
                      </ButtonWrap1>
                      <Button2>BRIEF</Button2>
                    </ButtonWrap>
                  </div>
                </TextWrapper>
              </Column>
            </Row>
            <HomeImg src={img1} alt="home.png" />
          </ContentWrap>
        </Container>
      </HeroSection>
    </>
  );
};

export default Hero;
