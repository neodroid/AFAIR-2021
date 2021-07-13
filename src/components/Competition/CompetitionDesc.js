import React from "react";

import {
  DescSection,
  Row,
  RowChild,
  DescText,
  DescTitle,
  Judul,
  HomeImg,
  ContentWrap,
  Container,
  LogoImg,
} from "./CompetitionDescElements";

import img1 from "../Assets/imgs/CompetitionsDesc/mascots.png";
import img2 from "../Assets/imgs/CompetitionsDesc/mascots-1.png";
import img3 from "../Assets/imgs/CompetitionsDesc/mascots-2.png";
import img4 from "../Assets/imgs/CompetitionsDesc/mascots-3.png";
import img5 from "../Assets/imgs/CompetitionsDesc/mascots-4.png";
import imgRight from "../Assets/imgs/RegisterNow.png";

import Brief from "./Desc/Brief";
import Prizes from "./Desc/Prizes";
import Dates from "./Desc/Dates";
import Jury from "./Desc/Jury";
import Fee from "./Desc/Fee";

const CompetitionDesc = ({ lineHeading, heading, description, img }) => {
  return (
    <>
      {/* <DescSection>
        <Container> */}
      {/* <ContentWrap> */}
      <Row>
        <RowChild id="/brief">
          <Brief />
        </RowChild>
        <RowChild id="/prizes">
          <Prizes />
        </RowChild>
        <RowChild id="/dates">
          <Dates />
        </RowChild>
        <RowChild id="/jury">
          <Jury />
        </RowChild>
        <RowChild id="/fee">
          <Fee />
        </RowChild>
      </Row>
      {/* <HomeImg src={imgRight} alt="home.png" /> */}
      {/* </ContentWrap> */}
      {/* </Container>
      </DescSection> */}
    </>
  );
};

export default CompetitionDesc;
