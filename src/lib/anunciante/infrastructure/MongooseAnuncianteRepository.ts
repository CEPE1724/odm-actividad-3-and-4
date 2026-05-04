import { IAnunciante } from "../domain/Anunciante";
import { IAnuncianteRepository } from "../domain/AnuncianteRepository";
import { AnuncianteMapper } from "./AnuncianteMapper";
import { AnuncianteModel } from "./AnuncianteModel";

export class MongooseAnuncianteRepository implements IAnuncianteRepository {
    async crear(datos: Partial<IAnunciante>): Promise<IAnunciante> {
        const nuevo = new AnuncianteModel(datos);
        const guardado = await nuevo.save();
        return AnuncianteMapper.toDomain(guardado);
    }

    async obtenerTodas(): Promise<IAnunciante[]> {
        const encontrados = await AnuncianteModel.find();
        return encontrados.map(AnuncianteMapper.toDomain);
    }

  

    async actualizar(id: string, datos: Partial<IAnunciante>): Promise<IAnunciante | null> {
        const actualizado = await AnuncianteModel.findByIdAndUpdate(id, datos, { new: true });
        return actualizado ? AnuncianteMapper.toDomain(actualizado) : null;
    }

    async eliminar(id: string): Promise<IAnunciante | null> {
        const eliminado = await AnuncianteModel.findByIdAndDelete(id);
        return eliminado ? AnuncianteMapper.toDomain(eliminado) : null;
    }

}
