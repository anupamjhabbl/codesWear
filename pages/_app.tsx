import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './../component/navbar';
import Footer from './../component/footer';
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="main_box">
       <Head>
        <title>Codeswear: wear your code</title>
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
