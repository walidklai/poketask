import axios from "axios"
import { PokemonDetailsMapper } from "../../mappers/pokemonDetailsMapper"
import { pokemonDetailsFailed, pokemonDetailsPending, pokemonDetailsSucceeded } from "../../store/pokemonSlice"

export const getPokemonDetailsUseCase = (name: string) => async (dispatch: any, getState: any) => {
    try {
        dispatch(pokemonDetailsPending())
        if (!name) {
            throw new Error("no pokemon name")
        }
        const details = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)

        const pokemonDetails = PokemonDetailsMapper.toDomain(details.data)

        dispatch(pokemonDetailsSucceeded(pokemonDetails))
    } catch (error) {
        dispatch(pokemonDetailsFailed())
    }
}