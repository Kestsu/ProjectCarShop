import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';
  
abstract class AbstractODM<T> {
  protected model: Model<T>; // Importante discutir o `OE` anterior para definir esse trecho de código
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    // Comente que a classe mãe espera no construtor o Schema que define a Collection e o nome da Collection no banco.
    this.schema = schema;
    this.modelName = modelName;
    // A model é definida na classe mãe para evitar repetição de código nas classes filhas. 
    // Diferentemente do Schema, a Model é padrão em todos os ODMs.
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
      { new: true }, // Atualizando ao vivo
    );
  } 
}
  
export default AbstractODM;