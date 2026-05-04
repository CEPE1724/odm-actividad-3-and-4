import { IPublicidadRepository } from "../domain/PublicidadRepository";

export class DeletePublicidad {
    constructor(private repository: IPublicidadRepository) {}

    async execute(id: string): Promise<boolean> {
        const deletedPublicidad = await this.repository.eliminar(id);
        return deletedPublicidad !== null;
    }
}
