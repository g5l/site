import Link from 'next/link'
import styled, { css } from 'styled-components'

interface HeaderProps {
	readonly $isHome: boolean;
}

interface MenuItemProps {
	readonly $isActive: boolean;
}


export const HeaderDiv = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ $isHome }) => $isHome ? '30px' : '20px 30px'};
  border-bottom: ${({ $isHome }) => $isHome ? 'none' : '1px solid #DEDEDE'};

  & > .logo {
    width: 50px;
    cursor: pointer;

    @media (min-width: 768px) {
      width: ${({ $isHome }) => $isHome ? '70px' : '60px'};
    }
  }

  & > .hamburger-menu {
    @media (min-width: 768px) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    padding: ${({ $isHome }) => $isHome ? '50px 40px' : '30px 30px'};
  }
`

export const Menu = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 300;
  color: #454545;
`

const menuBorder = css`
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background: #454545;
  transform: scaleX(0);
`

export const MenuItem = styled(Link)<MenuItemProps>`
  margin: 0 15px;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:before, &:after {
    margin-top: 10px;
    content: '';
    position: absolute;
    transition: transform .5s ease;
  }

  &:before {
    ${menuBorder}
    ${({ $isActive }) => $isActive && `transform: scaleX(1);`}
  }

  &:hover:before {
    transform: scaleX(1);
  }
`