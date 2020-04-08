import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${props => props.intern ? "15px 30px" : "30px"};
  border-bottom: ${props => props.intern ? "1px solid #DEDEDE" : "none"};

  & > .logo {
    width: 50px;
    cursor: pointer;

    @media (min-width: 768px) {
      width: ${props => props.intern ? "60px" : "70px"};
    }
  }

  & > .hamburger-menu {
    @media (min-width: 768px) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    padding: ${props => props.intern ? "30px 30px" : "50px 40px"};
  }
`

export const Menu = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 300;
  color: #454545;

  @media (max-width: 768px) {
    display: none;
  }
`
export const MenuItem = styled.div`
  margin: 0 15px;
  cursor: pointer;
  position: relative;

  &:before, &:after {
    margin-top: 10px;
    content: '';
    position: absolute;
    transition: transform .5s ease;
  }

  &:before {
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background: #454545;
    transform:  scaleX(0);
  }

  &:hover:before {
    transform:  scaleX(1);
  }
`