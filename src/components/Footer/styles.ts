import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.5rem;

    background: ${theme.colors.header};
    font-size: ${theme.font.sizes.small};

    padding: ${theme.spacings.xsmall} 30rem;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall};
    `}
  `}
`
