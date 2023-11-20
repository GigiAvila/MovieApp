import styled from 'styled-components'

export const MovieListSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  gap: 3vw;
  z-index: 1;
`
export const MovieCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  align-items: flex-start;
  padding: 1vw 1vw 1vw 5vw;
  width: 100vw;
  height: auto;
  position: relative;
`

export const MovieCategoryTitle = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: center;

  > h5 {
    color: white;
    font-size: 1.2vw;

    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }
`

export const List = styled.div`
  height: auto;
  margin: 0 auto;
  position: relative;
`
