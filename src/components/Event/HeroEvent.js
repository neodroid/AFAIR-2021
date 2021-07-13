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
  RightImg,
  LogoImg,
} from "./HeroElements";

import { Container } from "../../GlobalStyles";
import img3 from "../Assets/imgs/EventRight.png";

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
              <ImageWrapper>
                <RightImg src={img3} alt="home.png" />
              </ImageWrapper>
            </Column>
          </Row>

          <Heading>INTO THE WAYOUT FUTURE</Heading>
          <TextWrapper>
            <div>
              <Paragraph>
                In the future, life will change. Starting from the needs,
                lifestyle, and so on. Some needs will require spatial attention.
                Therefore, we want to explore how Architecture can fulfill these
                needs as an instrument in dealing with these changes in the
                future.
              </Paragraph>
            </div>
          </TextWrapper>
        </Container>
      </HeroSection>
    </>
  );
}

export default HeroConcept;
