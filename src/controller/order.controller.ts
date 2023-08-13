import OrderModel from '../database/models/order.model';
import { OrderServiceResponse } from '../types/Orderservice';

async function listOrders(): Promise<OrderServiceResponse<object>> {
  const response = await OrderModel.findAll();

  return { status: 200, data: response };
}
export default {
  listOrders,
};
