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
  DivLine,
  LogoImg,
} from "./CompetitionDescElements";

import img1 from "../Assets/imgs/CompetitionsDesc/mascots.png";
import img2 from "../Assets/imgs/CompetitionsDesc/mascots-1.png";
import img3 from "../Assets/imgs/CompetitionsDesc/mascots-2.png";
import img4 from "../Assets/imgs/CompetitionsDesc/mascots-3.png";
import img5 from "../Assets/imgs/CompetitionsDesc/mascots-4.png";
import imgRight from "../Assets/imgs/RegisterNow.png";

import { Container } from "../../GlobalStyles";

function CompetitionDesc({ lineHeading, heading, description, img }) {
  return (
    <>
      <DescSection>
        <Container>
          <ContentWrap>
            <Row>
              <RowChild id="/brief">
                <Judul>
                  <LogoImg src={img1} alt="home.png" />
                  <DescTitle>BRIEF</DescTitle>
                </Judul>

                <DescText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </DescText>
              </RowChild>
              <RowChild id="/prizes">
                <Judul>
                  <LogoImg src={img2} alt="home.png" />
                  <DescTitle>PRIZES</DescTitle>
                </Judul>

                <DescText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </DescText>
              </RowChild>
              <RowChild id="/dates">
                <Judul>
                  <LogoImg src={img3} alt="home.png" />
                  <DescTitle>DATES</DescTitle>
                </Judul>

                <DescText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </DescText>
              </RowChild>
              <RowChild id="/jury">
                <Judul>
                  <LogoImg src={img4} alt="home.png" />
                  <DescTitle>JURY</DescTitle>
                </Judul>

                <DescText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </DescText>
              </RowChild>
              <RowChild id="/fee">
                <Judul>
                  <LogoImg src={img5} alt="home.png" />
                  <DescTitle>FEE</DescTitle>
                </Judul>

                <DescText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </DescText>
              </RowChild>
            </Row>
            {/* <HomeImg src={imgRight} alt="home.png" /> */}
          </ContentWrap>
        </Container>
      </DescSection>
    </>
  );
}

export default CompetitionDesc;
