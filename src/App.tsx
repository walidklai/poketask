import { AnyAction } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./components/Pagination";
import PokemonDetails from "./components/PokemonDetails";
import PokemonList from "./components/PokemonList";
import SearchItem from "./components/SearchItem";
import { getPokemonListUseCase } from "./core/usecases/getPokemonListUseCase";
import { pokemonSelector } from "./store/pokemonSelector";

const App = () => {
  const dispatch = useDispatch();

  const { list, filtered, listStatus, detailStatus, details } =
    useSelector(pokemonSelector);
  useEffect(() => {
    dispatch(getPokemonListUseCase() as any);
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Pokemons</h1>
      <SearchItem />
      <div className="poke-data-container">
        {listStatus === "pending" ? (
          <div>loading ...</div>
        ) : (
          <div className="deck-container">
            <h3>Deck</h3>
            <PokemonList
              className="poke-container"
              list={filtered.length ? filtered : list}
            />
          </div>
        )}
        <hr className="main-hr"/>
        {detailStatus === "loading" ? (
          <div>loading...</div>
        ) : (
          <PokemonDetails className="poke-details" details={details} />
        )}
      </div>
    </div>
  );
};

export default App;
