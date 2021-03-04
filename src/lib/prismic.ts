import Prismic from 'prismic-javascript'

export const api = 'https://marceloportifolio.cdn.prismic.io'

const PrismicClient = Prismic.client(`${api}/api/v2`)

export async function fetchApi<T = any>(
  query: any,
  variables: object
): Promise<T> {
  const prismicApi = await PrismicClient.getApi()

  const res = await fetch(`${api}/graphql?query=${query}`, {
    headers: {
      'Prismic-Ref': prismicApi.masterRef.ref,
      'Content-Type': 'application/json'
      // 'Accept-Language': process.env.PRISMIC_LOCALE,
      // Authorization: `Token ${process.env.PRISMIC_API_TOKEN}`
    }
  })

  const json = await res.json()

  return json.data
}

export default Prismic
