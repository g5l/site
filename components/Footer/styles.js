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

  & > .icon {
    margin: 0 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`