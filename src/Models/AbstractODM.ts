import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>; 
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema); 
  }
  public async create(data: T): Promise<T> {
    return this.model.create({ ...data });
  }

  public async findAll(): Promise<any> {
    return this.model.find();
  }

  public async findByID(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async update(_id: string, obj: any): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj },
      { new: true },
    );
  } 
}

export default AbstractODM;