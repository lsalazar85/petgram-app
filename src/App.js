import React from 'react'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Router } from '@reach/router'

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
            <Router>
              <Home path='/' />
              <Home path='/pet/:id' />
            </Router>
          )
      }
    </div>
  )
}
