import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
       <>
           <Head>
               <title key={1}>Toni Movies</title>
           </Head>
           <Component {...pageProps} />
       </>
  )
}

export default MyApp

