import { ICategoria } from "../domain/Categoria";
import { ICategoriaRepository } from "../domain/CategoriaRepository";

export class UpdateCategoria {
    constructor(private readonly repository: ICategoriaRepository) {}

    async execute(id: string, changes: Partial<ICategoria>): Promise<ICategoria | null> {
        return this.repository.actualizar(id, changes);
    }
}
