import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: 2;
  padding: 1vw;
  gap: 1vw;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  height: 2vw;
`
