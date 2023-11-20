import React, { useState } from 'react'
import MovieCard from '../Card/MovieCard'
import { useFetchData } from '../../../context/FetchDataContext'
import {
  MovieListSection,
  List,
  MovieCategory,
  MovieCategoryTitle
} from './MovieList.Styles'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'

const MovieList = ({ filter, setShowNavbar }) => {
  const { fetchData } = useFetchData()

  const [sliderArrows, setSliderArrows] = useState([
    { left: false, right: false },
    { left: false, right: false },
    { left: false, right: false },
    { left: false, right: false }
  ])
  const [sliderPositions, setSliderPositions] = useState([0, 0, 0, 0])

  const categories = [
    {
      title: 'Classics of all times',
      movies: fetchData.data
    },
    {
      title: 'New releases',
      movies: fetchData.data
        .filter((movie) => movie.year >= 2000)
        .sort((a, b) => b.year - a.year)
    },
    {
      title: 'Top-rated',
      movies: fetchData.data
        .filter((movie) => movie.score >= 4)
        .sort((a, b) => b.score - a.score)
    },
    {
      title: 'Oscar Winners',
      movies: fetchData.data.filter((movie) => movie.oscar === true)
    }
  ]

  const handleMouseEnter = (index) => {
    setSliderArrows((prevArrows) =>
      prevArrows.map((arrows, i) =>
        i === index ? { ...arrows, right: true } : arrows
      )
    )
  }

  const handleMouseLeave = (index) => {
    setSliderArrows((prevArrows) =>
      prevArrows.map((arrows, i) =>
        i === index ? { ...arrows, right: false, left: false } : arrows
      )
    )
  }

  const handleShowArrowClick = (index) => {
    setSliderArrows((prevArrows) =>
      prevArrows.map((arrows, i) =>
        i === index ? { ...arrows, left: true } : arrows
      )
    )
  }

  const handleArrowClick = (index, direction) => {
    const categoryLength = categories[index].movies.length
    const currentPosition = sliderPositions[index]

    let newPosition

    if (direction === 'right') {
      newPosition = currentPosition - 15
      if (newPosition < -15 * (categoryLength - 5)) {
        newPosition = 0
      }
    } else if (direction === 'left') {
      newPosition = currentPosition + 15
      if (newPosition > 0) {
        newPosition = -15 * (categoryLength - 5)
      }
    }

    setSliderPositions((prevPositions) =>
      prevPositions.map((position, i) => (i === index ? newPosition : position))
    )
  }

  return (
    <MovieListSection>
      {categories.map((category, index) => (
        <MovieCategory
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onClick={() => handleShowArrowClick(index)}
        >
          <MovieCategoryTitle>
            <h5>
              {category.title}
              <ChevronRightIcon boxSize={8} color='white' />
            </h5>
          </MovieCategoryTitle>
          <ChevronLeftIcon
            boxSize={20}
            color='white'
            position='absolute'
            zIndex={2}
            left={0}
            top='43%'
            style={{ display: sliderArrows[index].left ? 'flex' : 'none' }}
            onClick={() => handleArrowClick(index, 'left')}
          />
          <List
            style={{
              transform: `translateX(${sliderPositions[index]}vw)`,
              transition: 'transform 1s ease-in-out'
            }}
          >
            <MovieCard
              movies={category.movies}
              filter={filter}
              setShowNavbar={setShowNavbar}
            />
          </List>
          <ChevronRightIcon
            boxSize={20}
            color='white'
            position='absolute'
            zIndex={2}
            right={0}
            top='43%'
            style={{ display: sliderArrows[index].right ? 'flex' : 'none' }}
            onClick={() => handleArrowClick(index, 'right')}
          />
        </MovieCategory>
      ))}
    </MovieListSection>
  )
}

export default MovieList
