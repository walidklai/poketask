import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./store/pokemonSlice";
import { PokemonGateway } from "./gateway/pokemongGateway";

export const store = configureStore({
    reducer: pokemonSlice,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: { PokemonGateway }
            }
        })
})