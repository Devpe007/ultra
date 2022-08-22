import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';

import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './NavbarComponents';

import { Button } from '../../globalStyles';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick() {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    };
  };

  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo
              to="/"
              onClick={closeMobileMenu}
            >
              <NavIcon />
              ULTRA
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu
              onClick={handleClick}
              click={click}
            >
              <NavItem>
                <NavLinks
                  to="/"
                >
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/services"
                >
                  Services
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/products"
                >
                  Products
                </NavLinks>
              </NavItem>

              <NavItemBtn>
                { button ? (
                  <NavBtnLink
                    to="/sign-up"
                  >
                    <Button
                      primary
                    >
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink
                    to="/sign-up"
                  >
                    <Button
                      fontBig
                      primary
                    >
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
