import React from 'react'
import { string } from 'prop-types'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export const Detail = ({ detailId }) => (
  <PhotoCardWithQuery id={detailId} />
)

Detail.displayName = 'Detail'

Detail.propTypes = {
  detailId: string.isRequired
}
