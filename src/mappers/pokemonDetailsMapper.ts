import { IDetails } from "../core/domain/Pokemon";
import { PokemonDetailsDto } from "../gateway/dto/PokemonDetailDto";

export class PokemonDetailsMapper {
    static toDomain(dto: PokemonDetailsDto): IDetails {
        return {
            name: dto?.name,
            height: dto?.height,
            id: dto?.id,
            weight: dto?.weight
        }
    }
}