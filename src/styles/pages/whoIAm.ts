import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Box, BoxContainer } from 'styles/shared/box'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large};
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    z-index: 5;

    position: relative;

    &::after {
      animation: onEnter 1s ease-in-out;
      content: '';
      position: absolute;
      top: -10px;
      left: -20px;
      width: 65px;
      height: 35px;
      background: ${theme.colors.primary};
      z-index: -1;
      clip-path: polygon(0 0, 100% 0, 100% 15%, 10% 15%, 10% 50%, 0% 50%);
      box-shadow: ${theme.boxShadow};
    }

    @keyframes onEnter {
      0% {
        top: -20px;
        left: -32px;
      }
      100% {
        top: -10px;
        left: -20px;
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 90rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: justify;
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.xxlarge};

    padding: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}

    img {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      margin: ${theme.spacings.huge};
      background: ${theme.colors.secundary};
      border: 5px solid ${theme.colors.primary};
      box-shadow: ${theme.boxShadow};
      animation: imageResise 1s ease-in-out;
    }

    div {
      animation: onEnter2 1s ease-in-out;
    }

    @keyframes onEnter2 {
      0% {
        opacity: 0;
        transform: translateX(100px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes imageResise {
      0% {
        width: 280px;
        height: 280px;
        border-radius: 20%;
      }
      100% {
        width: 220px;
        height: 220px;
        border-radius: 50%;
      }
    }
  `}
`

export const Techs = styled(BoxContainer)`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xhuge};

    ${media.greaterThan('medium')`
      padding-bottom: 0;
    `}
  `}
`

export const Tech = styled(Box)`
  img {
    background: #fff;
  }
`
