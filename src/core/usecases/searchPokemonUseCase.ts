import { AnyAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"
import { IAppState } from "../../store/appState"
import { filterList } from "../../store/pokemonSlice"

export const searchPokemonUseCase = (name: string) => (dispatch: Dispatch<AnyAction>, getState: IAppState) => {
    dispatch(filterList(name))
}