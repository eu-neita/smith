import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderServiceResponse } from '../types/Orderservice';

async function listOrders(): Promise<OrderServiceResponse<object>> {
  const response = await OrderModel.findAll({
    attributes: ['id', 'userId'],
  });
  const ordersOnProducts = await Promise.all(response.map(async (order) => {
    const product = await ProductModel.findAll({ where: { orderId: order.dataValues.id } });
    return product.map((item) => item.dataValues.id);
  }));
  
  const orders = response.map((order, index) => ({
    id: order.dataValues.id,
    productIds: ordersOnProducts[index] ? ordersOnProducts[index] : [],
    userId: order.dataValues.userId,
  }));
  
  return { 
    status: 200,
    data: orders };
}
export default {
  listOrders,
};
