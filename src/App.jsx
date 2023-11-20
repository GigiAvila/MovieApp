import React from 'react'
import { useFetchData } from './context/FetchDataContext'
import MoviePlatform from './components/Platform/MoviePlatform'
import Error from './components/Alert/Error'

function App() {
  const { error } = useFetchData()

  return <>{error ? <Error /> : <MoviePlatform />}</>
}

export default App
