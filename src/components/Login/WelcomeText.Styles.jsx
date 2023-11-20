import styled from 'styled-components'

export const WelcomeMenuContainer = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: center;

  > p {
    color: white;
    font-size: 1vw;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
  }
`
