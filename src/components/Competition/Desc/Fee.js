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
} from "./FeeElement";

import img1 from "../../Assets/imgs/CompetitionsDesc/mascots-3.png";
import img2 from "../../Assets/imgs/Fee.png";

const Fee = ({ lineHeading, heading, description, img }) => {
  return (
    <>
      <Full>
        <Container>
          <Container>
            <Wrapper>
              <Judul>
                <LogoImg src={img1} alt="home.png" />
                <DescTitle>FEE</DescTitle>
              </Judul>
              <DescWrap>
                <LogoImg2 src={img2} alt="home.png" />
              </DescWrap>
            </Wrapper>
          </Container>
        </Container>
      </Full>
    </>
  );
};

export default Fee;
