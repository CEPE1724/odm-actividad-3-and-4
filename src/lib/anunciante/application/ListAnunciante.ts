import { IAnunciante } from "../domain/Anunciante";
import { IAnuncianteRepository } from "../domain/AnuncianteRepository";

export class ListAnunciante {
    constructor(private repository: IAnuncianteRepository) {}

    async execute(): Promise<IAnunciante[]> {
        return this.repository.obtenerTodas();
    }
}