import React from 'react'
import PokemonCard from './PokemonCard';

interface PokemonListProps {
    className?: string;
    list: any[]
}

const PokemonList: React.FC<PokemonListProps> = ({ className, list }) => {
    return (
        <div className={className}>{list.map(pokemon => (<PokemonCard name={pokemon.name} className="poke-card"/>))}</div>
    )
}

export default PokemonList