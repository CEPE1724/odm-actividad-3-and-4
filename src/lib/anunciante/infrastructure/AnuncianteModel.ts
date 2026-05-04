import { Schema, model } from "mongoose";

const AnuncianteSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    direccion: { type: String, required: true },
    activo: { type: Boolean, default: true }
});

export const AnuncianteModel = model("Anunciante", AnuncianteSchema);