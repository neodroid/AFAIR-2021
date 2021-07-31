import React, { useEffect } from "react";

import {
  HeroSection,
  Row,
  Column,
  TextWrapper,
  Line,
  Heading,
  Column2,
  ImageWrapper,
  DivLine,
  LogoImg,
  RightImg,
  ButtonWrap1,
  Button1,
} from "./HeroElements";

import { Container } from "../../GlobalStyles";

import img2 from "../Assets/imgs/New/NewEventLeft.png";
import img3 from "../Assets/imgs/New/NewEventRIght.png";

import Aos from "aos";
import "aos/dist/aos.css";

import { useSpring, animated } from "react-spring";
import "./styles.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10 + 250}px,${y / 10 + 50}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 14 + 200}px,${y / 14 - 100}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5 + 200}px,${y / 3.5 + 30}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 14 + 100}px,${y / 100 - 200}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 19 - 1000}px,${y / 19 - 340}px,0)`;

const HeroConcept = ({ img }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HeroSection
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <Container>
          <Row>
            <Column>
              <TextWrapper>
                <LogoImg data-aos="fade-up" src={img} alt="home.png" />
              </TextWrapper>
            </Column>
            <Column2>
              {" "}
              <animated.div
                class="Event1"
                style={{ transform: props.xy.interpolate(trans1) }}
              />
              <animated.div
                class="Event2"
                style={{ transform: props.xy.interpolate(trans2) }}
              />
              <animated.div
                class="Event3"
                style={{ transform: props.xy.interpolate(trans3) }}
              />
              <animated.div
                class="Event4"
                style={{ transform: props.xy.interpolate(trans5) }}
              />
              <animated.div
                class="Event5"
                style={{ transform: props.xy.interpolate(trans4) }}
              />
              <animated.div
                class="Event6"
                style={{ transform: props.xy.interpolate(trans6) }}
              />
            </Column2>
          </Row>
          <DivLine data-aos="fade-up">
            <Heading>A-TALK </Heading>
            <Line>WEBINAR SERIES</Line>
          </DivLine>
          <ButtonWrap1
            data-aos="fade-up"
            target="_blank"
            to="register-A-talk"
            isExternal
          >
            <Button1>REGISTER NOW!</Button1>
          </ButtonWrap1>
        </Container>
      </HeroSection>
    </>
  );
};

export default HeroConcept;
