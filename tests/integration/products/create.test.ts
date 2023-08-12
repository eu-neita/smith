import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import { noErrors, missingFilds } from '../../mocks/productsMock';
import ProductModel from '../../../src/database/models/product.model';


chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('should return 201', async function () {
    const xablau = ProductModel.build();
    sinon.stub(ProductModel, 'create').resolves(xablau);
    const response = await chai.request(app).post('/products').send(noErrors);
     
    expect(response.status).to.be.equal(201);
  });
  it('should return 400', async function () {
    const xablau = ProductModel.build();
    sinon.stub(ProductModel, 'create').resolves(xablau);
    const response = await chai.request(app).post('/products').send(missingFilds);
     
    expect(response.status).to.be.equal(400);
  });
});
