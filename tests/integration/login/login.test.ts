import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  // it('should return 200 and a token', async function () {
  //   const response = await chai.request(app).post('/login').send({ username: 'Hagar', password: 'terrível' });
  //   expect(response.status).to.be.equal(200);
  // });
  it('should return 401 and a menssage', async function () {
    const response = await chai.request(app).post('/login').send({ username: 'Hagarfgd', password: 'terrível' });
    expect(response.status).to.be.equal(401);
  });
  it('should return 400', async function () {
    const response = await chai.request(app).post('/login').send({ password: 'terrível' });
    expect(response.status).to.be.equal(400);
  });
});
