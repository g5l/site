"use client"
import styled from 'styled-components';

export const Body = styled.section`
  color: #333333;
	
	& > .footer {
		margin-top: auto;
	}
`

export const ExternalBody = styled(Body)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url('/bg-home.jpg');
  background-position: center bottom;
  background-size: cover;
  min-height: 100vh;

  @media (min-width: 768px) {
    background: url('/bg-home-dektop.jpg');
    background-position: right bottom;
  }
`;

export const InternalBody = styled(Body)`
	height: 100%;
`;

export const Content = styled.section`
  max-width: 1200px;
	height: 100%;
	margin-left: auto;
  margin-right: auto;
`;

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
