import { Request, Response } from "express";

import { CreateAnunciante } from "../application/CreateAnunciante";
import { ListAnunciante } from "../application/ListAnunciante";
import { UpdateAnunciante } from "../application/UpdateAnunciante";
import { DeleteAnunciante } from "../application/DeleteAnunciante";

export class AnuncianteController {
    constructor(
        private createAnunciante: CreateAnunciante,
        private listAnunciante: ListAnunciante,
        private updateAnunciante: UpdateAnunciante,
        private deleteAnunciante: DeleteAnunciante
    ) {}

    async create(req: Request, res: Response) {
        try {
            const anunciante = await this.createAnunciante.execute(req.body);
            res.status(201).json(anunciante);
        }
        catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }

    async list(req: Request, res: Response) {
        const anunciantes = await this.listAnunciante.execute();
        res.json(anunciantes);
    }

    async update(req: Request, res: Response) {
        try {
            const anunciante = await this.updateAnunciante.execute(String(req.params.id), req.body);
            if (anunciante) {
                res.json(anunciante);
            }
            else {
                res.status(404).json({ error: "Anunciante no encontrado" });
            }
        }
        catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const success = await this.deleteAnunciante.execute(String(req.params.id));
            if (success) {
                res.json({ message: "Anunciante eliminado" });
            }
            else {
                res.status(404).json({ error: "Anunciante no encontrado" });
            }
        }
        catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }
}