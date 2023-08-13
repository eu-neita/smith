import { Request, Response } from 'express';
import userController from '../Controller/user.controller';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  const result = await userController.loginVerificate({ username, password });
  return res.status(result.status).json(result.data);
}

export default { login };