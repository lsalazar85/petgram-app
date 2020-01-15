import React from 'react'
import { List, Item } from './styles'
import { Category } from '../Category'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => (
  <List>
    {
      categories.map(category => (
        <Item key={category.id}>
          <Category
            emoji={category.emoji}
            path={category.path}
            cover={category.cover}
          />
        </Item>
      ))
    }
  </List>
)

ListOfCategories.displayName = 'ListOfCategories'
