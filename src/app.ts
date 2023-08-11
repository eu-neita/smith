import express from 'express';
import productService from './database/service/product.service';

const app = express();

app.use(express.json());

app.post('/products', productService.createProduct);

export default app;
