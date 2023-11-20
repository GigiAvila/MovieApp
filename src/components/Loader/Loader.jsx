import React from 'react'
import { LoaderOverlay, LoaderWrapper, Square } from './Loader.Styles'

const Loader = () => {
  return (
    <>
      <LoaderOverlay>
        <LoaderWrapper>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </LoaderWrapper>
      </LoaderOverlay>
    </>
  )
}

export default Loader
