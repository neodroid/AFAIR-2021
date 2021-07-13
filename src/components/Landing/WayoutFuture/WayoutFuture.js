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
} from "./WayoutFutureElements";

import { Container } from "../../../GlobalStyles";
import img1 from "../../Assets/imgs/Home3.png";

const EventUpdates = ({ lineHeading, heading, description, img }) => {
  return (
    <>
      <HeroSection id="/home">
        <Container>
          <ContentWrap>
            <Row>
              <Column>
                <TextWrapper>
                  {/* <LogoImg src={img} alt="home.png" />
                  <div>
                    <Line>EVENT</Line>
                  </div> */}
                  <div>
                    <Heading>INTO THE WAYOUT FUTURE</Heading>
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
};

export default EventUpdates;
