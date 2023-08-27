import { getConx } from '../db/atlas.js';

export class InventarioService {
    static async insertInventarios (req, res)  {
        try {
            const db = await getConx();
            const inventarios = await db.collection('inventarios');
            
            const { id_bodega, id_producto, cantidad } = req.body;
            const newInventario = { id_bodega, id_producto, cantidad };

            const checkExist =  await inventarios.findOne({ id_bodega, id_producto });
            const operations = (checkExist) ? await inventarios.updateOne({ id_bodega, id_producto }, { $inc: { cantidad }}) : await inventarios.insertOne(newInventario)
            const result = await operations;

            res.status(checkExist ? 200 : 201).json(result);
        }
        catch(err) {
            res.status(500).send(err.message)
        }



    }
}