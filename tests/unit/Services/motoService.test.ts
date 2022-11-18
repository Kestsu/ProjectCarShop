import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcyclesService from '../../../src/Services/MotorcyclesService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Deveria buscar uma moto', function () {
  it('Procurando por ID invalido e retornando null', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new MotorcyclesService();
    const result = await service.getMotoById('6376d5edfd87d69d5fcdd9b2');

    expect(result).to.be.deep.equal(null);
  });

  it('Cadastrando nova moto com SUCESSO', async function () {
    const inputValue: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.0,
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

    const service = new MotorcyclesService();
    const result = await service.createNewMotorcycles(inputValue);

    expect(result).to.be.deep.equal(outputValue);
  });
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

  afterEach(function () {
    sinon.restore();
  });
});
