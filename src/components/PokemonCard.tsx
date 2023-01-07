import React from "react";
import { useDispatch } from "react-redux";
import { getPokemonDetailsUseCase } from "../core/usecases/getPokemonDetails";
import pokeBall from "../assets/pokeball.png";

interface PokemonCardProps {
  name: string;
  className?: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, className }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getPokemonDetailsUseCase(name) as any);
  };
  return (
    <div onClick={handleClick} className={className}>
      {" "}
      <div className="poke-label">{name}</div>
      <img alt="pokeball" src={pokeBall} className="poke-ball" />
    </div>
  );
};

export default PokemonCard;
