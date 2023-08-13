import { Request, Response } from 'express';
import orderController from '../Controller/order.controller';

async function getOrders(req: Request, res: Response): Promise<Response> {
  const result = await orderController.listOrders();
  return res.status(result.status).json(result.data);
}

export default {
  getOrders,
};