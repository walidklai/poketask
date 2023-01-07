import React from 'react'
import { useDispatch } from 'react-redux'
import { getPokemonDetailsUseCase } from '../core/usecases/getPokemonDetails'

interface PokemonCardProps {
    name:string
    className?: string
}

const PokemonCard:React.FC<PokemonCardProps> = ({name,className}) => {
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(getPokemonDetailsUseCase(name) as any)
    }
    return (
        <div className={className} onClick={handleClick}>{name}</div>
    )
}

export default PokemonCard