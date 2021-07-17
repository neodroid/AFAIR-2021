import React from "react";

import {
  Full,
  DescText,
  DescTitle,
  Judul,
  DescWrap,
  Wrapper,
  Container,
  LogoImg,
} from "./BriefElement";

import img1 from "../../Assets/imgs/CompetitionsDesc/mascots.png";

const Brief = () => {
  return (
    <>
      <Full>
        <Container>
          <Wrapper>
            <Judul>
              <LogoImg src={img1} alt="home.png" />
              <DescTitle>BRIEF</DescTitle>
            </Judul>
            <DescWrap>
              <DescText>
                The competition invites participants to create compact living
                spaces where a small group of people could have everything done
                in one space by packing their heterogeneous lifestyle
                efficiently. The design would have to face the challenge in a
                limited area of land considering human comfort and the
                effectiveness of activities. Participants are expected to
                speculate how humans themselves would live in the future and how
                the evolving technologies play a big role in supporting it.
              </DescText>
            </DescWrap>
          </Wrapper>
        </Container>
      </Full>
    </>
  );
};

export default Brief;
