import React from 'react'
import { Router } from '@reach/router'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import Context from './context'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <>
              <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' />
              </Router>
              <Context.Consumer>
                {
                  ({ isAuth }) =>
                    isAuth ? (
                      <Router>
                        <Favs path='/favs' />
                        <User path='/user' />
                      </Router>
                    ) : (
                      <Router>
                        <NotRegisterUser path='/favs' />
                        <NotRegisterUser path='/user' />
                      </Router>
                    )
                }
              </Context.Consumer>
            </>
          )
      }
      <NavBar />
    </div>
  )
}
