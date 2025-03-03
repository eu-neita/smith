import { ProductServiceResponse } from '../types/Productservice';
import { CreateProduct, Product } from '../types/Product';
import ProductModel from '../database/models/product.model';

async function createProduct(
  products: CreateProduct,
): Promise<ProductServiceResponse<Product>> {
  const response = await ProductModel.create(products);

  return { status: 201, data: response.dataValues };
}

async function getProducts(): Promise<ProductServiceResponse<object>> {
  const response = await ProductModel.findAll();

  return { status: 200, data: response };
}

export default {
  createProduct,
  getProducts,
};
