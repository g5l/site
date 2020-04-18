import styled from 'styled-components';

export const Content = styled.section`
  color: #333333;
  background: url('/bg-home.jpg');
  background-size: cover;
  background-position: center bottom;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 768px) {
    background: url('/bg-home-dektop.jpg');
    background-position: right bottom;
  }
`

export const Main = styled.div`
  flex: 1;
  font-size: 20px;
  color: #454545;
  line-height: 26px;
  font-weight: 100;
  padding: 0 30px;

  @media (min-width: 768px) {
    width: 800px;
    margin-top: 80px;
    align-self: center;
  }
`