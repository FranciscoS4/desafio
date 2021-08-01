import React from 'react'

import {
  HeaderContainer,
  HeaderContent
} from './styles'

export const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <HeaderContent>
        <strong>DESAFIO.ATLÂNTICO</strong>
        <a href="/">Home</a>
      </HeaderContent>
    </HeaderContainer>
  )
}
