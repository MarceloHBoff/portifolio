import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    display: ${isOpen ? 'flex' : 'none'};
    justify-content: space-around;
    align-items: center;

    ${isOpen &&
    media.lessThan('large')`
      width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: ${theme.colors.background};
      z-index: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  `}
`

export const MenuItem = styled.button<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.text};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: ${theme.border.radius};
      border-bottom: ${theme.border.big} solid ${theme.colors.text};
      transition: transform 0.3s ease-in-out;
      transform: scaleX(0);
    }

    &:hover::after {
      transform: scaleX(1);
    }

    ${selected &&
    css`
      &::after {
        transform: scaleX(1);
        border-color: ${theme.colors.primary};
      }
    `}
  `}
`
