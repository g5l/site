import Link from 'next/link'
import styled, { css } from 'styled-components'

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${props => props.isHome ? '30px' : '20px 30px'};
  border-bottom: ${props => props.isHome ? 'none' : '1px solid #DEDEDE'};

  & > .logo {
    width: 50px;
    cursor: pointer;

    @media (min-width: 768px) {
      width: ${props => props.isHome ? '70px' : '60px'};
    }
  }

  & > .hamburger-menu {
    @media (min-width: 768px) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    padding: ${props => props.isHome ? '50px 40px' : '30px 30px'};
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

export const MenuItem = styled(Link)`
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
     ${({ active }) => active && `transform: scaleX(1);`}
  }

  &:hover:before {
    transform: scaleX(1);
  }
`