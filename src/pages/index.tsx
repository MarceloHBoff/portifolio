import { GetStaticProps } from 'next'
import Head from 'next/head'

import Project, { ProjectType } from 'components/Project'
import { RichText } from 'prismic-dom'
import { fetchApi } from 'service/prismic'
import { Container } from 'styles/pages/home'

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
            url
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

  // console.log(JSON.stringify(response, null, 2))
  const projects = [] as ProjectType[]

  response.allProjects.edges.forEach((project: any) => {
    projects.push({
      title: RichText.asText(project.node?.title),
      description: RichText.asText(project.node?.description),
      url: RichText.asText(project.node?.url),
      uid: project.node._meta?.uid,
      banner: project.node.banner?.url,
      images: project.node.images.map((image: any) => image.image.url)
    })
  })

  console.log(projects)

  return {
    props: { projects },
    revalidate: 60 * 60 * 24 // 24 horas
  }
}
