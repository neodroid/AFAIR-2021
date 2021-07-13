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
  ButtonWrap1,
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
                      <ButtonWrap1 target="_blank" to="register" isExternal>
                        <Button1
                        // href="https://docs.google.com/forms/d/e/1FAIpQLSexJ21YDhMEDf1H9buh44lBqkof5CU759BIkhSYVevpe31TCw/viewform"
                        // target="_blank"
                        // rel="noopener noreferrer"
                        >
                          REGISTER NOW!
                        </Button1>
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
}

export default Hero;
