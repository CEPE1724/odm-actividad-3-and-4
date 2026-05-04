import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./lib/shared/database";

// Rutas
import anuncianteRoutes from "./lib/anunciante/infrastructure/Anunciante.routes";
import categoriaRoutes from "./lib/categoria/infrastructure/Categoria.routes";
import publicidadRoutes from "./lib/publicidad/infrastructure/Publicidad.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3088;


app.use(cors());
app.use(express.json());


app.use("/api/anunciantes", anuncianteRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/publicidades", publicidadRoutes);


const iniciar = async () => {
    await connection();
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
        console.log(`Documentación: http://localhost:${PORT}/`);
    });
};

iniciar();
