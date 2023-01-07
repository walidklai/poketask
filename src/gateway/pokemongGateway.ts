import axios from "axios";
import { IPokemonGateway } from "./interface";

export class PokemonGateway implements IPokemonGateway {
    baseUrl = "https://pokeapi.co/api/v2/pokemon"

    async getPokemonsList() {
        try {
            const result = await axios.get(this.baseUrl)
            return result.data?.results
        } catch (error) {
            console.log({ error })
        }

    }
    async getPokemonInfos(name: string) {
        try {
            const result = await axios.get(`${this.baseUrl}/${name}`)
            return result.data
        } catch (error) {
            console.log({ error })
        }


    };
}