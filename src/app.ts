import express from 'express';
import productController from './controller/product.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.createProduct);

// app.get('/products', productController.getProducts);

export default app;
