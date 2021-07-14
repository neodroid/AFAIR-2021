import styled from "styled-components";

export const RegisterSection = styled.div`
  color: #fff;
  padding: 60px 0;
  background: #f7f2ec;
  // position: sticky;
  bottom: 10;
  // z-index: 500;
`;

export const Button1 = styled.button`
  border-radius: 20px;
  background: ${({ primary }) => (primary ? "#6358F8" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ size }) => (size ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  width: 1348px;
  height: 57px;
  left: 46px;
  top: 1098px;

  background: #fe7235;
  border-radius: 7px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.015em;

  &:hover {
    transition: all 0.2s ease-out;
    background: #a8a8a8;
    // background: ${({ primary }) => (primary ? "#0467FB" : "#6358F8")};
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
`;

export const HomeImg = styled.img`
  // width: 1477px;
  
  height: 400px;
  z-index:100;
  position: relative;
  right: 0;
  
  // @media screen and (max-width: 480px) {
    // max-width: 450px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  margin-top: -400px;
  margin-bottom: -25px;
  justify-content: flex-end;
`;

export const PaymentWrap = styled.div`
  margin-bottom: 20px;
`;
export const TitlePay = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: justify;
  letter-spacing: -0.015em;
  margin-bottom: 20px;

  color: #2f3a56;
`;
export const RekWrap = styled.div`
  display: flex;
`;
export const Name = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: justify;
  letter-spacing: -0.015em;

  color: #2f3a56;
`;
export const Num = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-align: justify;
  letter-spacing: -0.015em;

  color: #2f3a56;
`;
