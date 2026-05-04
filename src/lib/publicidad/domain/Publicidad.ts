
export interface IEstadisticas {
    vistas: number;
    clics: number;
    ultimaActualizacion: Date;
}


export interface IPublicidad {
    titulo: string;
    descripcion: string;
    anuncianteId: string;   
    categoriaId: string;    
    estadisticas: IEstadisticas; 
    activo: boolean;
}
