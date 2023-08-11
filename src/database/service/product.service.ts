import { OrderServiceResponse } from '../../types/Order.service';
import { CreateProduct } from '../../types/Product';
import ProductModel, { ProductSequelizeModel } from '../models/product.model';

async function createProduct(
  products: CreateProduct,
): Promise<OrderServiceResponse<ProductSequelizeModel>> {
  const response = await ProductModel.create(products);

  if (!response) {
    return { status: 400, data: { message: 'Error creating product' } };
  }

  return { status: 200, data: response };
}

export default {
  createProduct,
};
