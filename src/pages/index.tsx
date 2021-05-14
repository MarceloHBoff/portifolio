import { GetStaticProps } from 'next'
import Head from 'next/head'

import Project, { ProjectType } from 'components/Project'
import { fetchApi } from 'service/prismic'
import { Container } from 'styles/pages/home'
import { getProjectByNode } from 'utils/projectUtils'

import Slider from '../components/Slider'

type HomeProps = {
  projects: ProjectType[]
}

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Marcelo Boff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Slider>
          {projects.map(project => (
            <div key={project.uid}>
              <Project project={project} />
            </div>
          ))}
        </Slider>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetchApi(
    `
    query {
      allProjects {
        edges {
          node {
            title
            description
            banner
            liveurl
            color
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
    {}
  )

  const projects = [] as ProjectType[]

  response.allProjects.edges.forEach((project: any) => {
    projects.push(getProjectByNode(project.node))
  })

  return {
    props: { projects },
    revalidate: 60 * 60 * 24 // 24 horas
  }
}
