import { IAnunciante } from "../domain/Anunciante";
import { IAnuncianteRepository } from "../domain/AnuncianteRepository";

export class CreateAnunciante {
    constructor(private repository: IAnuncianteRepository) {}

    async execute(datos: Partial<IAnunciante>): Promise<IAnunciante> {
        if (!datos.nombre || !datos.email) {
            throw new Error("El nombre y el email son obligatorios");
        }
        return this.repository.crear(datos);
    }
}