import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaBreakpoints = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

export default styled.div<MediaBreakpoints>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`display: block`}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`display: block`}
  `
}
