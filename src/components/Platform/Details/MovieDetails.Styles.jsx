import styled from 'styled-components'

export const MovieOverlay = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: relative;
`

export const MovieDetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  inset: 0;
`

export const CloseIconWrapper = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 2.5vw;
    height: auto;

    @media (max-width: 768px) {
      width: 6vw;
      top: 20px;
      right: 10px;
    }
 
    
    
    > img {
      width: 100%;
      height: auto;
    
`

export const MovieInfoContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1vw;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;

  > * {
    color: white;
  }

  > h2 {
    font-size: 3vw;
    font-weight: bold;
    font-family: monospace;

    @media (max-width: 768px) {
      font-size: 8vw;
    }
  }

  > h3 {
    font-size: 1vw;
    color: #f2f2f2;

    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }

  > h5 {
    font-size: 1vw;
    font-weight: 800;
    letter-spacing: 1.2px;

    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }
`

export const MovieResumeContainer = styled.div`
  padding-: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2vw;
  height: 20vh;
  

  > p {
    line-height: 2;
    color: white;
    letter-spacing: 1.4px; 
    font-size: 1.3vw;
    padding: 1vw;

    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
    

    &:nth-child(2) {
    letter-spacing: 1.2px; 
     bottom: 0;
     padding: 0.5vw;
     font-size: 1vw;
     color: #f2f2f2;
     padding: 1vw;
     margin: 0 auto;

     @media (max-width: 768px) {
      font-size: 2vw;
      padding: 2vw;
    }
    }
  }
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5vw;
  padding: 1vw;
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 2vw;
  }
`

export const IconWrapper = styled.div`
  width: 2.5vw;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 5vw;
  }

  > img {
    width: 100%;
    height: auto;
  }
`
