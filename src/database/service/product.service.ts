import { OrderServiceResponse } from '../../types/Order.service';
import { CreateProduct } from '../../types/Product';
import ProductModel, { ProductSequelizeModel } from '../models/product.model';

async function createProduct(
  products: CreateProduct,
): Promise<OrderServiceResponse<ProductSequelizeModel>> {
  const response = await ProductModel.create(products);

  return { status: 201, data: response };
}

export default {
  createProduct,
};
