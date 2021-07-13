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
} from "./DatesElement";

import img1 from "../../Assets/imgs/CompetitionsDesc/mascots-4.png";
import img2 from "../../Assets/imgs/Dates.png";

const Dates = ({ lineHeading, heading, description, img }) => {
  return (
    <>
      <Full>
        <Container>
          <Wrapper>
            <Judul>
              <LogoImg src={img1} alt="home.png" />
              <DescTitle>DATES</DescTitle>
            </Judul>
            <DescWrap>
              <LogoImg2 src={img2} alt="home.png" />
            </DescWrap>
          </Wrapper>
        </Container>
      </Full>
    </>
  );
};

export default Dates;
