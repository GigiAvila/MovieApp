import React from 'react'
import GithubLogo from '../../assets/github.png'
import LinkedInLogo from '../../assets/linkedin.png'
import { LogoContainer, LogoWrapper, LogoImg, LogoText } from './Logos.Styles'

const Logos = () => {
  return (
    <>
      <LogoContainer>
        <LogoWrapper href='https://github.com/GigiAvila' target='_blank'>
          <LogoImg src={GithubLogo} alt='Github Logo' />
          <LogoText>GitHub Profile</LogoText>
        </LogoWrapper>

        <LogoWrapper
          href='https://www.linkedin.com/in/gisela-avila-203ba33a/'
          target='_blank'
        >
          <LogoImg src={LinkedInLogo} alt='LinkedIn Logo' />
          <LogoText>LinkedIn Profile</LogoText>
        </LogoWrapper>
      </LogoContainer>
    </>
  )
}

export default Logos
