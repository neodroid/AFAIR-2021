import React from "react";

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
} from "./HeroElements";

import { Container } from "../../GlobalStyles";

import img2 from "../Assets/imgs/ConceptHome.png";

function HeroConcept({ lineHeading, heading, description, img }) {
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
                <LogoImg src={img} alt="home.png" />
                <div>
                  <Line>Coming Soon :</Line>
                </div>

                <div>{/* <Paragraph>{description}</Paragraph> */}</div>
              </TextWrapper>
            </Column>
            <Column>
              {/* <ImageWrapper>
                <Img src={img} alt="home.png" />
              </ImageWrapper> */}
            </Column>
          </Row>
          <DivLine>
            <Heading>WEBINAR / WORKSHOP </Heading>
            <Line>AFAIR</Line>
          </DivLine>
        </Container>
      </HeroSection>
    </>
  );
}

export default HeroConcept;
