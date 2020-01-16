/* eslint-disable react/jsx-fragments */
import React, { useEffect, useState } from 'react'
import { List, Item } from './styles'
import { Category } from '../Category'
import { Loader } from '../Loader'
import { URL_API_CATEGORIES } from '../../constans'

// Custom Hook fetch categories data
function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch(`${URL_API_CATEGORIES}`)
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const _renderListCategories = fixed => (
    <List fixed={fixed}>
      {
        loading
          ? <Loader />
          : categories.map(category =>
            <Item key={category.id}>
              <Category {...category} />
            </Item>)
      }
    </List>
  )
  return (
    <React.Fragment>
      {_renderListCategories()}
      {showFixed && _renderListCategories(true)}
    </React.Fragment>
  )
}

ListOfCategories.displayName = 'ListOfCategories'
