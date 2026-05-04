import {IAnuncianteRepository} from "../domain/AnuncianteRepository";

export class DeleteAnunciante {
    constructor(private repository: IAnuncianteRepository) {}

    async execute(id: string): Promise<boolean> {
        const deletedAnunciante = await this.repository.eliminar(id);
        return deletedAnunciante !== null;
    }
}
