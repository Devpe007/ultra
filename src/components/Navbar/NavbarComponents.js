import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

import { Container } from '../../globalStyles';

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 999;

  height: 80px;

  font-size: 1.2rem;

  background: #101522;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;

  cursor: pointer;

  font-size: 2rem;
  text-decoration: none;

  color: #fff;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;

    position: absolute;
    top: 0;
    right: 0;

    font-size: 1.8rem;

    cursor: pointer;

    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 90vh;

    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};

    opacity: 1;

    transition:  all 0.5s ease;

    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;

  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;

  padding: 0.5rem 1rem;

  height: 100%;

  text-decoration: none;

  color: #fff;

  @media screen and (max-width: 960px) {
    display: table;

    padding: 2rem;

    width: 100%;

    text-align: center;

    &:hover {
      color: #4b59f7;

      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;

  height: 100%;
  width: 100%;

  border: none;

  outline: none;

  text-decoration: none;
`;
