import styled from 'styled-components'

export const Main = styled.div`
  flex: 1;
  font-size: 20px;
  color: #454545;
  line-height: 26px;
  font-weight: 100;
  padding: 0 30px;
  margin-bottom: 50px;
  margin-top: 40px;

  & > .project {
    margin-bottom: 40px
  }

  @media (min-width: 768px) {
    width: 800px;
    margin-top: 80px;
    align-self: center;
  }
`
