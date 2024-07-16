import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px 30px;
  width: 100%;
  height: 100%;

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
  }
`