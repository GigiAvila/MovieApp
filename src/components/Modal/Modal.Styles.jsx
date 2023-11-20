import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const ModalHeader = styled.h2`
  font-size: 2vw;
  margin-bottom: 0.5vw;
`
export const CloseButton = styled.button`
  padding: 7px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 4vw;
  align-self: flex-end;
`

export const ContentContainer = styled.div`
  overflow: hidden;
`
