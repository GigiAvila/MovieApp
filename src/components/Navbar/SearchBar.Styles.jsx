import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Search = styled.div`
  display: flex;
  gap: 1vw;
  padding: 0.5vw;
  border: ${(props) => (props.isExpanded ? '1px solid white' : 'none')};
  background-color: ${(props) =>
    props.isExpanded ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  transition: border 0.3s ease, background-color 0.3s ease;
  animation: ${(props) => (props.isExpanded ? fadeIn : 'none')} 0.3s ease;
`

export const Label = styled.label``

export const Input = styled.input`
  background-color: transparent;
  color: white;
  width: 20vw;
  cursor: pointer;
  outline: none;

  &::placeholder {
    color: white;

    @media (max-width: 768px) {
      font-size: 2vw;
    }
  }
`
