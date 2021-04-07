import Head from 'next/head'

import PrismicDOM from 'prismic-dom'
import { fetchApi } from 'service/prismic'

interface HomeProps {
  title: string
}

export default function Home({ title }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Marcelo Boff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>{title}</div>
    </div>
  )
}

export async function getServerSideProps() {
  const home = await fetchApi(
    `
    query {
      allHomes {
        edges {
          node {
            title
          }
        }
      }
    }
  `,
    {}
  )

  return {
    props: {
      title: PrismicDOM.RichText.asText(home.allHomes.edges[0].node.title)
    }
  }
}
