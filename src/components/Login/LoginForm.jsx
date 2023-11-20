import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Label, SubmitButton, LoginInput } from './LoginForm.Styles'

const LoginForm = ({ handleOpenLoginForm }) => {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    handleOpenLoginForm(data.username)
  }

  return (
    <>
      <>
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '0.5vw' }}>
          <Label>
            Username:
            <Controller
              control={control}
              name='username'
              render={({ field }) => (
                <LoginInput {...field} type='text' required='true' />
              )}
            />
          </Label>
          <Label>
            Password:
            <Controller
              control={control}
              name='password'
              render={({ field }) => (
                <LoginInput {...field} type='password' required='true' />
              )}
            />
          </Label>
          <SubmitButton type='submit'>Let's go!🍿</SubmitButton>
        </form>
      </>
    </>
  )
}

export default LoginForm
