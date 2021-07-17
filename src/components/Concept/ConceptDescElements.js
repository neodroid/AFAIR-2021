import styled from "styled-components";

export const EventDescSection = styled.div`
  color: #fff;
  padding: 60px 0;
  background: #f7f2ec;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
  }
`;

export const RowChild = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 90%;
    justify-content: center;
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

export const LogoImg = styled.img`
  top: 0;
  width: 100%;
  z-index: 100;
  position: relative;
  margin-bottom: -100px;
  margin-left: -100px;
`;

export const TitleWrap = styled.div`
  // height: 150px;
  margin-bottom: 30px;
  margin-top: 30px;
`;
export const TimeLine = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: justify;
  letter-spacing: -0.015em;

  color: #2f3a56;
`;
export const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 49px;
  letter-spacing: -0.015em;

  color: #2f3a56;
`;
export const Desc = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: justify;
  letter-spacing: -0.015em;

  color: #2f3a56;
`;
export const MoreInfo = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  text-align: justify;
  letter-spacing: -0.015em;

  color: #2f3a56;

  margin-top: 100px;
`;
