import styled from "styled-components";

export const EventDescSection = styled.div`
  color: #fff;
  padding: 60px 0;
  background: #f7f2ec;
`;

export const Row = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: -100px;
  }
`;

export const RowChild = styled.div`
  display: flex;
  width: 272px;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const DescText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.015em;

  color: #000000;
`;

export const Gabung = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Judul = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.015em;
  margin-bottom: 20px;
  color: #2f3a56;
`;
export const ListNumber = styled.div``;
export const Tipis = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.015em;

  color: #2f3a56;
`;
export const Tebal = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.015em;

  color: #2f3a56;
`;

export const KananKiri = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 100%;
    // flex-direction: column;
    // background: #000;
  }
`;
export const LogoImg = styled.img`
  width: 422px;
  margin-top: -400px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const LogoImg2 = styled.img`
  
  
  height: 209px;
  width: 315px;
  margin-left: -100px;
  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;
export const LogoKanan = styled.img`
  
  width: 381px;
  margin-right: 200px;
  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;
