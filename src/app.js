//? Dependencies 
import express from "express";
import dotenv from "dotenv";

//? Env
dotenv.config();

const app = express();
app.use(express.json());

//? Server
const server = JSON.parse(process.env.SERVER);
(async () => {
    try {
        await conx();
        app.listen(server, () => {
            console.log(`http://${server.hostname}:${server.port}`);
        });

    } catch (err) {
        console.error({ opps: err.message })
    }
})();

