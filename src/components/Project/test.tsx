import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Project from '.'

const project = {
  title: 'title',
  description: 'description',
  liveurl: '',
  giturl: '',
  color: '',
  uid: 'uid',
  banner: {
    vertical: true,
    url: '',
    alt: 'banner'
  },
  images: [
    {
      vertical: false,
      url: '',
      alt: 'alt1'
    },
    {
      vertical: true,
      url: '',
      alt: 'alt2'
    }
  ]
}

describe('<Project />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Project project={project} />)

    expect(screen.getByText(project.title)).toBeInTheDocument()
    expect(screen.getByText(project.description)).toBeInTheDocument()
    expect(screen.getByAltText(project.banner.alt)).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })
})
