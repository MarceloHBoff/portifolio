import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 60rem;
  padding: 3rem 5rem;
  margin-top: 5rem;
  border-radius: 10px;
  background: ${props => props.theme.colors.secundary};

  ${media.lessThan('medium')`
    border-radius: 0;
    padding: 3rem;
  `}

  animation: onEnter 1s ease-in-out;

  @keyframes onEnter {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
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
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    transition: all 0.3s ease-in-out;

    :hover {
      background: ${theme.colors.primaryDark};
    }
  `}
`

export const Socials = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.huge};
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${media.greaterThan('medium')`
      margin-top: 10rem;
      flex-direction: row;
    `}
  `}
`

export const Social = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    min-width: 10rem;
    min-height: 10rem;
    border-radius: 10px;
    margin: ${theme.spacings.small};
    padding: ${theme.spacings.normal} 5rem;
    background: ${theme.colors.secundary};

    position: relative;
    text-align: center;
    transition: all 0.3s ease-in-out;

    ${media.lessThan('medium')`
      width: 60%;
    `}

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
  `}
`
