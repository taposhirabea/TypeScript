import NavBar from '@/components/NavBar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google';
import Head from 'next/head';
import NextNProgress from "nextjs-progressbar";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
  <Head>
    <title key="title">NextJS News App</title>
    <meta name="description" key="description" content="NextJS crash course by Coding in Flow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <NextNProgress />
  <NavBar/>
  <Container className="pageContainer">
    <Component {...pageProps} />
  </Container>
</div>
}
