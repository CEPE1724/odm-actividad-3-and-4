import { Router } from "express";
import { CreateAnunciante } from "../application/CreateAnunciante";
import { ListAnunciante } from "../application/ListAnunciante";
import { UpdateAnunciante } from "../application/UpdateAnunciante";
import { DeleteAnunciante } from "../application/DeleteAnunciante";
import { AnuncianteController } from "./AnuncianteController";
import { MongooseAnuncianteRepository } from "./MongooseAnuncianteRepository";
const anuncianteRouter = Router();
const repository = new MongooseAnuncianteRepository();
const controller = new AnuncianteController(
    new CreateAnunciante(repository),
    new ListAnunciante(repository),
    new UpdateAnunciante(repository),
    new DeleteAnunciante(repository)
);

anuncianteRouter.post("/", (req, res) => controller.create(req, res));
anuncianteRouter.get("/", (req, res) => controller.list(req, res));
anuncianteRouter.put("/:id", (req, res) => controller.update(req, res));
anuncianteRouter.delete("/:id", (req, res) => controller.delete(req, res));

export default anuncianteRouter;

