import styled from 'styled-components';

export const PostPreviewDiv = styled.div`
  padding: 30px 30px;
  border-bottom: 1px solid #DEDEDE;
`

export const Image = styled.img.attrs(
  props => ({'src': props.src, 'alt': props.alt})
)`
  height: 160px;
  width: 100%;
  object-fit: cover;
  object-position: center bottom;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 800;
  margin: 15px 0;
  color: #454545;
`

export const Author = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.img.attrs(
  props => ({'src': props.src, 'alt': props.alt})
)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 12px;
`

export const AuthorTitle = styled.h3`
  font-size: 14px;
  color: #454545;
  margin: 0;
  letter-spacing: .4px;
  line-height: 8px;
  font-weight: 600;
`
export const AuthorTime = styled.span`
  font-size: 10px;
  color: #6A6A6A;
  font-weight: 300;

  & > .icon {
    margin-right: 5px;
  }
`
