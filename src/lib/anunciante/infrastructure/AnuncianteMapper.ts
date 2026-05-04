import { IAnunciante } from "../domain/Anunciante";

export class AnuncianteMapper {
    static toDomain(raw: any): IAnunciante {
        return {
            nombre: raw.nombre,
            email: raw.email,
            telefono: raw.telefono,
            direccion: raw.direccion,
            activo: raw.activo
        };
    }
}
