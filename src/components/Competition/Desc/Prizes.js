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
} from "./PrizeElement";

import img1 from "../../Assets/imgs/CompetitionsDesc/mascotsPrize.png";
import img2 from "../../Assets/imgs/Prizes.png";

const Prizes = ({ lineHeading, heading, description, img }) => {
  return (
    <>
      <Full>
        <Container>
          <Wrapper>
            <Judul>
              <LogoImg src={img1} alt="home.png" />
              <DescTitle>PRIZES</DescTitle>
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

export default Prizes;
