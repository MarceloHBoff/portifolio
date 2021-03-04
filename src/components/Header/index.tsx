import Logo from '../../../public/logo.svg'

import { Container, Menu, Menus } from './styles'

const Header = () => {
  return (
    <Container>
      <Logo />

      <Menus>
        <Menu>Projetos</Menu>
        <Menu>Sobre</Menu>
        <Menu>Contato</Menu>
      </Menus>
    </Container>
  )
}

export default Header
