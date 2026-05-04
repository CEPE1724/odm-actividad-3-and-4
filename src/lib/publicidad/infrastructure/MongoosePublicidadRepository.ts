import { IPublicidad } from "../domain/Publicidad";
import { IPublicidadRepository } from "../domain/PublicidadRepository";
import { PublicidadMapper } from "./PublicidadMapper";
import { PublicidadModel } from "./PublicidadModel";

export class MongoosePublicidadRepository implements IPublicidadRepository {


    async crear(datos: Partial<IPublicidad>): Promise<IPublicidad> {
        const nueva = new PublicidadModel(datos);
        const guardada = await nueva.save();
        return PublicidadMapper.toDomain(guardada);
    }


    async obtenerTodas(): Promise<IPublicidad[]> {
        const encontradas = await PublicidadModel.find();
        return encontradas.map(PublicidadMapper.toDomain);
    }

    async actualizar(id: string, datos: Partial<IPublicidad>): Promise<IPublicidad | null> {
        const actualizada = await PublicidadModel.findByIdAndUpdate(id, datos, { new: true });
        return actualizada ? PublicidadMapper.toDomain(actualizada) : null;
    }

    async eliminar(id: string): Promise<IPublicidad | null> {
        const eliminada = await PublicidadModel.findByIdAndDelete(id);
        return eliminada ? PublicidadMapper.toDomain(eliminada) : null;
    }


    async obtenerTodasConPopulate(): Promise<any[]> {
        return PublicidadModel
            .find()
            .populate("anuncianteId", "nombre email empresa")  
            .populate("categoriaId", "nombre slug")           
            .lean();                                           
    }


    async obtenerPorIdConPopulate(id: string): Promise<any | null> {
        return PublicidadModel
            .findById(id)
            .populate("anuncianteId")  
            .populate("categoriaId")
            .lean();
    }


    async obtenerPorAnunciante(anuncianteId: string): Promise<any[]> {
        return PublicidadModel
            .find({ anuncianteId })
            .populate("anuncianteId", "nombre empresa")
            .populate("categoriaId", "nombre slug")
            .lean();
    }


    async obtenerPorCategoria(categoriaId: string): Promise<any[]> {
        return PublicidadModel
            .find({ categoriaId })
            .populate("anuncianteId", "nombre empresa")
            .populate("categoriaId", "nombre slug")
            .lean();
    }


    async registrarVista(id: string): Promise<IPublicidad | null> {
        const actualizada = await PublicidadModel.findByIdAndUpdate(
            id,
            {
                $inc: { "estadisticas.vistas": 1 },
                $set: { "estadisticas.ultimaActualizacion": new Date() }
            },
            { new: true }
        );
        return actualizada ? PublicidadMapper.toDomain(actualizada) : null;
    }


    async registrarClic(id: string): Promise<IPublicidad | null> {
        const actualizada = await PublicidadModel.findByIdAndUpdate(
            id,
            {
                $inc: { "estadisticas.clics": 1 },
                $set: { "estadisticas.ultimaActualizacion": new Date() }
            },
            { new: true }
        );
        return actualizada ? PublicidadMapper.toDomain(actualizada) : null;
    }
}
