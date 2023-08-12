import { Request, Response } from 'express';
import productController from '../Controller/product.controller';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  if (!name || !price || !orderId) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const result = await productController.createProduct({ name, price, orderId });
  return res.status(result.status).json(result.data);
}

async function getProducts(req: Request, res: Response): Promise<Response> {
  const result = await productController.getProducts();
  return res.status(result.status).json(result.data);
}

export default {
  createProduct,
  getProducts,
};
