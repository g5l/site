import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${props => props.intern ? "14px 30px" : "30px 30px"};
  border: ${props => props.intern ? "1px solid #DEDEDE" : "none"};
`