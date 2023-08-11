import { Request, Response } from 'express';
import ProductModel from '../models/product.model';
import { Product, CreateProduct } from '../../types/Product';

async function create(req: Request, res: Response): Promise<Product> {
  const { name, price, orderId } = req.body;
  const createOrder = await ProductModel.create({ name, price, orderId });
  res.status(201).json(transaction);
}

export default {
  create,
};
