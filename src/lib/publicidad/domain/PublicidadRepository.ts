import { IPublicidad } from "./Publicidad";

export interface IPublicidadRepository {

    crear(datos: Partial<IPublicidad>): Promise<IPublicidad>;
    obtenerTodas(): Promise<IPublicidad[]>;
    actualizar(id: string, datos: Partial<IPublicidad>): Promise<IPublicidad | null>;
    eliminar(id: string): Promise<IPublicidad | null>;


    obtenerTodasConPopulate(): Promise<any[]>;
    obtenerPorIdConPopulate(id: string): Promise<any | null>;
    obtenerPorAnunciante(anuncianteId: string): Promise<any[]>;
    obtenerPorCategoria(categoriaId: string): Promise<any[]>;

    registrarVista(id: string): Promise<IPublicidad | null>;
    registrarClic(id: string): Promise<IPublicidad | null>;
}
