import React from 'react'
import { LogginButton, LogginIcon } from '../Login/LoginButton.Styles'
import UserIcon from '../../assets/user.png'

const LoginButton = ({ handleOpenLoginForm }) => {
  return (
    <LogginButton onClick={handleOpenLoginForm}>
      <LogginIcon src={UserIcon} alt='user Icon' />
    </LogginButton>
  )
}

export default LoginButton
