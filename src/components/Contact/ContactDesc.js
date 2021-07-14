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
} from "./ContactDescElements";

import { Container } from "../../GlobalStyles";
import img1 from "../Assets/imgs/Contact/PartnerTengahKanan.png";
import img2 from "../Assets/imgs/New/NewPartnerBawahLeft.png";
import img3 from "../Assets/imgs/Contact/PartnerBawahKanan.png";

import Aos from "aos";
import "aos/dist/aos.css";

function ConceptDesc() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <EventDescSection>
        <Container>
          <KananKiri>
            <Row>
              <RowChild data-aos="fade-left">
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
              <RowChild data-aos="fade-up">
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
              <RowChild data-aos="fade-right">
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
