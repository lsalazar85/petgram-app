import React from 'react'
import Context from '../context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => (
          <>
            <RegisterMutation>
              {
                (register) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  return <UserForm title='Registrarse' onSubmit={onSubmit} />
                }
              }
            </RegisterMutation>
            <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
          </>
        )
      }
    </Context.Consumer>
  )
}

NotRegisterUser.displayName = 'NotRegisterUser'
