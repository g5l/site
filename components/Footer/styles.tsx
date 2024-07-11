'use client'
import styled from 'styled-components'

type FooterDivProps = {
	isHome: boolean;
};

export const FooterDiv = styled.div<FooterDivProps>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px 30px;
  background: ${props => props.isHome ? 'none' : 'url(/fundo-blur.png)'};
  height: ${props => props.isHome ? '100%' : '160px'};
  background-size: cover;
  background-position: center bottom;

  & .icon {
    margin: 0 20px;
    transition: opacity .5s ease;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &:last-child {
      margin-right: 0;
    }

    @media (min-width: 768px) {
      margin: 0 20px;
    }
  }

  @media (min-width: 768px) {
    padding: 30px 40px;
    height: ${props => props.isHome ? '100%' : '400px'};
    background-position: center top;
  }
`