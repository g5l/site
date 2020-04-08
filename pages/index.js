import Head from 'next/head'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Content, Main } from './styles.js'

const Home = () => (
  <Content>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/wou4aeb.css" />
    </Head>

    <Header/>

    <Main>
      <p>
        Hi, I’am a software developer and I love make digital products
        Proin cursus lorem quis nulla interdum, ut ullamcorper ipsum feugiat.
        Etiam ultrices dui ac pharetra lobortis. Vivamus iaculis faucibus orci quis semper.
      </p>
      <p>
        Praesent lacus quam, hendrerit nec tincidunt et, pretium facilisis massa.
        Nullam ullamcorper non mauris non ullamcorper.
      </p>
    </Main>

    <Footer/>
  </Content>
)

export default Home
