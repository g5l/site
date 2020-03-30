import Head from 'next/head'
import IconMenu from '../icons/icon-menu.svg'
import IconGithub from '../icons/icon-github.svg'
import IconLinkedin from '../icons/icon-linkedin.svg'
import IconInstagram from '../icons/icon-instagram.svg'

const Home = () => (
  <div className="home">
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <top>
        <img src="/g5l-logo.png" />
        <IconMenu />
      </top>

      <main>

      </main>

      <footer>
        <IconInstagram />
        <IconLinkedin />
        <IconGithub />
      </footer>
    </div>

    <style jsx>{`
      .home {
        background: url('/bg-home.jpg');
        background-size: cover;
        background-position: center bottom;
      }

      .container {
        min-height: 100vh;
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer svg {
        margin: 0 15px;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
