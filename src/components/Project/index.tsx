import Link from 'next/link'

import { Container, Content, Title, Description } from './styles'

export type ProjectType = {
  title: string
  description: string
  liveurl: string
  giturl: string
  color: string
  uid: string
  banner: {
    vertical: boolean
    url: string
    alt: string
  }
  images: {
    vertical: boolean
    url: string
    alt: string
  }[]
}

type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <Link href={`/project/${project.uid}`}>
      <Container vertical={project.banner.vertical}>
        <img src={project.banner.url} alt={project.banner.alt} />

        <Content>
          <Title>{project.title}</Title>
          <Description>{project.description}</Description>
        </Content>
      </Container>
    </Link>
  )
}
