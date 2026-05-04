import { Router } from "express";
import { CreatePublicidad } from "../application/CreatePublicidad";
import { ListPublicidad } from "../application/ListPublicidad";
import { UpdatePublicidad } from "../application/UpdatePublicidad";
import { DeletePublicidad } from "../application/DeletePublicidad";
import { GetPublicidadesConPopulate } from "../application/GetPublicidadesConPopulate";
import { GetPublicidadPorId } from "../application/GetPublicidadPorId";
import { GetPublicidadesPorAnunciante } from "../application/GetPublicidadesPorAnunciante";
import { GetPublicidadesPorCategoria } from "../application/GetPublicidadesPorCategoria";
import { RegistrarVistaPublicidad } from "../application/RegistrarVistaPublicidad";
import { RegistrarClicPublicidad } from "../application/RegistrarClicPublicidad";
import { PublicidadController } from "./PublicidadController";
import { MongoosePublicidadRepository } from "./MongoosePublicidadRepository";

const publicidadRouter = Router();
const repository = new MongoosePublicidadRepository();

const controller = new PublicidadController(
    new CreatePublicidad(repository),
    new ListPublicidad(repository),
    new UpdatePublicidad(repository),
    new DeletePublicidad(repository),
    new GetPublicidadesConPopulate(repository),
    new GetPublicidadPorId(repository),
    new GetPublicidadesPorAnunciante(repository),
    new GetPublicidadesPorCategoria(repository),
    new RegistrarVistaPublicidad(repository),
    new RegistrarClicPublicidad(repository)
);


publicidadRouter.post("/",     (req, res) => controller.create(req, res));
publicidadRouter.get("/",      (req, res) => controller.list(req, res));
publicidadRouter.put("/:id",   (req, res) => controller.update(req, res));
publicidadRouter.delete("/:id",(req, res) => controller.delete(req, res));


publicidadRouter.get("/populate",              (req, res) => controller.listConPopulate(req, res));
publicidadRouter.get("/:id/populate",          (req, res) => controller.getByIdConPopulate(req, res));
publicidadRouter.get("/anunciante/:id",        (req, res) => controller.listPorAnunciante(req, res));
publicidadRouter.get("/categoria/:id",         (req, res) => controller.listPorCategoria(req, res));


publicidadRouter.patch("/:id/vista", (req, res) => controller.vista(req, res));
publicidadRouter.patch("/:id/clic",  (req, res) => controller.clic(req, res));

export default publicidadRouter;
