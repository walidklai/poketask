import { AnyAction } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch } from "react"
import { IPokemonGateway } from "../../gateway/interface"
import { PokemonGateway } from "../../gateway/pokemongGateway"
import { PokemonMapper } from "../../mappers/pokemonMapper"
import { IAppState } from "../../store/appState"
import { pokemonListFailed, pokemonListPending, pokemonListSucceeded } from "../../store/pokemonSlice"

export const getPokemonListUseCase = () => async (dispatch: Dispatch<AnyAction>, getState: IAppState, extraArgument: { gateway: PokemonGateway }) => {
    const { gateway } = extraArgument
    try {
        dispatch(pokemonListPending())
        const list = await gateway.getPokemonsList()
        const pokemonsList = list?.map((pokemon: any) => PokemonMapper.toDomain(pokemon))
        dispatch(pokemonListSucceeded(pokemonsList))

    } catch (error) {
        dispatch(pokemonListFailed)

    }
}