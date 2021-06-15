import styled, { createGlobalStyle } from 'styled-components';

import ttf from './components/Assets/fonts/Poppins-Regular.ttf';
import eot from './components/Assets/fonts/poppins-v15-latin-regular.eot';
import svg from './components/Assets/fonts/poppins-v15-latin-regular.svg';
import woff from './components/Assets/fonts/poppins-v15-latin-regular.woff';
import woff2 from './components/Assets/fonts/poppins-v15-latin-regular.woff2';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  
  html {
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    @media screen and (max-width: 480px) {
        overflow-x: hidden;
    }
  }

  @font-face {
    font-family: 'Poppins';
    src:url(${ttf}) format('truetype'),
        url(${eot}) format('embedded-opentype'),
        url(${svg}) format('svg'),
        url(${woff}) format('woff'),
        url(${woff2}) format('woff2');
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.a`
  border-radius: 50px;
  background: #6358F8;
  white-space: nowrap;
  padding: 14px 38px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: 'Poppins';
  letter-spacing: 5px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0467FB;
  }
`;

export default GlobalStyle;
