import { ICategoria } from "../domain/Categoria";
import { ICategoriaRepository } from "../domain/CategoriaRepository";

export class CreateCategoria {
    constructor(private repository: ICategoriaRepository) {}

    async execute(datos: Partial<ICategoria>): Promise<ICategoria> {
        if (!datos.nombre || !datos.slug) {
            throw new Error("El nombre y el slug son obligatorios");
        }
        return this.repository.crear(datos);
    }
}
