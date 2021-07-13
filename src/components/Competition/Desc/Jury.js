import React from "react";

import {
  DescSection,
  Row,
  Full,
  LogoImg2,
  DescTitle,
  Judul,
  DescWrap,
  Wrapper,
  Container,
  LogoImg,
} from "./JuryElement";

import img1 from "../../Assets/imgs/CompetitionsDesc/mascots-2.png";
import img2 from "../../Assets/imgs/Jury.png";

const Jury = ({ lineHeading, heading, description, img }) => {
  return (
    <>
      <Full>
        <Container>
          <Wrapper>
            <Judul>
              <LogoImg src={img1} alt="home.png" />
              <DescTitle>JUDGES</DescTitle>
            </Judul>

            <LogoImg2 src={img2} alt="home.png" />
          </Wrapper>
        </Container>
      </Full>
    </>
  );
};

export default Jury;
