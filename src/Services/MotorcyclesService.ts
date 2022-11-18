import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcyclesODM';

export default class MotorcyclesService {
  private createMotorDomain(data: IMotorcycle | null): Motorcycle | null {
    if (data) {
      return new Motorcycle(
        data,
      );
    }
    return null;
  }
  public async createNewMotorcycles(moto : IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const response = await motoODM.create(moto);
    return this.createMotorDomain(response);
  }
}