import { IPublicidad } from "../domain/Publicidad";
import { IPublicidadRepository } from "../domain/PublicidadRepository";


export class RegistrarClicPublicidad {
    constructor(private repository: IPublicidadRepository) {}

    async execute(id: string): Promise<IPublicidad> {
        const publicidad = await this.repository.registrarClic(id);
        if (!publicidad) throw new Error(`Publicidad con id ${id} no encontrada`);
        return publicidad;
    }
}
