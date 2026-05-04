import { IPublicidadRepository } from "../domain/PublicidadRepository";

export class GetPublicidadesConPopulate {
    constructor(private repository: IPublicidadRepository) {}

    async execute(): Promise<any[]> {
        return this.repository.obtenerTodasConPopulate();
    }
}
