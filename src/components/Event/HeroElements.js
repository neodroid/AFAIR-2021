import styled from "styled-components";

export const HeroSection = styled.div`
  color: #fff;
  padding: 60px 0;
  background: #f7f2ec;
`;

export const Row = styled.div`
  display: flex;
  margin: 200px -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.div`
  // margin-bottom: 15px;
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
    // background: #000;
  }
`;

export const Column2 = styled.div`
  // margin-bottom: 15px;
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
  margin-top: 100;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Line = styled.div`
  width: 517px;
  // height: 117px;
  left: 47px;
  // top: 758px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  // line-height: 70px;
  letter-spacing: -0.015em;

  color: #2f3a56;
  cursor: default;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Heading = styled.h1`
  width: 673px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 94px;
  letter-spacing: -0.015em;

  color: #2f3a56;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    font-size: 60px;
  }
`;

export const Paragraph = styled.div`
  margin-top: 20px;
  width: 479px;
  text-align: justify;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  color: #2f3a56;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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

export const DivLine = styled.div`
  display: flex;
  width: 100%;
`;

export const RightImg = styled.img`
  
  display: inline-block;
  height: 600px;   
  margin-top: -200px;
  // padding-top: 400px;
  margin-bottom: -150px;
  position: relative;
  align-self: flex-start;


  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;
