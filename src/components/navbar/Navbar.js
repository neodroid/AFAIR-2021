import React, { useState, useEffect } from "react";
// import icon from "../../components/Assets/imgs/newtab.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  Nav,
  NavContainer,
  Logo,
  Icon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavButton,
  ButtonLink,
  Button,
  LinkScroll,
} from "./NavbarElements";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [button, setButton] = useState(true);

  const handleToggle = () => setToggle(!toggle);
  const closeMenu = () => setToggle(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const [scrollNav, setScrollnav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{ color: "#6358F8" }}>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <Logo to="/" onClick={closeMenu}>
          <LinkScroll to="/" smooth onClick={closeMenu}>
                HEADER
              </LinkScroll>
          </Logo>
          <MobileIcon onClick={handleToggle}>
            {toggle ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleToggle} toggle={toggle}>
            <NavItem>
              <LinkScroll to="/about" smooth onClick={closeMenu}>
                ABOUT
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll to="/competition" smooth onClick={closeMenu}>
                COMPETITION
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll to="/event" smooth onClick={closeMenu}>
                EVENT
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll to="/contact" smooth onClick={closeMenu}>
                CONTACT
              </LinkScroll>
            </NavItem>
              {/* <NavButton>
                {button ? (
                  <ButtonLink
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button primary>CONTACT</Button>
                  </ButtonLink>
                ) : (
                  <ButtonLink
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button onClick={closeMenu} big primary>
                      CONTACT
                    </Button>
                  </ButtonLink>
                )}
              </NavButton> */}
          </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
