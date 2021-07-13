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
} from "./ContactDescElements";

import { Container } from "../../GlobalStyles";
import img1 from "../Assets/imgs/Contact/PartnerTengahKanan.png";
import img2 from "../Assets/imgs/New/NewPartnerBawahLeft.png";
import img3 from "../Assets/imgs/Contact/PartnerBawahKanan.png";

function ConceptDesc({ lineHeading, heading, description }) {
  return (
    <>
      <EventDescSection>
        <Container>
          <KananKiri>
            <Row>
              <RowChild>
                <Judul>General</Judul>
                <ListNumber>
                  <Tipis>humasafair2022@gmail.com</Tipis>
                  <Gabung>
                    <Tebal>Nadya Fatin</Tebal>
                    <Tipis> (+6281380057919)</Tipis>
                  </Gabung>
                  <Gabung>
                    <Tebal>Gita Advenia</Tebal>
                    <Tipis> (+628569409735)</Tipis>
                  </Gabung>
                </ListNumber>
              </RowChild>
              <RowChild>
                <Judul>Media Partner</Judul>
                <ListNumber>
                  <Gabung>
                    <Tebal>Diana Tri M</Tebal>
                    <Tipis> (+6281297889246)</Tipis>
                  </Gabung>
                  <Gabung>
                    <Tebal>Amira Salsabila</Tebal>
                    <Tipis> (+62811189819)</Tipis>
                  </Gabung>
                </ListNumber>
              </RowChild>
              <RowChild>
                <Judul>Media Sponsor</Judul>
                <ListNumber>
                  <Gabung>
                    <Tebal>Gabriella Fanissi</Tebal>
                    <Tipis> (+6287888977885)</Tipis>
                  </Gabung>
                  <Gabung>
                    <Tebal>Arie Rusmayanti</Tebal>
                    <Tipis> (+628811494348)</Tipis>
                  </Gabung>
                </ListNumber>
              </RowChild>
            </Row>
            <LogoImg src={img1} alt="home.png" />
          </KananKiri>
          <KananKiri>
            <LogoImg2 src={img2} alt="home.png" />
            <LogoKanan src={img3} alt="home.png" />
          </KananKiri>
        </Container>
      </EventDescSection>
    </>
  );
}

export default ConceptDesc;
