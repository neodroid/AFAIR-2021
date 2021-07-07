import React from "react";

import {
  HeroSection,
  Row,
  Column,
  TextWrapper,
  Line,
  Heading,
  Paragraph,
  ImageWrapper,
  DivLine,
  LogoImg,
} from "./HeroElements";

import { Container } from "../../GlobalStyles";

function HeroConcept({ lineHeading, heading, description, img }) {
  return (
    <>
      <HeroSection id="/home">
        <Container>
          <Row>
            <Column>
              <TextWrapper>
                <LogoImg src={img} alt="home.png" />
                <div>
                  <Line>AFAIR 2022</Line>
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

          <Heading>INTO THE WAYOUT FUTURE</Heading>
        </Container>
      </HeroSection>
    </>
  );
}

export default HeroConcept;
