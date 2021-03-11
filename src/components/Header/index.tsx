import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

import Logo from '../../../public/logo.svg'

import { Container, Menu, Menus } from './styles'

const Header = () => {
  const router = useRouter()

  return (
    <Container>
      <Logo />

      <Menus>
        <Link href="/">
          <Menu selected={router.pathname === '/'}>Projetos</Menu>
        </Link>
        <Link href="/whoIAm">
          <Menu selected={router.pathname === '/whoIAm'}>Sobre</Menu>
        </Link>
        <Link href="/contact">
          <Menu selected={router.pathname === '/contact'}>Contato</Menu>
        </Link>
      </Menus>
    </Container>
  )
}

export default Header
