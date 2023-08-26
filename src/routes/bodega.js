import { verifyClass, dtoBody } from '../middlewares/proxyBodegas.js';
import { limitGrt }from '../config/limit.js';
import { BodegaService } from '../services/bodega.js';
import { Router } from 'express';

const storageBodega = Router();

storageBodega.get('/look', verifyClass, BodegaService.getBodegas);
storageBodega.post('/create', verifyClass, dtoBody, BodegaService.createBodegas);

export { storageBodega };