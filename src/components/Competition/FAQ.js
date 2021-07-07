import React from "react";

import {
  EventDescSection,
  Row,
  RowChild,
  FAQText,
  Judul,
  FAQQuestion,
  FAQ1Img,
  FAQWrapper,
  FAQWrapper2,
  FAQ2Img,
} from "./FAQElements";

import { Container } from "../../GlobalStyles";
import imgRight from "../Assets/imgs/FAQ1.png";
import imgBottom from "../Assets/imgs/FAQ2.png";

function FAQ({ lineHeading, heading, description, img }) {
  return (
    <>
      <EventDescSection>
        <Container>
          <FAQWrapper>
            <Judul>FAQ</Judul>
            <FAQ1Img src={imgRight} alt="home.png" />
          </FAQWrapper>
          <Row>
            <RowChild>
              <FAQQuestion>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </FAQQuestion>
              <FAQText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </FAQQuestion>
              <FAQText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </FAQQuestion>
              <FAQText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </FAQQuestion>
              <FAQText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQText>
            </RowChild>
          </Row>
          <Row>
            <RowChild>
              <FAQQuestion>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </FAQQuestion>
              <FAQText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </FAQQuestion>
              <FAQText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </FAQQuestion>
              <FAQText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </FAQQuestion>
              <FAQText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQText>
            </RowChild>
          </Row>
          <FAQWrapper2>
            <FAQ2Img src={imgBottom} alt="home.png" />
          </FAQWrapper2>
        </Container>
      </EventDescSection>
    </>
  );
}

export default FAQ;
