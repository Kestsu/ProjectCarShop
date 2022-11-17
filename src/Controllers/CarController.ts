import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    const response = await this.service.createNewCar(car);
    return this.res.status(201).json(response);
  }

  public async get() {
    const response = await this.service.listCars();
    return this.res.status(201).json(response);
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const response = await this.service.listCarById(id);
      if (response === null) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(response);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    const { body } = this.req;
    console.log(body);
    
    try {
      const response = await this.service.updateCarID(id, body);
      if (response === null) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(response);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}
