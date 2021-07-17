import React, { useEffect } from "react";

import {
  EventDescSection,
  Row,
  RowChild,
  DescText,
  Judul,
  ListNumber,
  Tipis,
  Gabung,
  Tebal,
  LogoImg,
  LogoImg2,
  KananKiri,
  LogoKanan,
} from "./DescElements";

import { Container } from "../../GlobalStyles";
import img1 from "../Assets/imgs/New/NewConceptRight.png";

import Aos from "aos";
import "aos/dist/aos.css";

const ConceptDesc = ({ lineHeading, heading, description }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <EventDescSection>
        <Container>
          <KananKiri>
            <Row>
              <RowChild data-aos="fade-left">
                <Judul>Into</Judul>
                <ListNumber>
                  <Tipis>
                    Expressing movement or action with the result that someone
                    or something becomes enclosed or surrounded by something
                    else.
                  </Tipis>
                </ListNumber>
              </RowChild>
              <RowChild data-aos="fade-up">
                <Judul>Wayout</Judul>
                <ListNumber>
                  <Tipis>
                    Wayout Regarded as extremely unconventional, unusual, or
                    avant-garde.
                  </Tipis>
                </ListNumber>
              </RowChild>
              <RowChild data-aos="fade-right">
                <Judul>Future</Judul>
                <ListNumber>
                  <Tipis>
                    The time or a period of time following the moment of
                    speaking or writing, time thinks as still to come.
                  </Tipis>
                </ListNumber>
              </RowChild>
            </Row>
            <LogoImg src={img1} alt="home.png" />
          </KananKiri>
        </Container>
      </EventDescSection>
    </>
  );
};

export default ConceptDesc;
