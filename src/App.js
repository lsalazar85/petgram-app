import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => {
  return (
    <div>
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}
