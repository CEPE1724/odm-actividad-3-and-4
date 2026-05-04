import { Request, Response } from "express";

import { CreateCategoria } from "../application/CreateCategoria";
import { ListCategoria } from "../application/ListCategoria";
import { UpdateCategoria } from "../application/UpdateCategoria";
import { DeleteCategoria } from "../application/DeleteCategoria";

export class CategoriaController {
    constructor(
        private createCategoria: CreateCategoria,
        private listCategoria: ListCategoria,
        private updateCategoria: UpdateCategoria,
        private deleteCategoria: DeleteCategoria
    ) {}

    async create(req: Request, res: Response) {
        try {
            const categoria = await this.createCategoria.execute(req.body);
            res.status(201).json(categoria);
        }
        catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }

    async list(_req: Request, res: Response) {
        const categorias = await this.listCategoria.execute();
        res.json(categorias);
    }

    async update(req: Request, res: Response) {
        try {
            const categoria = await this.updateCategoria.execute(String(req.params.id), req.body);
            if (categoria) {
                res.json(categoria);
            }
            else {
                res.status(404).json({ error: "Categoria no encontrada" });
            }
        }
        catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const success = await this.deleteCategoria.execute(String(req.params.id));
            if (success) {
                res.json({ message: "Categoria eliminada" });
            }
            else {
                res.status(404).json({ error: "Categoria no encontrada" });
            }
        }
        catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }
}
