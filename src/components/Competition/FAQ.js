import React from "react";

import {
  EventDescSection,
  Row,
  RowChild,
  FAQText,
  Judul,
  FAQQuestion,
  Paragraph,
  ImageWrapper,
  DivLine,
  LogoImg,
} from "./FAQElements";

import { Container } from "../../GlobalStyles";

function FAQ({ lineHeading, heading, description, img }) {
  return (
    <>
      <EventDescSection>
        <Container>
          <Judul>FAQ</Judul>
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
        </Container>
      </EventDescSection>
    </>
  );
}

export default FAQ;
