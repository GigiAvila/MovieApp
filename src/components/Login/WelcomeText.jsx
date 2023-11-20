import React from 'react'
import MenuNav from '../Menu/MenuNav'
import { WelcomeMenuContainer } from './WelcomeText.Styles'

const WelcomeText = ({ username, handleLogOut }) => {
  return (
    <WelcomeMenuContainer>
      <p>{username}</p>
      <MenuNav handleLogOut={handleLogOut} />
    </WelcomeMenuContainer>
  )
}

export default WelcomeText
