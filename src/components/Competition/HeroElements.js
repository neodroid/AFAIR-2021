import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroSection = styled.div`
  color: #fff;
  padding: 60px 0;
  background: #f7f2ec;
  height: 700px;
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  margin-top: 100px;

  @media screen and (max-width: 480px) {
    padding-bottom: 65px;
  }
`;

export const Line = styled.div`
  color: #2f3a56;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 16px;
  font-family: "Roboto";
  cursor: default;

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

export const Heading = styled.h1`
  font-family: Roboto;

  width: 621px;
  height: 118px;
  left: 47px;
  top: 475px;

  font-style: normal;
  font-weight: bold;
  font-size: 80px;

  letter-spacing: -0.015em;

  color: #e24748;

  @media screen and (max-width: 480px) {
    font-size: 45px;
  }
`;

export const Paragraph = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  margin-top: 35px;
  line-height: 24px;
  color: #a9b3c1;
  font-family: Roboto;
  cursor: default;

  width: 547px;
  height: 133px;
  left: 47px;
  top: 575px;

  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.015em;

  color: #000000;
`;

export const ImageWrapper = styled.div`
  max-width: 800px;
  display: flex;
  justify-content: flex-end;
  min-height: auto;
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

export const Button1 = styled.button`
  text-decoration: none;

  padding: ${({ size }) => (size ? "12px 64px" : "10px 20px")};
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;

  min-width: 302px;
  height: 46px;
  left: 47px;
  top: 615px;
  margin-right: 20px;
  background: #fe7235;
  border-radius: 9px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: -0.015em;
  text-align: center;
  text-justify: center;

  &:hover {
    transition: all 0.2s ease-out;
    background: #2f3a56;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const ButtonWrap1 = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const Button2 = styled.button`
  border-radius: 20px;
  background: ${({ primary }) => (primary ? "#6358F8" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ size }) => (size ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  width: 241px;
  height: 46px;
  left: 372px;
  top: 615px;
  min-width: 241px;
  height: 46px;
  left: 372px;
  top: 615px;
  font-family: Roboto;
  background: #a8a8a8;
  border-radius: 9px;

  &:hover {
    transition: all 0.2s ease-out;
    background: #2f3a56;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  // position: fixed;
  bottom: 0;
  z-index: 200;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HomeImg = styled.img`
  // width: 1477px;
  top:0;
  height: 800px;
  z-index:100;
  position: relative;
  margin-bottom: -125px;
  margin-top: -100px;
  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
`;
