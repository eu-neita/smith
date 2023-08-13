import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('should return 200', async function () {
    const xablau = OrderModel.build();
    sinon.stub(OrderModel, 'create').resolves(xablau);
    const response = await chai.request(app).get('/orders').send();
     
    expect(response.status).to.be.equal(200);
  });
});
