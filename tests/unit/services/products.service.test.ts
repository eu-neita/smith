import { expect } from 'chai';
import sinon from 'sinon';
import productService from '../../../src/database/service/product.service';
import { noErrors, missingFilds } from '../../mocks/productsMock'

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('should return no errors', async function () {
    const result = await productService.createProduct(noErrors);
    expect(result.status).to.be.deep.equal(201);
  });
});
