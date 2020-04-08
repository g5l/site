// import fetch from 'node-fetch'
import Link from 'next/link'
import Header from 'components/Header'
import Footer from 'components/Footer'
import PostPreview from 'components/PostPreview'
import { Container } from './styles.js'

const Blog = (props) => (
  <>
    <Header intern />
    <Container>
      {props.posts.map(post => (
        <Link href="/Blog/[slug]" as={`/Blog/${post}`} passHref>
          <PostPreview className="post" />
        </Link>
      ))}
    </Container>
    <Footer intern />
  </>
)

export function getStaticProps() {
  const posts = [0, 1, 2, 3];

  return {
    props: {
      posts,
    },
  }
}

export default Blog;