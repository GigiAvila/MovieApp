import React from 'react'
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ContentContainer
} from './Modal.Styles'

const Modal = ({ title, content, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <ModalHeader>{title}</ModalHeader>
        <ContentContainer>{content}</ContentContainer>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal
