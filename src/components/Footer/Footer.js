import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  FooterSection,
  Container,
  FooterText,
  Linksoc,
  FooterDiv,
  FooterChildDiv,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <FooterSection id="/contact">
          <Container>
            <FooterDiv>
              <FooterChildDiv>
                <FooterText>CONTACT PERSON</FooterText>

                <FooterText>humasafair2022@gmail.com</FooterText>
                <FooterText>Nadya Fatin (+6281380057919)</FooterText>
                <FooterText>Gita Advenia (+628569409735)</FooterText>
              </FooterChildDiv>
              <FooterChildDiv>
                <FooterText>MEDIA PARTNER</FooterText>

                <FooterText></FooterText>
                <FooterText>Diana Tri M (+6281297889246)</FooterText>
                <FooterText>Amira Salsabila (+62811189819)</FooterText>
              </FooterChildDiv>
            </FooterDiv>
            <FooterDiv>
              <FooterChildDiv>
                <FooterText>CONNECT WITH US!</FooterText>
                <FooterDiv>
                  <FooterChildDiv>
                    {/* <Linksoc
                      href="https://www.instagram.com/afairui/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                      @afairui
                    </Linksoc>
                    <FooterText>Amira Salsabila (+62811189819)</FooterText>
                  </FooterChildDiv>
                  <FooterChildDiv>
                    <FooterText>Diana Tri M (+6281297889246)</FooterText>
                    <FooterText>Amira Salsabila (+62811189819)</FooterText> */}
                  </FooterChildDiv>
                </FooterDiv>
              </FooterChildDiv>
            </FooterDiv>
          </Container>
        </FooterSection>
      </IconContext.Provider>
    </>
  );
};

export default Footer;

{
  /* <FooterIcons>
                        <a href='https://www.linkedin.com/company/newtab-id/' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href='https://api.whatsapp.com/send/?phone=6281395098451&text=Halo%21+nama+saya+...&app_absent=0' target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href='https://www.instagram.com/newtab.id/' target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </FooterIcons> */
}
