import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useFetchData } from '../../context/FetchDataContext'
import {
  StyledForm,
  StyledLabel,
  Styledselect,
  StyledButton
} from './DeleteMovieForm.Styles'

const DeleteMovieForm = ({ onClose }) => {
  const { fetchData, deleteMovie } = useFetchData()
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const selectedMovie = fetchData.data.find(
      (movie) => movie.name === data.selectedMovie
    )

    if (selectedMovie) {
      console.log(fetchData.data)
      deleteMovie(selectedMovie._id)
    }
    onClose()
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel>
          Select Movie:
          <Controller
            control={control}
            name='selectedMovie'
            render={({ field }) => (
              <Styledselect {...field}>
                {fetchData.data.map((movie) => (
                  <option key={movie._id} value={movie.name}>
                    {movie.name}
                  </option>
                ))}
              </Styledselect>
            )}
          />
        </StyledLabel>
        <StyledButton type='submit'>Delete Movie</StyledButton>
      </StyledForm>
    </>
  )
}

export default DeleteMovieForm
