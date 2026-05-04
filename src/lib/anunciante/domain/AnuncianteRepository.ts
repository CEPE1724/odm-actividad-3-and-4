import { IAnunciante } from "./Anunciante";

export interface IAnuncianteRepository {
    crear(datos: Partial<IAnunciante>): Promise<IAnunciante>;
    obtenerTodas(): Promise<IAnunciante[]>;
    actualizar(id: string, datos: Partial<IAnunciante>): Promise<IAnunciante | null>;
    eliminar(id: string): Promise<IAnunciante | null>;
}