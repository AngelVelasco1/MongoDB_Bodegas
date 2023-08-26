import { verifyClass, dtoBody } from '../middlewares/proxyBodegas.js';
import { limitGrt }from '../config/limit.js';
import { BodegaService } from '../services/bodegas.js';
import { Router } from 'express';

const storageBodega = Router();

storageBodega.get('/look', verifyClass, BodegaService.getBodegas, limitGrt());
storageBodega.post('/create', verifyClass, dtoBody, BodegaService.createBodegas, limitGrt());

export { storageBodega };