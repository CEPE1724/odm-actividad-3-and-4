import { ICategoria } from "../domain/Categoria";
import { ICategoriaRepository } from "../domain/CategoriaRepository";

export class ListCategoria {
    constructor(private repository: ICategoriaRepository) {}

    async execute(): Promise<ICategoria[]> {
        return this.repository.obtenerTodas();
    }
}
