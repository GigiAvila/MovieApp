import styled from 'styled-components'

export const Label = styled.label`
  color: white;
  gap: 1vw;

  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
`

export const LoginInput = styled.input`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 0.8vw;
  padding: 0.3vw;
  margin: 0.3vw;
  border-radius: 3px;

  @media (max-width: 768px) {
    font-size: 1.8vw;
  }
`

export const SubmitButton = styled.button`
  color: white;

  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
`
