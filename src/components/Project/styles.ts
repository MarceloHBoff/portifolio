import styled, { css } from 'styled-components'

type ContainerProps = {
  vertical: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, vertical }) => css`
    width: 100%;
    padding: ${theme.spacings.normal};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    img {
      width: 100%;
      height: 700px;
      border-radius: 10px;

      ${vertical &&
      css`
        width: 35%;
        border-radius: 0px;
        margin: 0 auto;
      `}
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 150px;
    margin-top: -150px;
    background: ${theme.colors.secundary};
    background: rgba(0, 0, 0, 0.7);
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
    line-height: ${theme.font.sizes.xxlarge};
    font-size: ${theme.font.sizes.medium};
  `}
`
