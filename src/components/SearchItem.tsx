import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchPokemonUseCase } from '../core/usecases/searchPokemonUseCase'
import { pokemonSelector } from '../store/pokemonSelector'

interface SearchItemProps { }

const SearchItem: React.FC<SearchItemProps> = () => {
  const [searchItem, setSearchItem] = useState("")
  const { list } = useSelector(pokemonSelector)
  const dispatch = useDispatch()

  const handleChange = (e: any) => {
    dispatch(searchPokemonUseCase(e.target.value) as any)
  }
  return (
    <input placeholder='enter a pokemon name' type="text" onChange={handleChange} />
  )
}

export default SearchItem