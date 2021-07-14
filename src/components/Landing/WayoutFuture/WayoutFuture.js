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

import { useSpring, animated } from "react-spring";
import "./styles.css"; // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 + 100}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 14 + 100}px,${y / 14 - 200}px,0)`;

const EventUpdates = ({ lineHeading, heading, description, img }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <>
      <HeroSection
        id="/home"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
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
