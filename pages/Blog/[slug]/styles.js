import styled from 'styled-components';

export const Content = styled.section`
  padding: 30px;
  color: #333333;
  max-width: 800px;
  margin: auto;
`

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  margin: 0 0 20px 0;

  @media (min-width: 768px) {
    font-size: 32px;
    margin: 20px 0 40px 0;
  }
`