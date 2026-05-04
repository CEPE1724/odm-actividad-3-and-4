import { ICategoriaRepository } from "../domain/CategoriaRepository";

export class DeleteCategoria {
    constructor(private repository: ICategoriaRepository) {}

    async execute(id: string): Promise<boolean> {
        const deletedCategoria = await this.repository.eliminar(id);
        return deletedCategoria !== null;
    }
}
