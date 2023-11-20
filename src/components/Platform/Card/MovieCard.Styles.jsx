import styled from 'styled-components'

export const MovieCategoryContainer = styled.div`
  display: flex;
  gap: 0.5vw;
`

export const Card = styled.div`
  width: 15vw;
  height: 25vw;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 25vw;
    height: 35vw;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`
