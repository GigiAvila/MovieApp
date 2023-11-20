import styled from 'styled-components'

export const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  width: 25vw;
`
export const FormField = styled.fieldset``

export const StyledLabel = styled.label`
  display: block;
  display: flex;
  flex-direction: column;
  gap: 0.2vw;
  font-size: 0.8vw;
`

export const StyledSelect = styled.select`
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 4px;
  height: 1.9vw;
`

export const StyledInput = styled.input`
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 4px;
  height: 1.8vw;
`

export const StyledTextarea = styled.textarea`
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 4px;
  height: 4vw;
`

export const StyledButton = styled.button`
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 7vw;
  align-self: flex-end;
  font-size: 1vw;

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`
