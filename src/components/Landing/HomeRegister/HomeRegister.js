import React from "react";

import {
  HeroSection,
  Row,
  Column,
  TextWrapper,
  Line,
  Heading,
  Paragraph,
  HomeImg,
  ContentWrap,
  LogoImg,
} from "./HeroElements";

import { Container } from "../../../GlobalStyles";
import img1 from "../../Assets/imgs/Home1.png";

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
            <HomeImg src={img1} alt="home.png" />
          </ContentWrap>
        </Container>
      </HeroSection>
    </>
  );
}

export default Hero;
