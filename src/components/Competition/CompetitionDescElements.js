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

export const RowChild = styled.div`
  display: flex;
  width: 850px;
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const Judul = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
`;

export const DescText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.015em;
  width: 547px;
  color: #000000;
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

  align-self: flex-start;

  // @media screen and (max-width: 480px) {
    // max-width: 450px;
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

export const ContentWrap = styled.div`
  display: flex;
`;
