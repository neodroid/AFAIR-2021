import React, { useEffect } from "react";

import { Row, RowChild } from "./CompetitionDescElements";

import Brief from "./Desc/Brief";
import Prizes from "./Desc/Prizes";
import Dates from "./Desc/Dates";
import Jury from "./Desc/Jury";
import Fee from "./Desc/Fee";

import Aos from "aos";
import "aos/dist/aos.css";

const CompetitionDesc = ({ lineHeading, heading, description, img }) => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <>
      <Row>
        <RowChild data-aos="slide-right" id="/brief">
          <Brief />
        </RowChild>
        <RowChild data-aos="slide-left" id="/prizes">
          <Prizes />
        </RowChild>
        <RowChild data-aos="slide-right" id="/dates">
          <Dates />
        </RowChild>
        <RowChild data-aos="slide-left" id="/jury">
          <Jury />
        </RowChild>
        <RowChild data-aos="slide-up" id="/fee">
          <Fee />
        </RowChild>
      </Row>
    </>
  );
};

export default CompetitionDesc;
