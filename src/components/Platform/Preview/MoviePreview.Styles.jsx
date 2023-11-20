import styled from 'styled-components'

export const MoviePreviewContainer = styled.section`
  width: 100%;
  height: 85vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    height: 45vh;
  }
`

export const PreviewImageWrapper = styled.div`
  width: 100vw;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: url(${(props) => props.backgroundMovie});
  background-position: top center;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  position: absolute;
  left: 5vw;
  max-width: 80vw;

  @media (max-width: 768px) {
    max-width: 90vw;
  }

  > h3 {
    font-size: 5vw;
    color: white;
    font-weight: bold;
    font-family: Monospace;

    @media (max-width: 768px) {
      font-size: 6vw;
    }
  }

  > h5 {
    font-size: 1.5vw;
    color: white;
    font-weight: 500;
    letter-spacing: 1.5px;
    line-height: 3vw;

    @media (max-width: 768px) {
      font-size: 1.8vw;
      line-height: 3vw;
    }
  }

  > p {
    color: white;
    font-size: 1.2vw;
    font-weight: 800;
    letter-spacing: 1.2px;
    padding-top: 2vw;

    @media (max-width: 768px) {
      font-size: 2vw;
    }
  }
`

export const GenderAndScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;

  > p {
    color: lightblue;
    font-size: 1.5vw;

    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }
`

export const StarContainer = styled.div`
  display: flex;
  gap: 0.3vw;

  > span {
    color: white;
    font-size: 1.5vw;

    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }
`
