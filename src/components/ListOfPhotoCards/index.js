import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { ListPhotos, ItemsPhotos } from './styles'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ListPhotos>
      {
        photos.map(photo => {
          return (
            <ItemsPhotos key={photo.id}>
              <PhotoCard {...photo} />
            </ItemsPhotos>
          )
        })
      }
    </ListPhotos>
  )
}

ListOfPhotoCardsComponent.displayName = 'ListOfPhotoCardsComponent'
