import { PokemonListDto } from "./dto/PokemonListDto"

export interface IPokemonGateway{
    getPokemonsList:()=>Promise<PokemonListDto[]>
    getPokemonInfos:(name:string)=>Promise<any>
}