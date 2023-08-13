import { Request, Response, NextFunction } from 'express';

type ResObj<T> = {
  status: 400 | 422,
  data: T,
};

const nameVerification = (name?: string): ResObj<object> | void => {
  if (!name) {
    return { status: 400, data: { message: '"name" is required' } };
  }
  if (typeof name !== 'string') {
    return { status: 422, data: { message: '"name" must be a string' } };
  }
  if (name.length <= 3) {
    return { status: 422, data: { message: '"name" length must be at least 3 characters long' } };
  }
};

const productVerification = (req: Request, res: Response, next: NextFunction): void | Response => {
  const { name, price } = req.body;
  const nameError = nameVerification(name);
  if (!price) {
    return res.status(400).send({ message: '"price" is required' });
  }
  if (typeof price !== 'string') {
    return res.status(422).send({ message: '"price" must be a string' });
  }
  if (price.length <= 3) {
    return res.status(422).send({ message: '"price" length must be at least 3 characters long' });
  }
  if (nameError) {
    return res.status(nameError?.status).send(nameError?.data);
  }
  next();
};
export default { productVerification };