import styled from "styled-components";

export const EventDescSection = styled.div`
  color: #fff;
  padding: 60px 0;
  background: #f7f2ec;
`;

export const LogoImg = styled.img`
  // width: 1477px;
  margin-top: 40px;
  width: 80%;
  height: auto;
  z-index: 100;
  position: relative;
  display: block;
  //   margin-bottom: -187px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const LogoImg2 = styled.img`
  // width: 1477px;
  margin-top: 40px;
  width: 80%;
  height: auto;
  z-index: 100;
  position: relative;
  display: none;
  //   margin-bottom: -187px;
  @media screen and (max-width: 480px) {
    width: 60%;
    display: block;
  }
`;

export const IMG1 = styled.img`
  // width: 1477px;
  
  height: 500px;
  z-index:100;
  position: relative;
  right: 0;
  
  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;
export const IMG2 = styled.img`
  // width: 1477px;
  
  height: 165px;
//   z-index:100;
  position: relative;
  right: 0;
  
  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;

export const IMGWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-bottom: -90px;
  // margin-top: -100px;
`;

export const Line = styled.div`
  width: 339px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  letter-spacing: -0.015em;

  color: #2f3a56;
`;
