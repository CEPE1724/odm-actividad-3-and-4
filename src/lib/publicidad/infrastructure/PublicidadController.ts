import { Request, Response } from "express";

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

export class PublicidadController {
    constructor(
        private createPublicidad: CreatePublicidad,
        private listPublicidad: ListPublicidad,
        private updatePublicidad: UpdatePublicidad,
        private deletePublicidad: DeletePublicidad,
        private getConPopulate: GetPublicidadesConPopulate,
        private getPorId: GetPublicidadPorId,
        private getPorAnunciante: GetPublicidadesPorAnunciante,
        private getPorCategoria: GetPublicidadesPorCategoria,
        private registrarVista: RegistrarVistaPublicidad,
        private registrarClic: RegistrarClicPublicidad
    ) {}


    async create(req: Request, res: Response) {
        try {
            const publicidad = await this.createPublicidad.execute(req.body);
            res.status(201).json(publicidad);
        } catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }


    async list(_req: Request, res: Response) {
        const publicidades = await this.listPublicidad.execute();
        res.json(publicidades);
    }

    async update(req: Request, res: Response) {
        try {
            const publicidad = await this.updatePublicidad.execute(String(req.params.id), req.body);
            if (publicidad) {
                res.json(publicidad);
            } else {
                res.status(404).json({ error: "Publicidad no encontrada" });
            }
        } catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const success = await this.deletePublicidad.execute(String(req.params.id));
            if (success) {
                res.json({ message: "Publicidad eliminada" });
            } else {
                res.status(404).json({ error: "Publicidad no encontrada" });
            }
        } catch (error) {
            res.status(400).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }


    async listConPopulate(_req: Request, res: Response) {
        try {
            const publicidades = await this.getConPopulate.execute();
            res.json(publicidades);
        } catch (error) {
            res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }


    async getByIdConPopulate(req: Request, res: Response) {
        try {
            const publicidad = await this.getPorId.execute(String(req.params.id));
            res.json(publicidad);
        } catch (error) {
            res.status(404).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }


    async listPorAnunciante(req: Request, res: Response) {
        try {
            const publicidades = await this.getPorAnunciante.execute(String(req.params.id));
            res.json(publicidades);
        } catch (error) {
            res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }


    async listPorCategoria(req: Request, res: Response) {
        try {
            const publicidades = await this.getPorCategoria.execute(String(req.params.id));
            res.json(publicidades);
        } catch (error) {
            res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }


    async vista(req: Request, res: Response) {
        try {
            const publicidad = await this.registrarVista.execute(String(req.params.id));
            res.json({ estadisticas: publicidad.estadisticas });
        } catch (error) {
            res.status(404).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }


    async clic(req: Request, res: Response) {
        try {
            const publicidad = await this.registrarClic.execute(String(req.params.id));
            res.json({ estadisticas: publicidad.estadisticas });
        } catch (error) {
            res.status(404).json({ error: error instanceof Error ? error.message : String(error) });
        }
    }
}
