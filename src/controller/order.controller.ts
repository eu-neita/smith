import { Request, Response } from 'express';
import orderService from '../service/order.service';

async function getOrders(req: Request, res: Response): Promise<Response> {
  const result = await orderService.listOrders();
  return res.status(result.status).json(result.data);
}

export default {
  getOrders,
};