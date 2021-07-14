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
import { useSpring, animated } from "react-spring";
import "./styles.css"; // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 + 100}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 14 + 100}px,${y / 14 - 200}px,0)`;

function Hero({ lineHeading, heading, description, img }) {
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
            {/* <HomeImg src={img1} alt="home.png" /> */}
          </ContentWrap>
          <div class="container">
            <animated.div
              class="card1"
              style={{ transform: props.xy.interpolate(trans1) }}
            />
            <animated.div
              class="card2"
              style={{ transform: props.xy.interpolate(trans2) }}
            />
            <animated.div
              class="card3"
              style={{ transform: props.xy.interpolate(trans3) }}
            />
            <animated.div
              class="card5"
              style={{ transform: props.xy.interpolate(trans5) }}
            />
            <animated.div
              class="card4"
              style={{ transform: props.xy.interpolate(trans4) }}
            />
            {/* <animated.div
              class="card5"
              style={{ transform: props.xy.interpolate(trans5) }}
            /> */}
          </div>
        </Container>
      </HeroSection>
    </>
  );
}

export default Hero;
