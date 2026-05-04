import { Router } from "express";
import { CreateCategoria } from "../application/CreateCategoria";
import { ListCategoria } from "../application/ListCategoria";
import { UpdateCategoria } from "../application/UpdateCategoria";
import { DeleteCategoria } from "../application/DeleteCategoria";
import { CategoriaController } from "./CategoriaController";
import { MongooseCategoriaRepository } from "./MongooseCategoriaRepository";

const categoriaRouter = Router();
const repository = new MongooseCategoriaRepository();
const controller = new CategoriaController(
    new CreateCategoria(repository),
    new ListCategoria(repository),
    new UpdateCategoria(repository),
    new DeleteCategoria(repository)
);

categoriaRouter.post("/", (req, res) => controller.create(req, res));
categoriaRouter.get("/", (req, res) => controller.list(req, res));
categoriaRouter.put("/:id", (req, res) => controller.update(req, res));
categoriaRouter.delete("/:id", (req, res) => controller.delete(req, res));

export default categoriaRouter;
