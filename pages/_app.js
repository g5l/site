import Head from 'next/head'
import 'assets/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>G5L - Product Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/wou4aeb.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp