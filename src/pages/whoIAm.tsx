import { GetStaticProps } from 'next'
import Head from 'next/head'

import PrismicDOM from 'prismic-dom'
import { fetchApi } from 'service/prismic'
import * as S from 'styles/pages/whoIAm'

type Tech = {
  uid: string
  description: string
  image: string
  url: string
}

type WhoIamProps = {
  title: string
  about: string
  altimage: string
  image: string
  techstitle: string
  techs: Tech[]
}

export default function WhoIAm({
  title,
  about,
  altimage,
  image,
  techstitle,
  techs
}: WhoIamProps) {
  return (
    <S.Container>
      <Head>
        <title>Sobre | Marcelo Boff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Title>{title}</S.Title>
      <S.Content>
        <img src={image} alt={altimage} />

        <div>{about}</div>
      </S.Content>

      <S.Title>{techstitle}</S.Title>
      <S.Techs>
        {techs.map(tech => (
          <a
            key={tech.uid}
            target="_blank"
            rel="noreferrer"
            href={tech.url}
            title={tech.description}
          >
            <S.Tech>
              <img src={tech.image} alt={tech.description} />
            </S.Tech>
          </a>
        ))}
      </S.Techs>
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchApi(
    `
    query {
      allWhoiams {
        edges {
          node {
            title
            about
            image
            techstitle
          }
        }
      }
      allTechs {
        edges {
          node {
            _meta {
              uid
            }
            description
            image
            url
          }
        }
      }
    }

  `,
    {}
  )

  return {
    props: {
      title: PrismicDOM.RichText.asText(data.allWhoiams.edges[0].node.title),
      about: PrismicDOM.RichText.asText(data.allWhoiams.edges[0].node.about),
      image: data.allWhoiams.edges[0].node.image.url,
      altimage: data.allWhoiams.edges[0].node.image.alt,
      techstitle: PrismicDOM.RichText.asText(
        data.allWhoiams.edges[0].node.techstitle
      ),
      techs: data.allTechs.edges.map(({ node }: any) => ({
        uid: node._meta.uid,
        description: PrismicDOM.RichText.asText(node.description),
        image: node.image.url,
        url: PrismicDOM.RichText.asText(node.url)
      }))
    },
    revalidate: 60 * 60 * 24 // 24 horas
  }
}
