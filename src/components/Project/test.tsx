import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Project from '.'

const project = {
  title: 'title',
  description: 'description',
  url: 'url',
  uid: 'uid',
  banner: 'banner',
  images: ['', '']
}

describe('<Project />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Project project={project} />)

    expect(screen.getByText(project.title)).toBeInTheDocument()
    expect(screen.getByText(project.description)).toBeInTheDocument()
    expect(screen.getByAltText(project.title)).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })
})
