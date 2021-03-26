import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Footer />)

    const footer = screen.getByText(/© Marcelo Boff 2021/i)
    expect(footer).toBeInTheDocument()
    expect(footer.parentElement).toHaveStyleRule('padding', '0.5rem', {
      media: '(max-width: 768px)'
    })

    expect(container.parentElement).toMatchSnapshot()
  })
})
