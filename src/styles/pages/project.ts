import { darken } from 'polished'
import styled, { css } from 'styled-components'

import { Wrapper as SliderWrapper } from '../../components/Slider/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${SliderWrapper} {
    max-width: 50%;
  }
`

type TextContentProps = {
  color: string
}

export const TextContent = styled.div<TextContentProps>`
  ${({ theme, color }) => css`
    width: 50%;
    background: ${color};
    color: ${darken(0.4, color)};
    border: 5px solid ${darken(0.2, color)};
    margin: ${theme.spacings.large} 0;
    padding: ${theme.spacings.xsmall};
    border-radius: 10px;
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`
export const SubTitle = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large};
    font-size: ${theme.font.sizes.medium};
  `}
`

type ImageProps = {
  vertical: boolean
}

export const Image = styled.div<ImageProps>`
  ${({ theme, vertical }) => css`
    padding: ${theme.spacings.normal};

    img {
      width: 100%;
      height: 500px;
      border-radius: 10px;

      ${vertical &&
      css`
        width: 30%;
        border-radius: 0px;
        margin: 0 auto;
      `}
    }
  `}
`

export const GroupLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`

export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    margin: ${theme.spacings.large};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.text};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      margin-bottom: ${theme.spacings.xsmall};
    }

    :hover {
      svg {
        animation: onFlip 0.5s ease-in-out;
      }
    }

    @keyframes onFlip {
      0% {
        transform: rotateY(0);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
  `}
`
