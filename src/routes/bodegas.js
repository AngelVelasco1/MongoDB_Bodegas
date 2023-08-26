import { verifyClass, dtoBody } from '../middlewares/proxyBodegas.js';
import { limitGrt }from '../config/limit.js';
import { BodegaService } from '../services/bodegas.js';
import { Router } from 'express';

const storageBodegas = Router();

storageBodegas.get('/look', verifyClass, BodegaService.getBodegas, limitGrt());
storageBodegas.post('/create', verifyClass, dtoBody, BodegaService.createBodegas, limitGrt());

export { storageBodegas };