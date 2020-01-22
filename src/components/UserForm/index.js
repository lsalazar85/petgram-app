import React from 'react'
import { func, string } from 'prop-types'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const _handleSubmit = event => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={_handleSubmit}>
        <Input
          type='email'
          placeholder='Email'
          {...email}
        />
        <Input
          type='password'
          placeholder='Password'
          {...password}
        />
        <Button>Login</Button>
      </Form>
    </>
  )
}

UserForm.displayName = 'UseForm'

UserForm.propTypes = {
  onSubmit: func.isRequired,
  title: string.isRequired
}
