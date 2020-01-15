import React, { useEffect, useState } from 'react'
import { List, Item } from './styles'
import { Category } from '../Category'
import { URL_API_CATEGORIES } from '../../constans'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    try {
      window.fetch(`${URL_API_CATEGORIES}`)
        .then(res => res.json())
        .then(response => {
          setCategories(response)
        })
    } catch (e) {
      console.log(e)
    }
  }, [])
  
  const _renderListCategories = fixed => (
    <List className={fixed ? 'fixed' : ''}>
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

  return (
    _renderListCategories(true)
  )
}

ListOfCategories.displayName = 'ListOfCategories'
