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
  Heading2,
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
                    <Heading>COMPACT LIVING:</Heading>
                  </div>
                  <div>
                    <Heading2>HOW WE LIVE IN THE FUTURE</Heading2>
                  </div>
                  <div>
                    <Paragraph>
                      The competition invites participants to create compact
                      living spaces where a small group of people could have
                      everything done in one space by packing their
                      heterogeneous lifestyle efficiently. The design would have
                      to face the challenge in a limited area of land
                      considering human comfort and the effectiveness of
                      activities. Participants are expected to speculate how
                      humans themselves would live in the future and how the
                      evolving technologies play a big role in supporting it.
                    </Paragraph>
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
