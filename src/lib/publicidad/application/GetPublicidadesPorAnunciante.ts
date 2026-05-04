import { IPublicidadRepository } from "../domain/PublicidadRepository";


export class GetPublicidadesPorAnunciante {
    constructor(private repository: IPublicidadRepository) {}

    async execute(anuncianteId: string): Promise<any[]> {
        return this.repository.obtenerPorAnunciante(anuncianteId);
    }
}
