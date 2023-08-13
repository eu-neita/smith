import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';

import { UserLogin } from '../types/User';

const secret = process.env.JWT_SECRET as string;

async function loginVerificate(
  credentials: UserLogin,
): Promise<object> {
  const response = await UserModel
    .findOne({ where: { username: credentials.username, password: credentials.password } });
  if (!response) {
    const token = jwt.sign(
      { username: credentials.username, password: credentials.password },
      secret,
      {
        algorithm: 'HS256',
        expiresIn: 86400,
      },
    );
    return { status: 201, data: token };
  }

  return { status: 401, data: { message: 'Username or password invalid' } };
}

export default { 
  loginVerificate,
};