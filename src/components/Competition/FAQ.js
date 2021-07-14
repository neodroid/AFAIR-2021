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
  ContactTittle,
  ContactsWrap,
  ContactChild,
  Name,
  Data,
} from "./FAQElements";

import { Container } from "../../GlobalStyles";
import imgRight from "../Assets/imgs/FAQ1.png";
import imgBottom from "../Assets/imgs/FAQ2.png";

function FAQ() {
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
              <FAQQuestion>
                Does my project have to be on a specific site?
              </FAQQuestion>
              <FAQText>
                No, The design could be siteless if desired. Feel free to
                explore the possibilities from the brief we have provided!
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Can I submit a project that was done in a school studio?
              </FAQQuestion>
              <FAQText>
                Yes! Participants are welcome to submit projects that were done
                in school as long as they meet the requirements of the
                competition.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                What type of building should I design for this competition?
              </FAQQuestion>
              <FAQText>
                Buildings can be of any program, as long as the design can be
                occupied for various activites, including living activities.
              </FAQText>
            </RowChild>
          </Row>
          <Row>
            <RowChild>
              <FAQQuestion>
                What should I do if I miss/lost/forgot my identification number?
              </FAQQuestion>
              <FAQText>
                You can contact the competition committee trough Email, LINE, or
                WhatsApp that has been attached on AFAIR UI Competition TOR and
                afairui.com. Then you can follow the instruction from the
                committee.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Can I change team member after the registration?
              </FAQQuestion>
              <FAQText>
                No, you will not be allowed to change, add, or remove members
                whose names are submitted in the registration form.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Is there any other design restrictions? Such as how many floors
                allowed?
              </FAQQuestion>
              <FAQText>
                TNo, there is only a maximum floor plan area of 30m2, but
                participants are welcomed to integrate the design with the area
                outside the site.
              </FAQText>
            </RowChild>
            <RowChild>
              <FAQQuestion>
                Is there a difference in assessment between individual and team?
              </FAQQuestion>
              <FAQText>No. The judging criteria between them are same.</FAQText>
            </RowChild>
          </Row>
          <ContactTittle>
            For further information, please kindly contact us below!
          </ContactTittle>
          <ContactsWrap>
            <ContactChild>
              <Name>Ariq Dhia Athallah</Name>
              <Data>ariq.dhia@ui.ac.id</Data>
              <Data>+62 811 197 790</Data>
              <Data>LINE ID ariqdhia</Data>
            </ContactChild>
            <ContactChild>
              <Name>Gusti Nadya</Name>
              <Data>gusti.ayu85@ui.ac.id</Data>
              <Data>+62 8188 0629 6188</Data>
              <Data>LINE ID gstayu.nadya</Data>
            </ContactChild>
            <ContactChild>
              <Name>Gina Khairunnisa</Name>
              <Data>gina.khairunnisa@ui.ac.id</Data>
              <Data>+62 8121 1902 577</Data>
              <Data>LINE ID ginakhairunnisa2001</Data>
            </ContactChild>
          </ContactsWrap>
          <FAQWrapper2>
            <FAQ2Img src={imgBottom} alt="home.png" />
          </FAQWrapper2>
        </Container>
      </EventDescSection>
    </>
  );
}

export default FAQ;
