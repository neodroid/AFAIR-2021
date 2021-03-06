import React from "react";

import {
  HeroSection,
  Row,
  Column,
  Column2,
  Line,
  Heading,
  Paragraph,
  HomeImg,
  ContentWrap,
  LogoImg,
  Heading2,
} from "./HeroElements";

import { Container } from "../../../GlobalStyles";
import img1 from "../../Assets/imgs/Home2.png";
import { useSpring, animated } from "react-spring";
import "./styles.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10 + 200}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 + 100}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 + 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5 + 200}px,${y / 3.5 + 30}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 14 + 1000}px,${y / 100 - 300}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 5 + 100}px,${y / 5 - 40}px,0)`;

const EventUpdates = ({ lineHeading, heading, description, img }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <>
      <HeroSection
        to="/event"
        id="/home"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <Container>
          <ContentWrap>
            <Row>
              <Column2>
                <animated.div
                  class="card12"
                  style={{ transform: props.xy.interpolate(trans1) }}
                />
                <animated.div
                  class="card24"
                  style={{ transform: props.xy.interpolate(trans2) }}
                />
                <animated.div
                  class="card34"
                  style={{ transform: props.xy.interpolate(trans3) }}
                />
                <animated.div
                  class="card42"
                  style={{ transform: props.xy.interpolate(trans5) }}
                />
                <animated.div
                  class="card44"
                  style={{ transform: props.xy.interpolate(trans4) }}
                />
                <animated.div
                  class="card54"
                  style={{ transform: props.xy.interpolate(trans6) }}
                />
              </Column2>
              <Column>
                {/* <TextWrapper> */}
                <LogoImg src={img} alt="home.png" />
                <div>
                  <Line>EVENT</Line>
                </div>
                <div>
                  <Heading>UPDATES</Heading>
                </div>
                {/* </TextWrapper> */}
              </Column>
              <Column></Column>
            </Row>
          </ContentWrap>
        </Container>
      </HeroSection>
    </>
  );
};

export default EventUpdates;
