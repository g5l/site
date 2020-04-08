import { PostPreviewDiv, Image, Title, Author} from './styles';

const PostPreview = React.forwardRef(({ onClick, href }, ref) => (
  <PostPreviewDiv href={href} onClick={onClick} ref={ref}>
    <Image src="/bg-home.jpg" alt="my image" />
    <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Author>
      <div>
        Gabriel Debona
      </div>
      <div>
        08 Abril 2020
      </div>
    </Author>
  </PostPreviewDiv>
))

export default PostPreview;