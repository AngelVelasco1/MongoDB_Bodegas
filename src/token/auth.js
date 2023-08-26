import 'reflect-metadata';
import dotenv from 'dotenv';
import { Router } from 'express';
import { plainToInstance, instanceToPlain, plainToClass, classToPlain } from 'class-transformer';
import { SignJWT, jwtVerify } from 'jose';

import { Bodega } from '../dto/bodegas.js'

dotenv.config("../../");

const createToken = Router();
const verifyToken = Router();

export const newInstance = (className) => {
    const match = {
        "bodegas": Bodega
    };
    const instance = match[className];
    if (instance) {
        return { atributes: plainToClass(instance, {}, { ignoreDecorators: true }), class: instance }
    } else {
        throw new Error("Invalid collection")

    }
};

const encoder = new TextEncoder();
createToken.use('/:collection', async (req, res, next) => {
    const collectionName = req.params.collection;
    const classInst = newInstance(collectionName).atributes;
    if(!classInst) return res.status(404).send({status: 400, error: "Collection not found"})

    try {
        const token = new SignJWT(Object.assign({}, instanceToPlain(classInst)));

        const tokenData = await token
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(encoder.encode(process.env.JWT_SECRET));

        req.data = tokenData;
        res.status(201).send({ token: tokenData });
    }
    catch (err) {
        res.status(400).send({ error: err.message });
    }
});

verifyToken.use('/', async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send({ error: 'Not token found' });
    try {
        const jwtData = await jwtVerify(token, encoder.encode(process.env.JWT_SECRET));
        req.data = jwtData;
        next();
    }
    catch (err) {
        res.status(498).send({ error: err, token: 'token expired' });
    }
});

export { createToken, verifyToken };