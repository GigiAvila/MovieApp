import React, { useState } from 'react'
import { Search, Label, Input } from './SearchBar.Styles'
import { Search2Icon } from '@chakra-ui/icons'

const SearchBar = ({ handleMovieSearch }) => {
  const [movieSearch, setMovieSearch] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSearchChange = (e) => {
    setMovieSearch(e.target.value)
    handleMovieSearch(e.target.value)
  }

  const handleIconClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Search isExpanded={isExpanded}>
      <Search2Icon boxSize={7} color='white' onClick={handleIconClick} />
      {isExpanded && (
        <Label>
          <Input
            type='text'
            placeholder='Look for a title'
            value={movieSearch}
            onChange={handleSearchChange}
          />
        </Label>
      )}
    </Search>
  )
}

export default SearchBar
