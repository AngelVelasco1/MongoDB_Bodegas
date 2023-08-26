import { getConx, endConx } from '../db/atlas.js';

export class ProductoService {
    static async getProductos (req, res) {
        try {
            const db = await getConx();
            const inventarios = await db.collection('inventarios');
    
            const orderByTotal = await inventarios.aggregate([
                {
                    $lookup: {
                      from: 'bodegas',
                      localField: 'id_bodega',
                      foreignField: 'id',
                      as: 't2'
                    }
                  },
                  {
                    $unwind: '$t2'
                  },
                  {
                    $lookup: {
                      from: 'productos',
                      localField: 'id_producto',
                      foreignField: 'id',
                      as: 't3'
                    }
                  },
                  {
                    $unwind: '$t3'
                  },
                  {
                    $group: {
                      _id: {
                        t2_nombre: '$t2.nombre',
                        t3_nombre: '$t3.nombre'
                      },
                      total: {
                        $sum: '$cantidad'
                      }
                    }
                  },
                  {
                    $sort: {
                      total: -1
                    }
                  },
                  {
                    $project: {
                      bodega: '$_id.t2_nombre',
                      producto: '$_id.t3_nombre',
                      total: 1,
                      _id: 0
                    }
                  }
            ]).toArray();
            res.status(200).send(orderByTotal)
        } 
        catch(err) {
            res.status(500).send({error: err })
        }
    }
}
        