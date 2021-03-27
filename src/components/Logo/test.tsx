import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render correctly', () => {
    const { container } = render(<Logo />)

    const logo = screen.getByRole('img', { name: /marcelo boff/i })
    expect(logo).toBeInTheDocument()
    expect(logo.parentElement).toHaveStyle({
      width: '32rem',
      height: '5rem'
    })

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render logo with small size', () => {
    render(<Logo size="small" />)

    const logo = screen.getByRole('img', { name: /marcelo boff/i })
    expect(logo.parentElement).toHaveStyle({
      width: '19rem',
      height: '3rem'
    })
  })
})
