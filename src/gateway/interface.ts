import { IDetails, IPokemon } from "../core/domain/Pokemon"

export interface IPokemonGateway {
    getPokemonsList: () => Promise<IPokemon[]>
    getPokemonInfos: (name: string) => Promise<IDetails>
}