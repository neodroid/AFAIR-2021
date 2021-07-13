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
  RightImg,
} from "./HeroElements";

import { Container } from "../../GlobalStyles";

import img2 from "../Assets/imgs/Contact/PartnerAtasKiri.png";
import img3 from "../Assets/imgs/Contact/PartnerAtasKanan.png";

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
                  <Line>PARTNERSHIP</Line>
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
          <DivLine>
            <Heading>
              We are open to anyone who is willing to support us especially as a
              sponsor or as media partner to further expand our vision to bigger
              markets. For inquiries, feel free to contact us through:
            </Heading>
          </DivLine>
        </Container>
      </HeroSection>
    </>
  );
}

export default HeroConcept;
