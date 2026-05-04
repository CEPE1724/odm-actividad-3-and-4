import { Schema, model } from "mongoose";

const EstadisticasSchema = new Schema(
    {
        vistas: { type: Number, default: 0 },
        clics: { type: Number, default: 0 },
        ultimaActualizacion: { type: Date, default: Date.now }
    },
    { _id: false }
);


const PublicidadSchema = new Schema({
    titulo:       { type: String, required: true },
    descripcion:  { type: String, required: true },
    anuncianteId: { type: Schema.Types.ObjectId, ref: "Anunciante", required: true },
    categoriaId:  { type: Schema.Types.ObjectId, ref: "Categoria",  required: true },
    estadisticas: { type: EstadisticasSchema, default: () => ({}) }, 
    activo:       { type: Boolean, default: true }
});

export const PublicidadModel = model("Publicidad", PublicidadSchema);
