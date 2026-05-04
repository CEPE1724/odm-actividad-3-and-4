import { ICategoria } from "../domain/Categoria";

export class CategoriaMapper {
    static toDomain(raw: any): ICategoria {
        return {
            nombre: raw.nombre,
            descripcion: raw.descripcion,
            slug: raw.slug,
            activa: raw.activa
        };
    }
}
