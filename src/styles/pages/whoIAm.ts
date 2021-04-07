import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
      border: 5px solid ${theme.colors.secundary};
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

export const Techs = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding-bottom: ${theme.spacings.xhuge};

    ${media.greaterThan('medium')`
      padding-bottom: 0;
      flex-direction: row;
    `}
  `}
`

export const Tech = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    min-width: 10rem;
    min-height: 10rem;
    border-radius: 10px;
    margin: ${theme.spacings.small};
    padding: ${theme.spacings.large} 5rem;
    background: ${theme.colors.secundary};
    box-shadow: ${theme.boxShadow};

    position: relative;
    text-align: center;
    transition: all 0.3s ease-in-out;

    img {
      width: 10rem;
      height: 10rem;
      border-radius: 10px;

      animation: imageResise2 1s ease-in-out;
      background: #fff;
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
      background: rgba(255, 255, 255, 0.15);
    }

    @keyframes imageResise2 {
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
