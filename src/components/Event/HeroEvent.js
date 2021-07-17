import React, { useEffect } from "react";

import {
  HeroSection,
  Row,
  Column,
  TextWrapper,
  Line,
  Heading,
  Paragraph,
  Column2,
  RightImg,
  LogoImg,
} from "./HeroElements";

import { Container } from "../../GlobalStyles";
import { useSpring, animated } from "react-spring";
import "./styles.css";

import Aos from "aos";
import "aos/dist/aos.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10 - 200}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 + 100}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5 + 200}px,${y / 3.5 + 30}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 14 - 500}px,${y / 100 - 300}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 5 + 100}px,${y / 5 - 40}px,0)`;

const HeroConcept = ({ img }) => {
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
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <Container>
          <Row>
            <Column>
              <TextWrapper data-aos="fade-up">
                <LogoImg src={img} alt="home.png" />
                <div>
                  <Line>AFAIR 2022</Line>
                </div>
              </TextWrapper>
            </Column>
            <Column2>
              <animated.div
                class="Concept1"
                style={{ transform: props.xy.interpolate(trans1) }}
              />
              <animated.div
                class="Concept2"
                style={{ transform: props.xy.interpolate(trans2) }}
              />
              <animated.div
                class="Concept3"
                style={{ transform: props.xy.interpolate(trans3) }}
              />
              <animated.div
                class="Concept4"
                style={{ transform: props.xy.interpolate(trans5) }}
              />
              <animated.div
                class="Concept5"
                style={{ transform: props.xy.interpolate(trans4) }}
              />
              <animated.div
                class="Concept6"
                style={{ transform: props.xy.interpolate(trans6) }}
              />
            </Column2>
          </Row>

          <Heading data-aos="fade-up">INTO THE WAYOUT FUTURE</Heading>
          <TextWrapper>
            <div>
              <Paragraph data-aos="fade-up">
                In the future, life will change. Starting from the needs,
                lifestyle, and so on. Some needs will require spatial attention.
                Therefore, we want to explore how Architecture can fulfill these
                needs as an instrument in dealing with these changes in the
                future.
              </Paragraph>
            </div>
          </TextWrapper>
        </Container>
      </HeroSection>
    </>
  );
};

export default HeroConcept;
