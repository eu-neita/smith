import express from 'express';
import productService from './Service/product.service';
import orderService from './Service/order.service';
import userService from './Service/user.service';
import productMiddleware from './product.middleware';

const app = express();

app.use(express.json());

app.post('/products', productMiddleware.productVerification, productService.createProduct);

app.get('/products', productService.getProducts);

app.get('/orders', orderService.getOrders);

app.post('/login', userService.login);

export default app;
