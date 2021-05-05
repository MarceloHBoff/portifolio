import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Box, BoxContainer } from 'styles/shared/box'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: ${theme.spacings.xhuge};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    text-align: center;
  `}
`

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 60rem;
    padding: 3rem 5rem;
    margin-top: 5rem;
    border-radius: 10px;
    background: ${theme.colors.secundary};
    box-shadow: ${theme.boxShadow};

    ${media.lessThan('medium')`
      border-radius: 0;
      padding: 3rem;
    `}

    animation: onEnterForm 1s ease-in-out;

    @keyframes onEnterForm {
      0% {
        opacity: 0;
        transform: scale(0.9);
      }
      50% {
        opacity: 1;
        transform: scale(1.05);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `}
`

export const Input = styled.input`
  border: 1px;
  width: 100%;
  height: 4rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  font-size: ${props => props.theme.font.sizes.small};
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.sizes.small};

  resize: vertical;
  min-height: 10rem;
  max-height: 30rem;
`

export const Submit = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    border-radius: 10px;

    background: ${theme.colors.primary};
    color: ${theme.colors.primaryDark};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    transition: all 0.3s ease-in-out;

    :hover {
      color: ${theme.colors.primary};
      background: ${theme.colors.primaryDark};
      filter: brightness(1.1);
    }
  `}
`

export const Socials = styled(BoxContainer)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.huge};

    ${media.greaterThan('medium')`
      margin-top: 10rem;
    `}
  `}
`

export const Social = styled(Box)``
