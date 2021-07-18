import React, { useEffect } from "react";

import {
  HeroSection,
  Row,
  Column,
  TextWrapper,
  Line,
  Heading,
  Column2,
  ContentWrap,
  ButtonWrap1,
  LogoImg,
  Button1,
  Button2,
  ButtonWrap,
  Desc1,
  ButtonWrap2,
} from "./HeroElements";

import { Container } from "../../GlobalStyles";
import img1 from "../Assets/imgs/CompetitionImg.png";

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
const trans6 = (x, y) => `translate3d(${x / 19 + 520}px,${y / 100 - 340}px,0)`;

const Hero = ({ lineHeading, heading, img }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <HeroSection
        data-aos="fade-up"
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
                    <Desc1>HOW WE LIVE IN THE FUTURE</Desc1>
                  </div>
                  <div>
                    <ButtonWrap>
                      <ButtonWrap1 target="_blank" to="register" isExternal>
                        <Button1>REGISTER NOW!</Button1>
                      </ButtonWrap1>
                      <ButtonWrap2
                        target="_blank"
                        href="https://drive.google.com/u/0/uc?id=12LfyaSDO3rShEC6sqg_8bo97_3rAeOLo&export=download"
                        isExternal
                      >
                        <Button2>TOR</Button2>
                      </ButtonWrap2>
                    </ButtonWrap>
                  </div>
                </TextWrapper>
              </Column>
              <Column2>
                <animated.div
                  class="Competition1"
                  style={{ transform: props.xy.interpolate(trans1) }}
                />
                <animated.div
                  class="Competition2"
                  style={{ transform: props.xy.interpolate(trans2) }}
                />
                <animated.div
                  class="Competition3"
                  style={{ transform: props.xy.interpolate(trans3) }}
                />
                <animated.div
                  class="Competition4"
                  style={{ transform: props.xy.interpolate(trans5) }}
                />
                <animated.div
                  class="Competition5"
                  style={{ transform: props.xy.interpolate(trans4) }}
                />
                <animated.div
                  class="Competition6"
                  style={{ transform: props.xy.interpolate(trans6) }}
                />
              </Column2>
            </Row>
          </ContentWrap>
        </Container>
      </HeroSection>
    </>
  );
};

export default Hero;
