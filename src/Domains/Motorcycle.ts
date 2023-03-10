import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity:number;

  constructor(
    Moto: IMotorcycle,
  ) {
    this.id = Moto.id;
    this.model = Moto.model;
    this.year = Moto.year;
    this.color = Moto.color;
    this.status = Moto.status || false;
    this.buyValue = Moto.buyValue;
    this.category = Moto.category;
    this.engineCapacity = Moto.engineCapacity;
  }
  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }
  public setCategory(category: 'Street' | 'Custom' | 'Trail') {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }
  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getSeatsQty() {
    return this.engineCapacity;
  }
}

export default Motorcycle;
