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
        finally {
            await endConx();
        }
    }
}