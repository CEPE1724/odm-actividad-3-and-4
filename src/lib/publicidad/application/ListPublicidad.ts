import { IPublicidad } from "../domain/Publicidad";
import { IPublicidadRepository } from "../domain/PublicidadRepository";

export class ListPublicidad {
    constructor(private repository: IPublicidadRepository) {}

    async execute(): Promise<IPublicidad[]> {
        return this.repository.obtenerTodas();
    }
}
