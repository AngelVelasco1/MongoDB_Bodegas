import { verifyClass, dtoBody } from '../middlewares/proxyBodegas.js';
import { limitGrt }from '../config/limit.js';
import { ProductoService } from '../services/productos.js';
import { Router } from 'express';

const storageProductos = Router();

storageProductos.get('/look', verifyClass, ProductoService.getProductos, limitGrt());
storageProductos.post('/create', verifyClass, dtoBody, ProductoService.insertProducts, limitGrt());
export { storageProductos }