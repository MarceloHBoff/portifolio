import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.header};
  width: 100vw;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 300px;

  svg {
    width: 300px;
    height: 42px;
  }
`

export const Menus = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 900px;
`

export const Menu = styled.button<{ selected: boolean }>`
  font-size: ${props => props.theme.font.sizes.xlarge};

  color: ${props => props.theme.colors.text};
  padding: 5px 10px;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    border-bottom: 2px solid ${props => props.theme.colors.text};
    transition: transform 0.3s ease-in-out;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }

  ${props =>
    props.selected &&
    css`
      &::after {
        transform: scaleX(1);
        border-color: ${props => props.theme.colors.primary};
      }
    `}
`
