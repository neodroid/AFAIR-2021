import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  FooterSection,
  Container,
  FooterText,
  SideWrap,
  Socmed,
  LogoSocmed,
  NamaSocmed,
  FooterDiv,
  FooterChildDiv,
  FooterTextBold,
  BigWrap,
} from "./FooterElements";

import Insta from "../Assets/imgs/Socmed/Insta.png";
import Facebook from "../Assets/imgs/Socmed/Facebook.png";
import Line from "../Assets/imgs/Socmed/Line.png";
import Linkedin from "../Assets/imgs/Socmed/Linkedin.png";
import Tiktok from "../Assets/imgs/Socmed/Tiktok.png";
import Twitter from "../Assets/imgs/Socmed/Twitter.png";

const Footer = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <FooterSection id="/contact">
          <Container>
            <BigWrap>
              <FooterDiv>
                <FooterChildDiv>
                  <FooterTextBold>CONTACT PERSON</FooterTextBold>

                  <FooterText>humasafair2022@gmail.com</FooterText>
                  <FooterText>Nadya Fatin (+6281380057919)</FooterText>
                  <FooterText>Gita Advenia (+628569409735)</FooterText>
                </FooterChildDiv>
                <FooterChildDiv>
                  <FooterTextBold>MEDIA PARTNER</FooterTextBold>

                  <FooterText></FooterText>
                  <FooterText>Diana Tri M (+6281297889246)</FooterText>
                  <FooterText>Amira Salsabila (+62811189819)</FooterText>
                </FooterChildDiv>
              </FooterDiv>
              <FooterDiv>
                <FooterChildDiv>
                  <FooterTextBold>CONNECT WITH US!</FooterTextBold>
                  <FooterDiv>
                    <SideWrap>
                      <Socmed>
                        <LogoSocmed src={Insta} />
                        <NamaSocmed>@afairui</NamaSocmed>
                      </Socmed>
                      <Socmed>
                        <LogoSocmed src={Twitter} />
                        <NamaSocmed>@afairui</NamaSocmed>
                      </Socmed>
                      <Socmed>
                        <LogoSocmed src={Line} />
                        <NamaSocmed>bit.ly/afair2022</NamaSocmed>
                      </Socmed>
                    </SideWrap>
                    <SideWrap>
                      <Socmed>
                        <LogoSocmed src={Facebook} />
                        <NamaSocmed>facebook.com/afairui</NamaSocmed>
                      </Socmed>
                      <Socmed>
                        <LogoSocmed src={Tiktok} />
                        <NamaSocmed>Afairui</NamaSocmed>
                      </Socmed>
                      <Socmed>
                        <LogoSocmed src={Linkedin} />
                        <NamaSocmed>AFAIR UI 2022</NamaSocmed>
                      </Socmed>
                    </SideWrap>
                  </FooterDiv>
                </FooterChildDiv>
              </FooterDiv>
            </BigWrap>
          </Container>
        </FooterSection>
      </IconContext.Provider>
    </>
  );
};

export default Footer;
