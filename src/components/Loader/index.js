import React from 'react'
import LoadOverlay from 'react-loading-retry-overlay'
import { LoaderContent } from './styles'

export const Loader = () => (
  <LoaderContent>
    <LoadOverlay loading />
  </LoaderContent>
)

Loader.displayName = 'Loader'
