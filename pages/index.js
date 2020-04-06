import Head from 'next/head'
import Footer from 'components/Footer'
import Header from 'components/Header'

const Home = () => (
  <div className="home">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/wou4aeb.css" />
    </Head>

    <Header/>

    <main>
      <p>
        Hi, I’am a software developer and I love make digital products
        Proin cursus lorem quis nulla interdum, ut ullamcorper ipsum feugiat.
        Etiam ultrices dui ac pharetra lobortis. Vivamus iaculis faucibus orci quis semper.
      </p>
      <p>
        Praesent lacus quam, hendrerit nec tincidunt et, pretium facilisis massa.
        Nullam ullamcorper non mauris non ullamcorper.
      </p>
    </main>

    <Footer/>

    <style jsx>{`
      .home {
        background: url('/bg-home.jpg');
        background-size: cover;
        background-position: center bottom;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      main {
        flex: 1;
        font-size: 18px;
        color: #454545;
        line-height: 26px;
        font-weight: 100;
        padding: 0 30px;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
  </div>
)

export default Home
