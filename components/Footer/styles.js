import styled from 'styled-components';

export const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px 30px;
  background: ${props => props.intern ? 'url(/fundo-blur.png)' : 'none'};
  height: ${props => props.intern ? '160px' : '100%'};
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
    height: ${props => props.intern ? '400px' : '100%'};
    background-position: center top;
  }
`