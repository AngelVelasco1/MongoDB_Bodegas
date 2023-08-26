import 'reflect-metadata';
import { plainToInstance, instanceToPlain } from 'class-transformer';
import { newInstance } from '../token/auth.js';
import { validate } from 'class-validator';
import { Router } from 'express';

const verifyClass = Router();

verifyClass.use((req, res, next) => {
    try {
        const collection = req.collection
        let { payload } = req.data;
        let { iat, exp, ...newPayload } = payload
        payload = newPayload

        const newClass = newInstance(collection);
    
        const clone = JSON.stringify(instanceToPlain(plainToInstance(newClass.class, {}, { ignoreDecorators: true })));
        const compareClone = clone === JSON.stringify(payload);
    
        delete req.data;
        (!compareClone) ? res.status(401).send({ message: 'Unauthorized' }) : next();
    }
    catch(err) {
        res.status(400).send({ error: err.message });
    }
   
})

export const dtoBody = async(req, res, next) => {
    try {
        const collectionName = req.collection;
        const data = plainToInstance(newInstance(collectionName).class, req.body)

        const errors = await validate(data);
        if (errors.length) {
            res.status(400).json({ errors: errors.map(err => err.constraints) });
        } else {
            req.body = JSON.parse(JSON.stringify(data));
            delete req.data;
            next();
        }

    } catch(err) {
        res.status(err.status).send({ error: err.message });
    }
}

export { verifyClass }