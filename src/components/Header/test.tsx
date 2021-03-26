import { NextRouter } from 'next/dist/client/router'

import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import Header from '.'

describe('<Header />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Header router={{ pathname: '/' } as NextRouter} />
    )

    const projetos = screen.getAllByText(/projetos/i)
    expect(projetos).toHaveLength(2)
    expect(screen.getAllByText(/sobre/i)).toHaveLength(2)
    expect(screen.getAllByText(/contato/i)).toHaveLength(2)

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render bars button menu', () => {
    renderWithTheme(<Header router={{ pathname: '/' } as NextRouter} />)
    expect(
      screen.getByLabelText(/Open Menu/i).parentElement?.parentElement
    ).toHaveStyleRule('display', 'block', {
      media: '(max-width: 1170px)'
    })
  })

  it('should open mobile menu when click on bars button', async () => {
    renderWithTheme(<Header router={{ pathname: '/' } as NextRouter} />)

    userEvent.click(screen.getByLabelText(/Open Menu/i))
    await waitFor(() => {
      expect(
        screen.getAllByText(/projetos/i)[0].parentElement?.parentElement
      ).toHaveStyleRule('display', 'block', { media: '(max-width: 1170px)' })
      expect(
        screen.getAllByText(/projetos/i)[0].parentElement
      ).toHaveStyleRule('position', 'fixed', { media: '(max-width: 1170px)' })
    })
    userEvent.click(screen.getAllByText(/projetos/i)[0].parentElement!)
  })
})
