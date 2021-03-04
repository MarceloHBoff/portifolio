import styled from 'styled-components'

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

export const Menu = styled.div``
