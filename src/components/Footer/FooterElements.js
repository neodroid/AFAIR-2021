import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled.footer`
  padding: 10px 0;
  background: #a8d0da;
  position: relative;
  color: #2f3a56;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-right: 50px;
  padding-left: 50px;
  align-items: center;
  justify-content: space-between;
  display: flex;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const FooterDiv = styled.div`
  display: flex;

  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-left: 30px;
  }
`;

export const FooterChildDiv = styled.div`
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-left: 30px;
  }
`;

export const FooterText = styled.div`
  display: flex;
  margin-left: 15px;
  margin-right: 15px;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-left: 30px;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  position: absolute;
  grid-gap: 15px;
  right: 0;
  top: 5px;
  transform: translate(-100%, 60%);
  font-size: 1.4rem;
  cursor: pointer;
  margin: 0 16px;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: flex;
    margin-right: -15px;
  }
`;

export const Linksoc = styled.a`
  display: flex;
  align-items: center;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-color: #2f3a56;
`;
