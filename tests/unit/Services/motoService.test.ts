import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcyclesService from '../../../src/Services/MotorcyclesService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleODM from '../../../src/Models/MotorcyclesODM';

describe('Deveria buscar uma moto', function () {
  it('Deveria buscar uma moto por id com SUCESSO', async function () {
    const Output: Motorcycle = new Motorcycle({
      id: '6376d5edfd87d69d5fcdd9b2',
      model: 'Honda Cb 600f',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    });

    sinon.stub(Model, 'findById').resolves(Output);

    const service = new MotorcyclesService();
    const result = await service.getMotoById('6376d5edfd87d69d5fcdd9b2');

    expect(result).to.be.deep.equal(Output);
  });
  it('Cadastrando nova moto com SUCESSO', async function () {
    const inputValue: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const outputValue: Motorcycle = new Motorcycle({
      id: '6376d9c58aa434958ebc64e6',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    });
    sinon.stub(Model, 'create').resolves(outputValue);

    const service = new MotorcycleODM();
    const result = await service.create(inputValue);

    expect(result).to.be.deep.equal(outputValue);
  });

  afterEach(function () {
    sinon.restore();
  });
});
