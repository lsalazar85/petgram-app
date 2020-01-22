import React from 'react'
import { isEmpty } from 'lodash'
import { PhotoCard } from '../PhotoCard'
import { Loader } from '../Loader'
import { ListPhotos, ItemsPhotos } from './styles'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ListPhotos>
      {
        isEmpty(photos) ? <Loader loading />
          : (
            photos.map(photo => {
              return (
                <ItemsPhotos key={photo.id}>
                  <PhotoCard {...photo} />
                </ItemsPhotos>
              )
            })
          )
      }
    </ListPhotos>
  )
}

ListOfPhotoCardsComponent.displayName = 'ListOfPhotoCardsComponent'
