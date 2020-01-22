import { node } from 'prop-types'

export const UserLogged = ({ children }) => (
  children({ isAuth: false })
)

UserLogged.displayName = 'UserLogged'

UserLogged.propTypes = {
  children: node.isRequired
}
