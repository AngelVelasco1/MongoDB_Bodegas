import { verifyClass, dtoBody } from '../middlewares/proxyBodegas.js';
import { limitGrt }from '../config/limit.js';
import { InventarioService } from '../services/inventarios.js';
import { Router } from 'express';

const storageInventarios = Router();

storageInventarios.post('/create', verifyClass, dtoBody, InventarioService.insertInventarios, limitGrt());

export {storageInventarios}