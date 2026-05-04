import { ICategoria } from "../domain/Categoria";
import { ICategoriaRepository } from "../domain/CategoriaRepository";
import { CategoriaMapper } from "./CategoriaMapper";
import { CategoriaModel } from "./CategoriaModel";

export class MongooseCategoriaRepository implements ICategoriaRepository {
    async crear(datos: Partial<ICategoria>): Promise<ICategoria> {
        const nueva = new CategoriaModel(datos);
        const guardada = await nueva.save();
        return CategoriaMapper.toDomain(guardada);
    }

    async obtenerTodas(): Promise<ICategoria[]> {
        const encontradas = await CategoriaModel.find();
        return encontradas.map(CategoriaMapper.toDomain);
    }

    async actualizar(id: string, datos: Partial<ICategoria>): Promise<ICategoria | null> {
        const actualizada = await CategoriaModel.findByIdAndUpdate(id, datos, { new: true });
        return actualizada ? CategoriaMapper.toDomain(actualizada) : null;
    }

    async eliminar(id: string): Promise<ICategoria | null> {
        const eliminada = await CategoriaModel.findByIdAndDelete(id);
        return eliminada ? CategoriaMapper.toDomain(eliminada) : null;
    }
}
