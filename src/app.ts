import express from 'express';
import productController from './database/controller/product.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.createProduct);

export default app;
