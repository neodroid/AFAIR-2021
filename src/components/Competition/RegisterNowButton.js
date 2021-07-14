import React from "react";

import {
  RegisterSection,
  PaymentWrap,
  TitlePay,
  RekWrap,
  Name,
  Num,
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
          {/* <ContentWrap>asdasdsa</ContentWrap> */}
          <PaymentWrap>
            <TitlePay>
              Registration fees can be transferred to the account
            </TitlePay>
            <RekWrap>
              <Name>Domestic :</Name>
              <Num>6755101358 (BCA - ADE SEVRITA GRACE)</Num>
            </RekWrap>
            <RekWrap>
              <Name>Overseas :</Name>
              <Num>
                paypal.me/chalistangeline (PayPal - CHALISTA ANGELINE) CENAIDJA
                (SWIFT BCA)
              </Num>
            </RekWrap>
          </PaymentWrap>
          <ButtonWrap>
            <Button1>REGISTER NOW</Button1>
          </ButtonWrap>
        </Container>
      </RegisterSection>
    </>
  );
}

export default RegisterButton;
