import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import MovieList from './List/MovieList'
import MoviePreview from './Preview/MoviePreview'
import { useFetchData } from '../../context/FetchDataContext'
import Loader from '../Loader/Loader'
import Logos from '../Logos/Logos'
import MovieDetails from './Details/MovieDetails'

const MoviePlatform = () => {
  const [filter, setFilter] = useState('')
  const [showNavbar, setShowNavbar] = useState(true)
  const { fetchData } = useFetchData()

  const handleMovieSearch = (inputValue) => {
    setFilter(inputValue)
  }

  if (!fetchData.data.length) {
    return <Loader />
  }
  return (
    <>
      <header>
        {showNavbar && <Logos />}
        <Navbar handleMovieSearch={handleMovieSearch} showNavbar={showNavbar} />
      </header>
      <main>
        <MoviePreview />
        <MovieList filter={filter} setShowNavbar={setShowNavbar} />
      </main>
    </>
  )
}

export default MoviePlatform
