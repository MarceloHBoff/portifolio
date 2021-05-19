import Prismic from 'prismic-javascript'

const PrismicClient = Prismic.client(`${process.env.PRISMIC_API}/api/v2`)

export async function fetchApi<T = any>(
  query: any,
  variables: any
): Promise<T> {
  const prismicApi = await PrismicClient.getApi()

  const res = await fetch(
    `${
      process.env.PRISMIC_API_GRAPHQL
    }/graphql?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': prismicApi.masterRef.ref,
        'Content-Type': 'application/json'
      }
    }
  )

  const json = await res.json()

  return json.data
}

export default Prismic
