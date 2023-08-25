import 'reflect-metadata';
import dotenv from 'dotenv';
import { Router } from 'express';
import { plainToInstance, instanceToPlain } from 'class-transformer';
import { SignJWT, jwtVerify } from 'jose';

import { Bodega } from '../dto/bodegas.js'

dotenv.config();

const createToken = Router();
const verifyToken = Router();

export const newInstance = (className) => {
    const match = {
        'Bodega': Bodega
    };
    const instance = match[className];

    if (!instance) {
        throw new Error(`Class ${className} not found`);
    }
    return { atributes: plainToInstance(instance, {}, { ignoreDecorators: true }), class: instance }
};

const encoder = new TextEncoder();

createToken.use('/:collection', async (req, res, next) => {
    const classInst = newInstance(req.params.collection).atributes;
    if (!classInst) return next();

    try {
        const token = new SignJWT(Object.assing({}, instanceToPlain(classInst)));
    
        const tokenData = await token
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(encoder.encode(process.env.JWT_SECRET));
    
        req.data = tokenData;
        res.status(201).send({ token: tokenData });

    }
    catch(err) {
        res.status(err.status).end({ error: err.message });
    }
});

verifyToken.use(async (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) return res.status(401).end({ error: 'Not token found' });

    try {
        await jwtVerify(token, encoder.encode(process.env.JWT_SECRET));
        next();
    } 
    catch(err) {
        res.status(498).end({ error: err, token: 'token expired' });
    }
})

export { createToken, verifyToken };