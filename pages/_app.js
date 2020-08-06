import Head from 'next/head'
import '../styles/tailwind.base.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Phills Foundation: Sleep Out Charlotte</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
