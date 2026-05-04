import { IPublicidad } from "../domain/Publicidad";

export class PublicidadMapper {
    static toDomain(raw: any): IPublicidad {
        return {
            titulo:        raw.titulo,
            descripcion:   raw.descripcion,
            anuncianteId:  String(raw.anuncianteId),
            categoriaId:   String(raw.categoriaId),
            estadisticas: {
                vistas:              raw.estadisticas?.vistas ?? 0,
                clics:               raw.estadisticas?.clics ?? 0,
                ultimaActualizacion: raw.estadisticas?.ultimaActualizacion ?? new Date()
            },
            activo: raw.activo
        };
    }
}
