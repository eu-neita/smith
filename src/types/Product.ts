export type Product = {
  id: string;
  name: string;
  price: string;
  orderId: number;
};

export type CreateProduct = {
  name: string,
  price: string;
  orderId: number;
};
