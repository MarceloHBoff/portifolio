import { NextRouter } from 'next/dist/client/router'

import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

import Menu from './Menu'
import * as S from './styles'

type HeaderProps = {
  router: NextRouter
}

export default function Header({ router }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <MediaMatch lessThan="large">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <FaBars aria-label="Open Menu" />
        </S.IconWrapper>

        <Logo size="small" id="small_logo" />
      </MediaMatch>

      <MediaMatch lessThan="large">
        <Menu router={router} isOpen={isOpen} setIsOpen={setIsOpen} />
      </MediaMatch>

      <MediaMatch greaterThan="large">
        <Logo size="normal" />
      </MediaMatch>

      <MediaMatch greaterThan="large">
        <Menu router={router} />
      </MediaMatch>
    </S.Container>
  )
}
