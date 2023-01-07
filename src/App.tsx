import { AnyAction } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PokemonDetails from './components/PokemonDetails'
import PokemonList from './components/PokemonList'
import SearchItem from './components/SearchItem'
import { getPokemonListUseCase } from './core/usecases/getPokemonListUseCase'
import { pokemonSelector } from './store/pokemonSelector'

const App = () => {
  const dispatch = useDispatch()

  const { list, filtered, listStatus, detailStatus, details } = useSelector(pokemonSelector)
  useEffect(() => {
    dispatch(getPokemonListUseCase() as any)
  }, [])

  return (
    <div>
      <h1>Pokemons</h1>
      <SearchItem />
      <hr />
      {listStatus === "pending" ? <div>loading ...</div> : <PokemonList className='poke-container' list={filtered.length ? filtered : list} />}
      <hr />
      <h2>Details:</h2>
      {detailStatus === "loading" ? <div>loading...</div> : <PokemonDetails details={details} />}
    </div>

  )
}

export default App