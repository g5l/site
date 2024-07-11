"use client"
import styled from 'styled-components';

interface Props {
  posts: any;
}

const BlogPost = ({post}: Props) => {
  return (
    <>
      {/* <Header intern />
      <Content>
        <Title>{post.title}</Title>
        <div className="article" dangerouslySetInnerHTML={{__html: post.article}}></div>
      </Content>
      <Footer intern/> */}
    </>
  );
};

// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.API_URL}/posts`)
//   const posts = await res.json();

//   const paths = posts.map(post => ({
//     params: { slug: post.slug },
//   }))

//   return { paths, fallback: true }
// }


// export async function getStaticProps({ params }) {
//   const res = await fetch(`${process.env.API_URL}/post/${params.slug}`);
//   const post = await res.json()

//   return {
//     props: {
//       post,
//     },
//   }
// }

const Content = styled.section`
  padding: 30px;
  color: #333333;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  margin: 0 0 20px 0;

  @media (min-width: 768px) {
    font-size: 32px;
    margin: 20px 0 40px 0;
  }
`;

export default BlogPost;