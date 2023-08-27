import { getConx, endConx } from '../db/atlas.js'; 

export class BodegaService {
    static async getBodegas (req, res) {
        try {
            const db = await getConx();
            const bodegas = db.collection('bodegas');
            const result = await bodegas.find({})
            .sort({nombre: 1})
            .toArray();
    
            res.status(200).json(result);
        } 
        catch(err) {
            res.status(500).send({ error: err.message });
        }
    }
    static async createBodegas (req, res)  {
        try {
            const db = await getConx();
            const bodegas = db.collection('bodegas');

            const { id, nombre, id_responsable, estado } = req.body
            const bodega = { id, nombre, id_responsable, estado };

            const sameId = await bodegas.findOne({ id });
            if (sameId) return res.status(409).send({error: 'Bodega already exists'})

            const newBodega = await bodegas.insertOne(bodega);
            res.status(201).json(newBodega);
        } 
        catch(err) {
            res.status(500).send(err.message)
        }
        finally {
            await endConx();
        }


    }
}