import styled from "styled-components";

export const DescSection = styled.div`
  color: #fff;
  padding: 60px 0;
  background: #f7f2ec;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Judul = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
`;

export const DescText = styled.div`
  width: 858px;
  height: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: justify;
  letter-spacing: -0.015em;
  color: #000000;

  align-items: center;
`;

export const DescTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
  letter-spacing: -0.015em;

  color: #2f3a56;
`;

export const LogoImg = styled.img`
  width: 116px;
  
  display: inline-block;
//   height: 112px;   

//   align-self: flex-start;

  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;

export const LogoImg2 = styled.img`
  height: 600px;
  margin-top: 100px;
  // right: 0;
  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;
export const HomeImg = styled.img`
  // width: 1477px;
  
  height: 550px;
  z-index:100;
  position: relative;
  margin-bottom: -900px;

  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-item: center;
  height: 700px;
  background: #a8d0da;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Full = styled.div`
  z-index: 1;
  width: 100%;

  background: #a8d0da;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 991px) {
  }
`;
