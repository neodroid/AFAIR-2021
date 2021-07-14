import React, { useEffect } from "react";

import {
  EventDescSection,
  Row,
  RowChild,
  TitleWrap,
  TimeLine,
  Title,
  Desc,
  MoreInfo,
  LogoImg,
} from "./ConceptDescElements";

import { Container } from "../../GlobalStyles";
import img from "../Assets/imgs/New/NewEventBottom.png";

import Aos from "aos";
import "aos/dist/aos.css";

const ConceptDesc = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <EventDescSection>
        <Container>
          <Row>
            <RowChild data-aos="fade-left">
              <TitleWrap>
                <TimeLine>WEBINAR 1 - 16 JULY 2021</TimeLine>
                <Title>
                  QUESTIONING <br></br>THE FUTURE
                </Title>
              </TitleWrap>
              <Desc>
                This webinar would mostly discuss about how the future will in
                the scope of architecture. We are going to find out how
                architecture can play a big role as an instrument in facing
                those changes that will occur.
              </Desc>
            </RowChild>
            <RowChild data-aos="fade-up">
              <TitleWrap>
                <TimeLine>WEBINAR 2 - 7 AUGUST 2021</TimeLine>
                <Title>INTO THE FUTURE DWELLING </Title>
              </TitleWrap>
              <Desc>
                This webinar would mostly discuss about how we, humas, will live
                in the future. We are going to explore more on how do we dwell.
                Will there be some kind of change in our living space and how
                the environment arround us could affect our place to dwell.
              </Desc>
            </RowChild>
            <RowChild data-aos="fade-right">
              <TitleWrap>
                <TimeLine>WEBINAR 3 - 21 AUGUST 2021</TimeLine>
                <Title>
                  INTO A NEW <br />
                  LIFESTYLE
                </Title>
              </TitleWrap>
              <Desc>
                This webinar would mostly discuss about the lifestyle that
                progressively changes through times. Especially in terms of
                architecture, we are going to find out whether those changes in
                our lifestyle might affect significantly our needs of space.
              </Desc>
            </RowChild>
          </Row>
          <MoreInfo>
            For more info about the webinar, kindly check our social media.
          </MoreInfo>
          <LogoImg src={img} alt="home.png" />
        </Container>
      </EventDescSection>
    </>
  );
};

export default ConceptDesc;
