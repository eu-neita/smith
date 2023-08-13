import express from 'express';
import productController from './Controller/product.controller';
import orderController from './Controller/order.controller';
import userController from './Controller/user.controller';
import productMiddleware from './product.middleware';

const app = express();

app.use(express.json());

app.post('/products', productMiddleware.productVerification, productController.createProduct);

app.get('/products', productController.getProducts);

app.get('/orders', orderController.getOrders);

app.post('/login', userController.login);

export default app;
