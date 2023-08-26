//? Dependencies 
import express from "express";
import dotenv from "dotenv";
import { getConx } from './db/atlas.js';
import { createToken, verifyToken } from './token/auth.js'
import { storageBodega } from "./routes/bodega.js";

//? Env
dotenv.config();

const app = express();
app.use(express.json());

//? Enable collection to request
app.use('/:collection', async (req, res, next) => {
    req.collection = req.params.collection;
    next();
})

app.use('/app/token', createToken);
app.use('/bodegas', verifyToken, storageBodega);

//? Server
const server = JSON.parse(process.env.SERVER);
(async () => {
    try {
        await getConx();
        app.listen(server, () => {
            console.log(`http://${server.hostname}:${server.port}`);
        });
    } catch (err) {
        console.error({ opps: err })
    }
})();

