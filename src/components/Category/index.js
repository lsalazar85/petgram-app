import React from 'react'
import { string } from 'prop-types'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)

Category.displayName = 'Category'

Category.propTypes = {
  cover: string.isRequired,
  path: string.isRequired,
  emoji: string.isRequired
}
