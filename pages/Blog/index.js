import fetch from 'node-fetch'
import Link from 'next/link'
import styled from 'styled-components';
import Header from 'components/Header'
import Footer from 'components/Footer'
import PostPreview from 'components/PostPreview'

const Blog = (props) => (
  <>
    {/* <Header intern />
    <Container>
      {props.posts.map(post => (
        <Link href="/Blog/[slug]" as={`/Blog/${post.slug}`} passHref key={post.id}>
          <PostPreview
            className="post"
            image={post.image}
            title={post.title}
            date={post.created_at}
          />
        </Link>
      ))}
    </Container>
    <Footer intern /> */}
  </>
)

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.API_URL}/posts`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   }
// }

const Container = styled.div`
  @media (min-width: 768px) {
    max-width: 700px;
    padding: 20px 0;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
`

export default Blog;