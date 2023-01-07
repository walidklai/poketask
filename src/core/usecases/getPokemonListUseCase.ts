import axios from "axios"
import { PokemonMapper } from "../../mappers/pokemonMapper"
import { pokemonListFailed, pokemonListPending, pokemonListSucceeded } from "../../store/pokemonSlice"

export const getPokemonListUseCase = () => async (dispatch: any, getState: any) => {
    try {
        dispatch(pokemonListPending())
        const list = await axios.get("https://pokeapi.co/api/v2/pokemon")
        const pokemonsList = list.data.results.map((pokemon: any) => PokemonMapper.toDomain(pokemon))
        dispatch(pokemonListSucceeded(pokemonsList))

    } catch (error) {
        dispatch(pokemonListFailed)

    }
}