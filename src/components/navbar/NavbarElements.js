import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import { Container } from "../../GlobalStyles";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  z-index: 999;
  position: sticky;
  background-color: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  background-color: #A8D0DA;
  font-size: 1.2rem;
  top: 0;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  opacity: 85%;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    opacity: 100%;
  }
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

export const Logo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 968px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: ${({ toggle }) => (toggle ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ toggle }) => (toggle ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #6358f8;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const Links = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Poppins";
  font-weight: bold;
  color: #6358f8;
  cursor: default;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #000;
  }

  &:hover {
    color: #efb401;
    transition: 0.3s ease-in-out;
  }
`;

export const LinkScroll = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Poppins";
  font-weight: bold;
  color: #2F3A56;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #000;
  }

  &:hover {
    color: #fff;
    transition: 0.3s ease-in-out;
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  background: ${({ primary }) => (primary ? "#6358F8" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ size }) => (size ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0467FB" : "#6358F8")};
    color: #efb401;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NavButton = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
