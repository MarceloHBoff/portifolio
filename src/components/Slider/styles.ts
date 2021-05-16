import { lighten } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  dotsColor?: string
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: 70%;

  ${media.lessThan('large')`
    max-width: 100%;
  `}

  ${({ theme, dotsColor = theme.colors.primaryDark }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

      li {
        background: rgba(255, 255, 255, 0.3);
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin: 0 ${theme.spacings.normal};
        transition: all 0.3s ease-in-out;

        &:hover {
          background: ${lighten(0.9, dotsColor)};
        }

        &.slick-active {
          background: ${dotsColor};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    .slick-prev {
      left: -${theme.spacings.xhuge};
    }

    .slick-next {
      right: -${theme.spacings.xhuge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
