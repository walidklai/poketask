import React from 'react'
import { IDetails } from '../core/domain/Pokemon'

interface PokemonDetailsProps {
    className?: string
    details: IDetails
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ details, className }) => {
    return (
        <div className={className}>
            <ul>
                <li>id: {details.id}</li>
                <li>name: {details.name}</li>
                <li>weight: {details.weight}</li>
                <li>height: {details.height}</li>
            </ul>
        </div>
    )
}

export default PokemonDetails