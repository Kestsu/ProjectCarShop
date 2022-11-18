import { Request, Response, NextFunction } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/MotorcyclesService';

export default class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }
  public async create() {
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    const response = await this.service.createNewMotorcycles(moto);
    return this.res.status(201).json(response);
  }

  public async getAll() {
    const response = await this.service.getMotoAll();
    return this.res.status(200).json(response);
  }
  public async getById() {
    const { id } = this.req.params;

    try {
      const response = await this.service.getMotoById(id);
      if (response === null) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(response);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}
