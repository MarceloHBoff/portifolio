import { AppProps } from 'next/app'
import Head from 'next/head'

import Header from 'components/Header'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marcelo Boff - Portifólio</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Portifólio of Marcelo Boff" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
