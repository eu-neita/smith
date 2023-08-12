// import chai, { expect } from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
// import { Request, Response } from 'express';
// import productController from '../../../src/database/controller/product.controller';
// import { noErrors, missingFilds } from '../../mocks/productsMock'

// chai.use(sinonChai);

// describe('ProductsController', function () {
//   const req = {} as Request;
//   const res = {} as Response;

//   beforeEach(function () {
//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns(res);
//     sinon.restore();
//   });
//   it('should return 200 status code', async function () {
//     req.body = noErrors;
//     await productController.createProduct(req, res);
//     expect(res.status).to.have.been.calledWith(201);
//   });
//   it('should return 400 status code', async function () {
//     req.body = missingFilds;
//     await productController.createProduct(req, res);
//     expect(res.status).to.have.been.calledWith(400);
//   });
// });
