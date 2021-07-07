import React from "react";

import {
  HeroSection,
  Row,
  Column,
  TextWrapper,
  Line,
  Heading,
  HomeImg,
  ContentWrap,
  Img,
  LogoImg,
  Button1,
  Button2,
  ButtonWrap,
} from "./HeroElements";

import { Container } from "../../GlobalStyles";
import img1 from "../Assets/imgs/CompetitionImg.png";

function Hero({ lineHeading, heading, description, img }) {
  return (
    <>
      <HeroSection id="/home">
        <Container>
          <ContentWrap>
            <Row>
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
                      <Button1>REGISTER NOW!</Button1>
                      <Button2>BRIEF</Button2>
                    </ButtonWrap>
                  </div>
                </TextWrapper>
              </Column>
              <Column>
                {/* <Button1>REGISTER</Button1>
                <Button2>Brief</Button2> */}
                {/* <ImageWrapper>
                  <Img src={img} alt="home.png" />
                </ImageWrapper> */}
              </Column>
            </Row>
            <HomeImg src={img1} alt="home.png" />
          </ContentWrap>
        </Container>
      </HeroSection>
    </>
  );
}

export default Hero;
