import React from "react";

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

function ConceptDesc({ lineHeading, heading, description }) {
  return (
    <>
      <EventDescSection>
        <Container>
          <KananKiri>
            <Row>
              <RowChild>
                <Judul>Into</Judul>
                <ListNumber>
                  <Tipis>
                    Expressing movement or action with the result that someone
                    or something becomes enclosed or surrounded by something
                    else.
                  </Tipis>
                </ListNumber>
              </RowChild>
              <RowChild>
                <Judul>Wayout</Judul>
                <ListNumber>
                  <Tipis>
                    Wayout Regarded as extremely unconventional, unusual, or
                    avant-garde.
                  </Tipis>
                </ListNumber>
              </RowChild>
              <RowChild>
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
          {/* <KananKiri>
            <LogoImg2 src={img2} alt="home.png" />
            <LogoKanan src={img3} alt="home.png" />
          </KananKiri> */}
        </Container>
      </EventDescSection>
    </>
  );
}

export default ConceptDesc;
