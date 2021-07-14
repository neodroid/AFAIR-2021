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
const trans4 = (x, y) => `translate3d(${x / 3.5 + 200}px,${y / 3.5 - 500}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 14 + 100}px,${y / 14 - 200}px,0)`;

const EventUpdates = ({ lineHeading, heading, description, img }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <>
      <HeroSection
        to="/concept"
        id="/home"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <Container>
          <ContentWrap>
            <Row>
              <Column>
                {/* <LogoImg src={img} alt="home.png" />
                  <div>
                    <Line>EVENT</Line>
                  </div> */}
                <div>
                  <Heading>INTO THE WAYOUT FUTURE</Heading>
                </div>
              </Column>
              <Column>
                <animated.div
                  class="card13"
                  style={{ transform: props.xy.interpolate(trans1) }}
                />
                <animated.div
                  class="card23"
                  style={{ transform: props.xy.interpolate(trans2) }}
                />
                <animated.div
                  class="card33"
                  style={{ transform: props.xy.interpolate(trans3) }}
                />
                <animated.div
                  class="card43"
                  style={{ transform: props.xy.interpolate(trans5) }}
                />
                <animated.div
                  class="card53"
                  style={{ transform: props.xy.interpolate(trans4) }}
                />
              </Column>
            </Row>
            {/* <HomeImg src={img1} alt="home.png" /> */}
          </ContentWrap>
        </Container>
      </HeroSection>
    </>
  );
};

export default EventUpdates;
