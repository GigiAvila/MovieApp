import styled from 'styled-components'

export const LogoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: auto;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoWrapper = styled.a`
  margin: 0.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
`

export const LogoImg = styled.img`
  width: 2vw;
  height: auto;

  @media (max-width: 768px) {
    width: 4vw;
  }
`

export const LogoText = styled.span`
  color: white;
  font-size: 0.6vw;
  margin-top: 0.5vw;

  @media (max-width: 768px) {
    font-size: 1.5vw;
  }
`
