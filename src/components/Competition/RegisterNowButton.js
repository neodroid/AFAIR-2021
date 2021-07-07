import React from "react";

import {
  RegisterSection,
  Row,
  Column,
  TextWrapper,
  Line,
  Heading,
  ContentWrap,
  HomeImg,
  Img,
  LogoImg,
  Button1,
  Button2,
  ButtonWrap,
} from "./RegisterElements";

import { Container } from "../../GlobalStyles";
import imgRight from "../Assets/imgs/RegisterNow.png";

function RegisterButton({ lineHeading, heading, description, img }) {
  return (
    <>
      <RegisterSection id="/home">
        <Container>
          <ContentWrap>
            <HomeImg src={imgRight} alt="home.png" />
          </ContentWrap>

          <ButtonWrap>
            <Button1>REGISTER NOW</Button1>
          </ButtonWrap>
        </Container>
      </RegisterSection>
    </>
  );
}

export default RegisterButton;
