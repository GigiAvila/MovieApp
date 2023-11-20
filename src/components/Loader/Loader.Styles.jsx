import styled, { keyframes } from 'styled-components'

const loaderAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const LoaderOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

export const LoaderWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
`

export const Square = styled.div`
  background: #ddd;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -5px;
  margin-left: -5px;
  animation: ${loaderAnimation} 675ms ease-in-out 0s infinite alternate;

  &:nth-child(2) {
    margin-top: -25px;
    animation-delay: 75ms;
  }

  &:nth-child(3) {
    margin-top: -25px;
    margin-left: 15px;
    animation-delay: 150ms;
  }

  &:nth-child(4) {
    margin-left: -25px;
    animation-delay: 225ms;
  }

  &:nth-child(5) {
    animation-delay: 300ms;
  }

  &:nth-child(6) {
    margin-left: 15px;
    animation-delay: 375ms;
  }

  &:nth-child(7) {
    margin-top: 15px;
    margin-left: -25px;
    animation-delay: 450ms;
  }

  &:nth-child(8) {
    margin-top: 15px;
    animation-delay: 525ms;
  }

  &:nth-child(9) {
    margin-top: 15px;
    margin-left: 15px;
    animation-delay: 600ms;
  }
`
