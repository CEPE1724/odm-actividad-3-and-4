import { IPublicidadRepository } from "../domain/PublicidadRepository";


export class GetPublicidadesPorCategoria {
    constructor(private repository: IPublicidadRepository) {}

    async execute(categoriaId: string): Promise<any[]> {
        return this.repository.obtenerPorCategoria(categoriaId);
    }
}
