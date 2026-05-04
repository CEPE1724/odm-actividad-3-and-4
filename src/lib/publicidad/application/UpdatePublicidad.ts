import { IPublicidad } from "../domain/Publicidad";
import { IPublicidadRepository } from "../domain/PublicidadRepository";

export class UpdatePublicidad {
    constructor(private readonly repository: IPublicidadRepository) {}

    async execute(id: string, changes: Partial<IPublicidad>): Promise<IPublicidad | null> {
        return this.repository.actualizar(id, changes);
    }
}
