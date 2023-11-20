import React, { createContext, useContext, useState, useEffect } from 'react'

const FetchDataContext = createContext()

export const useFetchData = () => {
  return useContext(FetchDataContext)
}

export const FetchDataProvider = ({ children }) => {
  const [fetchData, setFetchData] = useState({ data: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchDataFromApi()
  }, [])

  const fetchDataFromApi = async () => {
    try {
      setLoading(true)

      const response = await fetch('http://localhost:4001/api/movies')
      const result = await response.json()
      setFetchData(result)
    } catch (error) {
      console.error('Error fetching data:', error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const postData = async (data) => {
    try {
      const formData = new FormData()

      for (const key in data) {
        formData.append(key, data[key])
      }

      const coverInput = document.querySelector('input[name="cover"]')
      if (coverInput && coverInput.files.length > 0) {
        formData.append('cover', coverInput.files[0])
      }

      const previewInput = document.querySelector('input[name="preview"]')
      if (previewInput && previewInput.files.length > 0) {
        formData.append('preview', previewInput.files[0])
      }

      const response = await fetch('http://localhost:4001/api/movies', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      console.log('POST response:', result)

      fetchDataFromApi()
    } catch (error) {
      console.error('Error posting data:', error)
    }
  }

  const editMovie = async (id, newData) => {
    try {
      const formData = new FormData()

      for (const key in newData) {
        formData.append(key, newData[key])
      }
      const coverInput = document.querySelector('input[name="cover"]')
      if (coverInput && coverInput.files.length > 0) {
        formData.append('cover', coverInput.files[0])
      }

      const previewInput = document.querySelector('input[name="preview"]')
      if (previewInput && previewInput.files.length > 0) {
        formData.append('preview', previewInput.files[0])
      }

      const response = await fetch(`http://localhost:4001/api/movies/${id}`, {
        method: 'PUT',
        body: formData
      })

      const result = await response.json()
      console.log('PUT response:', result)

      fetchDataFromApi()
    } catch (error) {
      console.error('Error editing movie:', error)
    }
  }

  const deleteMovie = async (id) => {
    try {
      const response = await fetch(`http://localhost:4001/api/movies/${id}`, {
        method: 'DELETE'
      })

      const result = await response.json()
      console.log('DELETE response:', result)

      fetchDataFromApi()
    } catch (error) {
      console.error('Error deleting movie:', error)
    }
  }

  const contextValue = {
    fetchData,
    setFetchData,
    postData,
    editMovie,
    deleteMovie,
    error
  }

  return (
    <FetchDataContext.Provider value={contextValue}>
      {children}
    </FetchDataContext.Provider>
  )
}
