import { ICategoria } from "./Categoria";

export interface ICategoriaRepository {
    crear(datos: Partial<ICategoria>): Promise<ICategoria>;
    obtenerTodas(): Promise<ICategoria[]>;
    actualizar(id: string, datos: Partial<ICategoria>): Promise<ICategoria | null>;
    eliminar(id: string): Promise<ICategoria | null>;
}
