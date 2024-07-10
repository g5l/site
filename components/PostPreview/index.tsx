import {Author, Image, PostPreviewDiv, Title} from './styles';
import React from 'react';

interface Props {
  href: string;
  image: string;
  title: string;
  date: string;
  
} 

const PostPreview = React.forwardRef((props: Props, ref) => (
  <PostPreviewDiv href={props.href} ref={ref}>
    <Image src={`http://localhost:3030/${props.image}`} alt="my image"/>
    <Title>{props.title}</Title>
    <Author>
      <div>
        Gabriel Debona
      </div>
      <div>
        {props.date}
      </div>
    </Author>
  </PostPreviewDiv>
));

export default PostPreview;