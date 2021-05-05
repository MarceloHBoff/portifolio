import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`
export const SubTitle = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large};
    font-size: ${theme.font.sizes.large};
  `}
`

export const GroupLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
