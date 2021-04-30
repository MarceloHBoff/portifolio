import { NextRouter } from 'next/dist/client/router'
import Link from 'next/link'

import { useCallback } from 'react'

import { Container, MenuItem } from './styles'

type MenuProps = {
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  router: NextRouter
}

export default function Menu({ isOpen = true, setIsOpen, router }: MenuProps) {
  const handleClick = useCallback(() => {
    if (setIsOpen) setIsOpen(false)
  }, [setIsOpen])

  return (
    <Container isOpen={isOpen} onClick={handleClick}>
      <Link href="/">
        <MenuItem selected={router.pathname === '/'}>Projetos</MenuItem>
      </Link>
      <Link href="/whoIAm">
        <MenuItem selected={router.pathname === '/whoIAm'}>Sobre</MenuItem>
      </Link>
      <Link href="/contact">
        <MenuItem selected={router.pathname === '/contact'}>Contato</MenuItem>
      </Link>
    </Container>
  )
}
