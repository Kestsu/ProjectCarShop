import { 
  Model, Schema, model, models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
  
class CarODM {
  private schema: Schema;
  private model: Model<ICar>;
  
  constructor() {
    // Esqueleto
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number },
      status: { type: Boolean },
    });
    // Tem que acessar o Domain
    this.model = models.Car || model('Car', this.schema);
  }
  
  public async create(data: ICar): Promise<ICar> {
    return this.model.create({ ...data });
  }

  public async findAll(): Promise<any> {
    return this.model.find();
  }

  public async findByID(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }

  public async update(_id: string, obj: any): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj },
      { new: true },
    );
  } 
}
  
export default CarODM;
