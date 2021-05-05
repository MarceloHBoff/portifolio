import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { ProjectType } from 'components/Project'
import Slider from 'components/Slider'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { fetchApi } from 'service/prismic'
import * as S from 'styles/pages/project'
import { getProjectByNode } from 'utils/projectUtils'

type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <S.Container>
      <Head>
        <title>Home | Marcelo Boff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Title>{project.title}</S.Title>
      <S.SubTitle>{project.description}</S.SubTitle>

      <Slider>
        {project.images.map(image => (
          <div key={image.url}>
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </Slider>

      <S.GroupLink>
        <S.Link href={project.giturl} target="_blank" rel="noreferrer">
          <FaGithub color="#fff" size={40} />
          Ir para o GitHub
        </S.Link>

        {project.liveurl && (
          <S.Link href={project.liveurl} target="_blank" rel="noreferrer">
            <FaGlobe color="#fff" size={40} />
            Ir para o site
          </S.Link>
        )}
      </S.GroupLink>
    </S.Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'cashflow' } }, { params: { id: 'reader' } }],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!

  const response = await fetchApi(
    `
    query ($id: String!) {
      allProjects(uid: $id){
        edges {
          node {
            title
            description
            banner
            liveurl
            giturl
            _meta {
              uid
            }
            images {
              image
            }
          }
        }
      }
    }
  `,
    { id }
  )

  const project = getProjectByNode(response.allProjects.edges[0].node)

  return {
    props: { project }
  }
}
