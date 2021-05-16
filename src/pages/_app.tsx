import { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

import Footer from 'components/Footer'
import Header from 'components/Header'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import 'react-toastify/dist/ReactToastify.css'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Marcelo Boff - Portifólio</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Portifólio of Marcelo Boff" />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header router={router} />

        <div
          style={{
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 6rem - 2.5rem)'
          }}
        >
          <Component {...pageProps} />
        </div>

        <Footer />

        <ToastContainer autoClose={3000} />
      </ThemeProvider>
    </>
  )
}

export default App
