import { IAnunciante } from "../domain/Anunciante";
import { IAnuncianteRepository } from "../domain/AnuncianteRepository";


export class UpdateAnunciante {
  constructor(private readonly repository: IAnuncianteRepository) {}

  async execute(id: string, changes: Partial<IAnunciante>): Promise<IAnunciante | null> {
    return this.repository.actualizar(id, changes);
  }
}
