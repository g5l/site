import styled from 'styled-components';

export const PostPreviewDiv = styled.a.attrs(
  props => ({'href': props.href, 'ref': props.ref})
)`
  display: block;
  padding: 30px 30px;
  border-bottom: 1px solid #DEDEDE;
  width: 100%;
  color: #454545;
  text-decoration: none;

  @media (min-width: 768px) {
    padding: 50px 0;
  }
`

export const Image = styled.img.attrs(
  props => ({'src': props.src, 'alt': props.alt})
)`
  height: 160px;
  width: 100%;
  object-fit: cover;
  object-position: center bottom;

  @media (min-width: 768px) {
    height: 250px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 800;
  margin: 15px 0;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.3px;
`
