import { Schema, model } from "mongoose";

const CategoriaSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    activa: { type: Boolean, default: true }
});

export const CategoriaModel = model("Categoria", CategoriaSchema);
