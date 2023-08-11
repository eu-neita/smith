export type Order = {
  id: number;
  userId: number;
  productId?: string;
};

export type CreateOrder = {
  name: string;
  price: string;
  orderId: number
};
