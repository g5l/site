import { PostPreviewDiv, Image, Title, Author, Avatar, AuthorTitle, AuthorTime } from './styles';
import IconClock from 'icons/icon-clock.svg'

const PostPreview = () => (
  <PostPreviewDiv>
    <Image src="/bg-home.jpg" alt="my image" />
    <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
    <Author>
      <Avatar src="/avatar.jpg" alt="" />
      <div>
        <AuthorTitle>Gabriel Debona</AuthorTitle>
        <AuthorTime>
          <IconClock className="icon" />
          7 min de leitura
        </AuthorTime>
      </div>
    </Author>
  </PostPreviewDiv>
)

export default PostPreview;