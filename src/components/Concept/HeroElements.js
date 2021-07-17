import styled from "styled-components";

export const HeroSection = styled.div`
  color: #fff;
  padding: 60px 0;
  background: #f7f2ec;
  @media screen and (max-width: 768px) {
    margin-top: -100px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
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
  padding-top: 0;
  padding-bottom: 60px;
  margin-top: 250px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Line = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: -0.015em;

  color: #2f3a56;
`;

export const Heading = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: -0.015em;

  color: #2f3a56;
  margin-right: 20px;
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

export const DivLine = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomeImg = styled.img`
  
  display: inline-block;
  height: 250px;   
  margin-bottom: 100px;
  margin-left: -150px;
  align-self: flex-start;


  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;

export const RightImg = styled.img`
  
  display: inline-block;
  height: 500px;   
  margin-bottom: -400px;
  margin-right: -100px;
  align-self: flex-start;


  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;
