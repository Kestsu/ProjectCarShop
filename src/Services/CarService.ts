import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';

export default class CarService {
  private createCarDomain(data: ICar | null): Car | null {
    if (data) {
      return new Car(
        data,
      );
    }
    return null;
  }
  public async createNewCar(car : ICar) {
    const carODM = new CarODM();
    const response = await carODM.create(car);
    return this.createCarDomain(response);
  }

  public async listCars() {
    const carODM = new CarODM();
    const response = await carODM.findAll();
    const resposta = response.map((item: ICar) => this.createCarDomain(item));
    return resposta;
  }

  public async listCarById(id: string) {
    const carODM = new CarODM();
    const response = await carODM.findByID(id);
    return this.createCarDomain(response);
  }
  public async updateCarID(id:string, body: any) {
    const carODM = new CarODM();
    const response = await carODM.update(id, body);
    return this.createCarDomain(response);
  }
}