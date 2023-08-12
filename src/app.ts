import express from 'express';
import productService from './Service/product.service';

const app = express();

app.use(express.json());

app.post('/products', productService.createProduct);

app.get('/products', productService.getProducts);

export default app;
