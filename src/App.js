import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/containers/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <div>
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}
