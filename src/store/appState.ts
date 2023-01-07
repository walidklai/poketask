import { IDetails, IPokemon } from "../core/domain/Pokemon"

export interface IAppState {
    listStatus: string
    detailStatus: string
    list: IPokemon[]
    details: IDetails
    filtered: IPokemon[]
}