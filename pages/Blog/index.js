import Header from 'components/Header'
import Footer from 'components/Footer'
import PostPreview from 'components/PostPreview'
import { Container } from './styles.js'

const Blog = () => (
  <>
    <Header intern />
    <Container>
      <PostPreview className="post" />
      <PostPreview className="post" />
      <PostPreview className="post" />
      <PostPreview className="post" />
    </Container>
    <Footer intern />
  </>
)

export default Blog;