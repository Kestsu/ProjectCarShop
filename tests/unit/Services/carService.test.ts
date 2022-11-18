import { Model } from 'mongoose';
import sinon from 'sinon';
import { expect } from 'chai';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Deveria buscar uma moto', function () {
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
    const result = await service.updateCarID( 
      '6376dd5d8aa434958ebc64e9',
      {
        model: 'Marea',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12.000,
        doorsQty: 2,
        seatsQty: 5,
      },
    );

    expect(result).to.be.deep.equal(outputValue);
  });

  afterEach(function () {
    sinon.restore();
  });
});
