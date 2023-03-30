import Head from 'next/head'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Oceo</title>
        <meta name="description" content="Oceo grew up in a lively and vibrant music culture. The incredible passion and joy of the Mediterranean reflects on his music, especially on songs like Evora, Casablanca, Andalucia, Sirenia and many more. Listen to Evora on all streamin platforms " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <Footer />
    </>
  )
}
