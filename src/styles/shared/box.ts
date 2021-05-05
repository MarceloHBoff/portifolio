import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const BoxContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.greaterThan('medium')`
      flex-direction: row;
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    min-width: 10rem;
    min-height: 10rem;
    border-radius: ${theme.border.radius};
    margin: ${theme.spacings.small};
    padding: ${theme.spacings.normal} 5rem;
    background: ${theme.colors.secundary};
    box-shadow: ${theme.boxShadow};

    position: relative;
    text-align: center;
    transition: all 0.3s ease-in-out;

    ${media.lessThan('medium')`
      width: 60%;
    `}

    img {
      width: 10rem;
      height: 10rem;
      border-radius: ${theme.border.radius};

      animation: imageResiseBox 1s ease-in-out;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      border-radius: 10px;
      background: transparent;
    }

    &:hover {
      transform: scale(1.05);
    }

    &:hover::after {
      background: rgba(0, 0, 0, 0.1);
    }

    @keyframes imageResiseBox {
      0% {
        width: 15rem;
        height: 15rem;
      }
      100% {
        width: 10rem;
        height: 10rem;
      }
    }
  `}
`
