import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('should return 200', async function () {
    const modelBuild = ProductModel.build();
    sinon.stub(ProductModel, 'create').resolves(modelBuild);
    const response = await chai.request(app).get('/products').send();
     
    expect(response.status).to.be.equal(200);
  });
});
