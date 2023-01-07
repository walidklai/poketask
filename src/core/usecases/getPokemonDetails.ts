import { AnyAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"
import { PokemonGateway } from "../../gateway/pokemongGateway"
import { PokemonDetailsMapper } from "../../mappers/pokemonDetailsMapper"
import { IAppState } from "../../store/appState"
import { pokemonDetailsFailed, pokemonDetailsPending, pokemonDetailsSucceeded } from "../../store/pokemonSlice"

export const getPokemonDetailsUseCase = (name: string) => async (dispatch: Dispatch<AnyAction>, getState: IAppState, extraArgument: { gateway: PokemonGateway }) => {
    const { gateway } = extraArgument
    try {
        dispatch(pokemonDetailsPending())
        if (!name) {
            throw new Error("no pokemon name")
        }
        const details = await gateway.getPokemonInfos(name)

        const pokemonDetails = PokemonDetailsMapper.toDomain(details)

        dispatch(pokemonDetailsSucceeded(pokemonDetails))
    } catch (error) {
        dispatch(pokemonDetailsFailed())
    }
}