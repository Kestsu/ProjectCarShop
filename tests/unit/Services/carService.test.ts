import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';

describe('Deveria buscar uma moto', function () {
  it('Procurando por ID invalido e retornando null', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new CarService();
    const result = await service.listCarById('6376d5edfd87d69d5fcdd9b2');

    expect(result).to.be.deep.equal(null);
  });

  it('Cadastrando um novo carro com SUCESSO', async function () {
    const inputValue: ICar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12,
      doorsQty: 2,
      seatsQty: 5,
    };
    const outputValue: Car = new Car({
      id: '6376dd5d8aa434958ebc64e9',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12,
      doorsQty: 2,
      seatsQty: 5,
    });
    sinon.stub(Model, 'create').resolves(outputValue);

    const service = new CarService();
    const result = await service.createNewCar(inputValue);

    expect(result).to.be.deep.equal(outputValue);
  });

  it('Deveria buscar uma carro por id com SUCESSO', async function () {
    const outputValue: Car = new Car({
      id: '6376dd5d8aa434958ebc64e9',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12,
      doorsQty: 2,
      seatsQty: 5,
    });

    sinon.stub(Model, 'findById').resolves(outputValue);

    const service = new CarService();
    const result = await service.listCarById('6376d5edfd87d69d5fcdd9b2');

    expect(result).to.be.deep.equal(outputValue);
  });
  it('Atualizando um carro com SUCESSO', async function () {
    const outputValue: Car = new Car({
      id: '6376dd5d8aa434958ebc64e9',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12,
      doorsQty: 2,
      seatsQty: 5,
    });
    sinon.stub(Model, 'findByIdAndUpdate').resolves(outputValue);

    const service = new CarService();
    const result = await service.updateCarID('6376dd5d8aa434958ebc64e9', {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.0,
      doorsQty: 2,
      seatsQty: 5,
    });

    expect(result).to.be.deep.equal(outputValue);
  });

  afterEach(function () {
    sinon.restore();
  });
});
