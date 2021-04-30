import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.normal};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 900px;
      height: 500px;
      border-radius: 10px;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 900px;
    height: 150px;
    margin-top: -150px;
    background: ${theme.colors.secundary};
    background: rgba(0, 0, 0, 0.6);
    padding: ${theme.spacings.normal};
    border-radius: 0 0 10px 10px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.normal};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`
