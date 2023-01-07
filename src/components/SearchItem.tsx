import React from "react";
import { useDispatch } from "react-redux";
import { searchPokemonUseCase } from "../core/usecases/searchPokemonUseCase";

interface SearchItemProps {}

const SearchItem: React.FC<SearchItemProps> = () => {
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    dispatch(searchPokemonUseCase(e.target.value) as any);
  };
  return (
    <input
      placeholder="enter a pokemon name"
      type="text"
      onChange={handleChange}
      className="search-style"
    />
  );
};

export default SearchItem;
