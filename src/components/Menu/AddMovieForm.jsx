import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useFetchData } from '../../context/FetchDataContext'
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledButton,
  StyledSelect,
  FormField
} from './AddMovieForm.Styles'

const AddMovieForm = ({ onClose }) => {
  const { fetchData, postData } = useFetchData()
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
      cover: '',
      preview: ''
    }
  })

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

  const scores = [1, 2, 3, 4, 5]

  const onSubmit = async (data) => {
    console.log(data)
    await postData(data)
    onClose()
  }

  return (
    <>
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        enctype='multipart/form-data'
      >
        <FormField>
          <StyledLabel htmlFor='name'>Movie Name:</StyledLabel>
          <StyledInput
            {...register('name', {
              required: { value: true, message: 'Please enter a movie title' }
            })}
            type='text'
          />
          {formState.errors.name && (
            <p style={{ color: 'tomato', fontSize: '0.6vw' }}>
              {formState.errors.name.message}
            </p>
          )}
        </FormField>
        <FormField>
          <StyledLabel htmlFor='genre'>Genre:</StyledLabel>
          <StyledSelect
            {...register('genre', {
              required: {
                value: true,
                message: 'Please select the genre of the movie'
              }
            })}
          >
            <option value=''>Select Genre</option>
            {movieGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </StyledSelect>
          {formState.errors.genre && (
            <p style={{ color: 'tomato', fontSize: '0.6vw' }}>
              {formState.errors.genre.message}
            </p>
          )}
        </FormField>
        <FormField>
          <StyledLabel htmlFor='year'>Year:</StyledLabel>
          <StyledInput
            {...register('year', {
              required: {
                value: true,
                message: 'Please enter the year of launch'
              }
            })}
            type='number'
          />
          {formState.errors.year && (
            <p style={{ color: 'tomato', fontSize: '0.6vw' }}>
              {formState.errors.year.message}
            </p>
          )}
        </FormField>
        <FormField>
          <StyledLabel htmlFor='director'>Director:</StyledLabel>
          <StyledInput
            {...register('director', {
              required: {
                value: true,
                message: 'Please enter the director of this movie'
              }
            })}
            type='text'
          />
          {formState.errors.director && (
            <p style={{ color: 'tomato', fontSize: '0.6vw' }}>
              {formState.errors.director.message}
            </p>
          )}
        </FormField>
        <FormField>
          <StyledLabel htmlFor='actor'>Principal actor or actress:</StyledLabel>
          <StyledInput
            {...register('actor', {
              required: {
                value: true,
                message: 'Please enter the principal actor or actress'
              }
            })}
            type='text'
          />
          {formState.errors.actor && (
            <p style={{ color: 'tomato', fontSize: '0.6vw' }}>
              {formState.errors.actor.message}
            </p>
          )}
        </FormField>
        <FormField>
          <StyledLabel htmlFor='oscar'>Oscar: </StyledLabel>
          <StyledSelect
            {...register('oscar', {
              required: true,
              message: 'Please enter if the movie has won any oscar'
            })}
          >
            <option value=''>-</option>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </StyledSelect>
          {formState.errors.oscar && (
            <p style={{ color: 'tomato', fontSize: '0.6vw' }}>
              {formState.errors.oscar.message}
            </p>
          )}
        </FormField>
        <FormField>
          <StyledLabel htmlFor='score'>Score: </StyledLabel>
          <StyledSelect
            {...register('score', {
              required: true,
              message: 'Please enter a score'
            })}
          >
            {scores.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </StyledSelect>
          {formState.errors.score && (
            <p style={{ color: 'tomato', fontSize: '0.6vw' }}>
              {formState.errors.score.message}
            </p>
          )}
        </FormField>
        <FormField>
          <StyledLabel htmlFor='resume'>Resume:</StyledLabel>
          <StyledTextarea
            {...register('resume', {
              required: {
                value: true,
                message: 'Please enter a resume of this movie'
              },
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
          {formState.errors.resume && (
            <p style={{ color: 'tomato', fontSize: '0.6vw' }}>
              {formState.errors.resume.message}
            </p>
          )}
        </FormField>
        <FormField>
          <StyledLabel htmlFor='cover'>Cover</StyledLabel>
          <StyledInput
            {...register('cover', {
              required: true,
              message: 'Please enter a cover image'
            })}
            type='file'
            name='cover'
          />
          {formState.errors.cover && (
            <p style={{ color: 'tomato', fontSize: '0.6vw' }}>
              {formState.errors.cover.message}
            </p>
          )}
        </FormField>
        <FormField>
          <StyledLabel htmlFor='preview'>Image Preview</StyledLabel>
          <StyledInput
            {...register('preview', {
              required: true,
              message: 'Please enter a preview image'
            })}
            type='file'
            name='preview'
          />
          {formState.errors.preview && (
            <p style={{ color: 'tomato', fontSize: '0.6vw' }}>
              {formState.errors.preview.message}
            </p>
          )}
        </FormField>
        <StyledButton type='submit' disabled={!formState.isDirty}>
          Add Movie
        </StyledButton>
      </StyledForm>
    </>
  )
}

export default AddMovieForm
