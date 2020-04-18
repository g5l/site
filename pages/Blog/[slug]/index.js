import fetch from 'node-fetch'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Content, Title, Text } from './styles.js'

const BlogPost = ({ post }) => {
  return (
    <>
      <Header intern />
      <Content>
        <Title>{post.title} {process.env.API_URL}</Title>
        <div className="article" dangerouslySetInnerHTML={{__html: post.article}}></div>
      </Content>
      <Footer intern/>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/posts`)
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: true }
}


export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.API_URL}/post/${params.slug}`);
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}

export default BlogPost;