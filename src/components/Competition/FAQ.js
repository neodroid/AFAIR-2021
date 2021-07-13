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
                Is the competition available for oversea students?
              </FAQQuestion>
              <FAQText>
                Definitely! Our competition can be participated by architecture
                students all over the world.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>Will there be a presentation session?</FAQQuestion>
              <FAQText>
                There will be a presentation session for the 5 finalists of the
                competition.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>What is the language used for our work?</FAQQuestion>
              <FAQText>
                Please kindly use english as the language for your contents.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Can we submit a work from another competition?
              </FAQQuestion>
              <FAQText>
                No, you are not allowed to submit an already published work.
              </FAQText>
            </RowChild>
          </Row>
          <Row>
            <RowChild>
              <FAQQuestion>
                Can I participate with my friends from other major?
              </FAQQuestion>
              <FAQText>
                Yes you can. It is not a problem as long as one of the member of
                the group is studying in architecture major.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>When will the winner be announced?</FAQQuestion>
              <FAQText>
                The winner of the competition will be announce during our main
                event on January 2022.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>What if we submit our work late?</FAQQuestion>
              <FAQText>
                There will be a penalty for those who are late for the
                submission. Their points will be reduced depending on how late
                their submission is.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Is there any other requirements for the site?
              </FAQQuestion>
              <FAQText>
                Nope! Feel free to explore the possibilities from the brief we
                have provided!
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
