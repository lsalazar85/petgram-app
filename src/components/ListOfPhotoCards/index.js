import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { ListPhotos, ItemsPhotos } from './styles'

export const ListOfPhotoCards = () => (
  <ListPhotos>
    {
      [1, 2, 3, 4, 5].map(id => {
        return (
          <ItemsPhotos key={id}>
            <PhotoCard />
          </ItemsPhotos>
        )
      })
    }
  </ListPhotos>
)

ListOfPhotoCards.displayName = 'ListOfPhotoCards'