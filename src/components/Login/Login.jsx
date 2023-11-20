import React, { useState } from 'react'
import LoginForm from './LoginForm'
import LoginButton from './LoginButton'
import WelcomeText from './WelcomeText'

const Login = ({}) => {
  const [isLogging, setIsLogging] = useState(false)
  const [showWelcomeText, setWelcomeText] = useState(false)
  const [username, setUsername] = useState('')

  const handleOpenLoginForm = (formUsername) => {
    setUsername(formUsername)
    setIsLogging(!isLogging)
    setWelcomeText(true)
  }

  const handleLogOut = () => {
    console.log('logging out')
    setUsername(null)
    setIsLogging(false)
    setWelcomeText(false)
  }

  return (
    <>
      {isLogging ? (
        <LoginForm handleOpenLoginForm={handleOpenLoginForm} />
      ) : showWelcomeText ? (
        <WelcomeText username={username} handleLogOut={handleLogOut} />
      ) : (
        <LoginButton handleOpenLoginForm={handleOpenLoginForm} />
      )}
    </>
  )
}

export default Login
