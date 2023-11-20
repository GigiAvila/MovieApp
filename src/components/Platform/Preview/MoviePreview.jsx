import React, { useState, useEffect } from 'react'
import {
  MoviePreviewContainer,
  PreviewImageWrapper,
  StarContainer,
  MovieInfoContainer,
  GenderAndScoreWrapper
} from './MoviePreview.Styles'
import { useFetchData } from '../../../context/FetchDataContext'

const getStarIcons = (score) => {
  const stars = []

  for (let i = 0; i < score; i++) {
    stars.push(<span key={i}>&#9733;</span>)
  }

  return stars
}

const MoviePreview = () => {
  const { fetchData } = useFetchData()
  const [moviePreview, setMoviePreview] = useState('')

  const changePreview = () => {
    const randomMovie =
      fetchData.data[Math.floor(Math.random() * fetchData.data.length)]

    setMoviePreview(randomMovie)
  }

  const startInterval = () => {
    changePreview()
    const intervalId = setInterval(() => {
      changePreview()
    }, 5000)

    return () => clearInterval(intervalId)
  }

  useEffect(() => {
    startInterval()
  }, [])

  const backgroundMovie = moviePreview.preview
  const genreMovie = moviePreview.genre
  const scoreMovie = moviePreview.score
  const titleMovie = moviePreview.name
  const resumeMovie = moviePreview.resume
  const actorMovie = moviePreview.actor
  const directorMovie = moviePreview.director

  return (
    <MoviePreviewContainer>
      <PreviewImageWrapper
        backgroundMovie={backgroundMovie}
      ></PreviewImageWrapper>
      <MovieInfoContainer>
        <GenderAndScoreWrapper>
          <p>{genreMovie}</p>
          <StarContainer>{getStarIcons(scoreMovie)}</StarContainer>
        </GenderAndScoreWrapper>
        <h3>{titleMovie}</h3>
        <h5>{resumeMovie}</h5>
        <p>
          {directorMovie} | {actorMovie}
        </p>
      </MovieInfoContainer>
    </MoviePreviewContainer>
  )
}

export default MoviePreview
