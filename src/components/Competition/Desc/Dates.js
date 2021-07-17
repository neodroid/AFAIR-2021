import React from "react";

import {
  DescSection,
  LogoImg3,
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
import img2 from "../../Assets/imgs/NewDates.png";
import img3 from "../../Assets/imgs/DatesMobile.png";

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
              <LogoImg3 src={img3} alt="home.png" />
            </DescWrap>
          </Wrapper>
        </Container>
      </Full>
    </>
  );
};

export default Dates;
