import type { AppProps } from 'next/app'
import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div>
          <Head>
              <title>CSCDR @ UMassD</title>
              <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
              />
              <link
                  rel="shortcut icon"
                  href="/University_of_Massachusetts_Dartmouth_seal.svg"
                  type="image/svg+xml"
              />
          </Head>
          <UserProvider>
              <Component {...pageProps} />
          </UserProvider>
      </div>
  )
}

export default MyApp
