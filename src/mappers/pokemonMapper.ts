import { IPokemon } from "../core/domain/Pokemon";
import { PokemonListDto } from "../gateway/dto/PokemonListDto";

export class PokemonMapper{
    static toDomain(dto:PokemonListDto):IPokemon{
        return {
            name:dto?.name,
        }
    }
}