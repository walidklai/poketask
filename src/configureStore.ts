import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./store/pokemonSlice";
import { PokemonGateway } from "./gateway/pokemongGateway";

//toggles depending on the env, if its for testing we might inject an inMemory gateway with fake calls

const gateway = new PokemonGateway()

export const store = configureStore({
    reducer: pokemonSlice,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: { gateway }
            }
        })
})