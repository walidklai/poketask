import { createSlice } from "@reduxjs/toolkit";
import { IPokemon } from "../core/domain/Pokemon";

const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: {
        listStatus: "idle",
        detailStatus: "idle",
        list: [] as IPokemon[],
        filtered: [] as IPokemon[],
        details: {}
    },
    reducers: {
        pokemonListPending: (state) => { state.listStatus = "pending" },
        pokemonListSucceeded: (state, actions) => {
            state.listStatus = "success"
            state.list = actions.payload
        },
        pokemonListFailed: (state) => {
            state.listStatus = "failed"
            state.list = []
        },

        pokemonDetailsPending: (state) => { state.detailStatus = "pending" },
        pokemonDetailsSucceeded: (state, actions) => {
            state.detailStatus = "success"
            state.details = actions.payload
        },
        pokemonDetailsFailed: (state) => {
            state.detailStatus = "failed"
            state.details = []
        },
        filterList: (state, actions) => {
            const searchKey = actions.payload.trim()
            const filteredList = state.list.filter(pokemon => pokemon.name.includes(searchKey))
            state.filtered = filteredList
        }
    }
})

export const { pokemonListPending, pokemonListSucceeded, pokemonListFailed, pokemonDetailsFailed, pokemonDetailsPending, pokemonDetailsSucceeded, filterList } = pokemonSlice.actions
export default pokemonSlice.reducer