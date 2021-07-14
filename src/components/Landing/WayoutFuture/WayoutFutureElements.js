import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroSection = styled(Link)`
  text-decoration: none;
  display: flex;
  color: #fff;
  // padding: 60px 0;
  background: #2f3a56;
  height: 850px;
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  height: 850px;
  align-items: center;
`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  // background: #000;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Line = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: -0.015em;

  color: #f7f2ec;
`;

export const Heading = styled.h1`
  width: 673px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  line-height: 94px;
  letter-spacing: -0.015em;

  color: #f7f2ec; ;
`;

export const Paragraph = styled.p`
  width: 545px;
  margin-top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: justify;
  letter-spacing: -0.015em;

  color: #000000;
`;

export const Heading2 = styled.p`
  width: 539px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.015em;

  color: #e24748;
`;

export const ImageWrapper = styled.div`
  max-width: 800px;
  display: flex;
  justify-content: flex-end;
  min-height: auto;
`;

export const ContentWrap = styled.div`
  display: flex;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 650px;
  vertical-align: middle;
  display: inline-block;
  max-height: 650px;
  min-height: auto;

  align-self: flex-start;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }

  @media screen and (max-width: 480px) {
    max-width: 450px;
  }
`;

export const LogoImg = styled.img`
  // width: 161px;
  
  display: inline-block;
  height: 112px;   

  align-self: flex-start;

  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;

export const HomeImg = styled.img`
  // width: 1477px;
  margin-left:-300px;
  width: 1100px;
  // z-index:100;
  position: relative;
  margin-bottom: -63px;
  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;
