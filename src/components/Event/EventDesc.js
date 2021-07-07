import React from "react";

import {
  EventDescSection,
  Row,
  RowChild,
  DescText,
  Line,
  Heading,
  Paragraph,
  ImageWrapper,
  DivLine,
  LogoImg,
} from "./EventDescElements";

import { Container } from "../../GlobalStyles";

function EventDesc({ lineHeading, heading, description, img }) {
  return (
    <>
      <EventDescSection>
        <Container>
          <Row>
            <RowChild>
              <DescText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </DescText>
            </RowChild>
            <RowChild>
              <DescText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </DescText>
            </RowChild>
          </Row>
        </Container>
      </EventDescSection>
    </>
  );
}

export default EventDesc;
