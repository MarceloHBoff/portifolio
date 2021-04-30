import { Container, Content, Title, Description } from './styles'

export type ProjectType = {
  title: string
  description: string
  url: string
  uid: string
  banner: string
  images: string[]
}
type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <Container>
      <img src={project.banner} alt={project.title} />

      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
      </Content>
    </Container>
  )
}
