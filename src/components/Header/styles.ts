import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.header};
    width: 100vw;
    height: 6rem;

    padding: ${theme.spacings.small} 20rem;
    display: grid;
    grid-template-columns: 1fr 3fr;

    ${media.lessThan('large')`
      display: flex;
      justify-content: center;
      align-items: center;

      padding: ${theme.spacings.small} 2rem;
    `}

    > svg {
      width: 30rem;
      height: 4rem;

      ${media.lessThan('medium')`
        width: 20rem;
        height: 2rem;
      `}
    }
  `}
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 2.5rem;

  svg {
    width: 4rem;
    height: 4rem;
  }
`
