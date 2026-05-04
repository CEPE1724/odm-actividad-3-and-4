import { IPublicidad } from "../domain/Publicidad";
import { IPublicidadRepository } from "../domain/PublicidadRepository";

export class CreatePublicidad {
    constructor(private repository: IPublicidadRepository) {}

    async execute(datos: Partial<IPublicidad>): Promise<IPublicidad> {
        if (!datos.titulo || !datos.anuncianteId || !datos.categoriaId) {
            throw new Error("El titulo, anuncianteId y categoriaId son obligatorios");
        }
        return this.repository.crear(datos);
    }
}
