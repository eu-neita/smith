import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';

import { UserLogin } from '../types/User';
import { UserServiceResponse } from '../types/Userservice';

const secret = process.env.JWT_SECRET as string;
async function loginVerificate(credentials: UserLogin): Promise<UserServiceResponse<object>> {
  const response = await UserModel.findOne({ where: { username: credentials.username } });
  if (response === null || !bcrypt
    .compareSync(credentials.password, response?.dataValues.password as string)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }
  const token = jwt.sign(
    { id: response.dataValues.id, username: credentials.username },
    secret,
    {
      algorithm: 'HS256',
      expiresIn: 86400,
    },
  );
  return { status: 200, data: { token } };
}

export default { 
  loginVerificate,
};