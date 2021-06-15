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
  Img,
  LogoImg,
} from "./HeroElements";

import { Container } from "../../../GlobalStyles";

function Hero({ lineHeading, heading, description, img }) {
  return (
    <>
      <HeroSection id="/home">
        <Container>
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
                  <Paragraph>{description}</Paragraph>
                </div>
              </TextWrapper>
            </Column>
            <Column>
              {/* <ImageWrapper>
                <Img src={img} alt="home.png" />
              </ImageWrapper> */}
            </Column>
          </Row>
        </Container>
      </HeroSection>
    </>
  );
}

export default Hero;
