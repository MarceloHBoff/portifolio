import { NextRouter } from 'next/dist/client/router'

import { screen } from '@testing-library/react'

import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Menu router={{ pathname: '/' } as NextRouter} />
    )

    const projetos = screen.getByText(/projetos/i)
    expect(projetos).toBeInTheDocument()
    expect(screen.getByText(/sobre/i)).toBeInTheDocument()
    expect(screen.getByText(/contato/i)).toBeInTheDocument()

    expect(projetos).toHaveStyleRule('border-color', theme.colors.primary, {
      modifier: '::after'
    })

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render selected a specefic menu', () => {
    renderWithTheme(<Menu router={{ pathname: '/contact' } as NextRouter} />)

    expect(screen.getByText(/contato/i)).toHaveStyleRule(
      'border-color',
      theme.colors.primary,
      {
        modifier: '::after'
      }
    )
  })
})
