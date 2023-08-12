import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';


chai.use(chaiHttp);

describe('POST /products', function () { 
  // beforeEach(function () { sinon.restore(); });
  it('should return 201', async function () {
    const response = await chai.request(app).post('/products')
      .send({
        name: 'test',
        price: '10 testes',
        orderId: 4,
      })
     
    expect(response.status).to.be.equal(201);
  });
});
