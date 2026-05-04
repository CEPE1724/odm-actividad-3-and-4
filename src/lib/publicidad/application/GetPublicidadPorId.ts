import { IPublicidadRepository } from "../domain/PublicidadRepository";


export class GetPublicidadPorId {
    constructor(private repository: IPublicidadRepository) {}

    async execute(id: string): Promise<any> {
        const publicidad = await this.repository.obtenerPorIdConPopulate(id);
        if (!publicidad) throw new Error(`Publicidad con id ${id} no encontrada`);
        return publicidad;
    }
}
