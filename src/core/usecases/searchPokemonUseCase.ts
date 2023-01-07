import { filterList } from "../../store/pokemonSlice"

export const searchPokemonUseCase = (name: string) => (dispatch: any, getState: any) => {
    dispatch(filterList(name))
}