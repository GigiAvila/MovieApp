import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useFetchData } from '../../context/FetchDataContext'
import {
  StyledForm,
  StyledLabel,
  StyledSelect,
  StyledInput,
  StyledTextarea,
  StyledButton,
  FormField
} from './EditMovieForm.Styles'

const EditMovieForm = ({ onClose }) => {
  const { fetchData, editMovie } = useFetchData()
  const [showForm, setShowForm] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState('')
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      name: '',
      genre: '',
      year: '',
      director: '',
      actor: '',
      oscar: '',
      score: '',
      resume: '',
      cover: ''
    }
  })
  const scores = [1, 2, 3, 4, 5]

  const movieGenres = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Film Noir',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Sport',
    'Superhero',
    'Thriller',
    'War',
    'Western'
  ]

  const onSubmit = (data) => {
    console.log('sending info...')
    console.log('This is the information I want to change', data)

    const movieToUpdate = fetchData.data.find(
      (movie) => movie.name === selectedMovie
    )

    if (movieToUpdate) {
      console.log(
        'this is the original movie information to update:',
        movieToUpdate
      )

      const newData = {
        name: data.name !== '' ? data.name : movieToUpdate.name,
        genre: data.genre !== '' ? data.genre : movieToUpdate.genre,
        year: data.year !== '' ? data.year : movieToUpdate.year,
        director: data.director !== '' ? data.director : movieToUpdate.director,
        actor: data.actor !== '' ? data.actor : movieToUpdate.actor,
        oscar: data.oscar !== '' ? data.oscar === 'true' : movieToUpdate.oscar,
        resume: data.resume !== '' ? data.resume : movieToUpdate.resume,
        cover: data.cover !== '' ? data.cover : movieToUpdate.cover,
        score: data.score !== '' ? data.score : movieToUpdate.score,
        preview: data.preview !== '' ? data.preview : movieToUpdate.preview
      }

      const movieMerged = { ...movieToUpdate, ...newData }

      console.log('this is the final merge:', movieMerged)
      editMovie(movieMerged._id, movieMerged)
      onClose()
    }
  }

  const handleSelectChange = (e) => {
    setSelectedMovie((prevSelectedMovie) => {
      console.log('selected movie', e.target.value)
      setShowForm(true)
      return e.target.value
    })
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {!showForm && (
        <FormField>
          <StyledLabel>Select Movie:</StyledLabel>
          <StyledSelect
            {...register('selectedMovie')}
            onChange={handleSelectChange}
          >
            <option value=''>Select a Movie</option>
            {fetchData.data.map((movie) => (
              <option key={movie._id} value={movie.name}>
                {movie.name}
              </option>
            ))}
          </StyledSelect>
        </FormField>
      )}
      {showForm && (
        <>
          <FormField>
            <StyledLabel htmlFor='name'>Name:</StyledLabel>
            <StyledInput {...register('name')} type='text' />
          </FormField>
          <FormField>
            <StyledLabel htmlFor='genre'>Genre:</StyledLabel>
            <StyledSelect {...register('genre')}>
              <option value=''>Select Genre</option>
              {movieGenres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </StyledSelect>
          </FormField>
          <FormField>
            <StyledLabel htmlFor='year'>Year:</StyledLabel>
            <StyledInput {...register('year')} type='number' />
          </FormField>
          <FormField>
            <StyledLabel htmlFor='director'>Director:</StyledLabel>
            <StyledInput {...register('director')} type='text' />
          </FormField>
          <FormField>
            <StyledLabel htmlFor='actor'>
              Principal actor or actress:
            </StyledLabel>
            <StyledInput {...register('actor')} type='text' />
          </FormField>
          <FormField>
            <StyledLabel htmlFor='oscar'>Oscar:</StyledLabel>
            <StyledSelect {...register('oscar')}>
              <option value=''>-</option>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </StyledSelect>
          </FormField>
          <FormField>
            <StyledLabel htmlFor='score'>Score:</StyledLabel>
            <StyledSelect {...register('score')}>
              {scores.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </StyledSelect>
          </FormField>
          <FormField>
            <StyledLabel htmlFor='resume'>Resume:</StyledLabel>
            <StyledTextarea
              {...register('resume', {
                minLength: {
                  value: 15,
                  message: 'The resume needs to have at least 15 characters'
                },
                maxLength: {
                  value: 300,
                  message: 'The resume needs to have less than 300 characters'
                }
              })}
            ></StyledTextarea>
          </FormField>
          <FormField>
            <StyledLabel htmlFor='cover'>Cover:</StyledLabel>
            <StyledInput {...register('cover')} type='file' name='cover' />
          </FormField>
          <FormField>
            <StyledLabel htmlFor='preview'>Image Preview: </StyledLabel>
            <StyledInput {...register('preview')} type='file' name='preview' />
          </FormField>
          <StyledButton type='submit' disabled={!formState.isDirty}>
            Edit Movie
          </StyledButton>
        </>
      )}
    </StyledForm>
  )
}

export default EditMovieForm
