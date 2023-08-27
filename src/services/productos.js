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
                      as: 'bodega'
                    }
                  },
                  {
                    $unwind: '$bodega'
                  },
                  {
                    $lookup: {
                      from: 'productos',
                      localField: 'id_producto',
                      foreignField: 'id',
                      as: 'producto'
                    }
                  },
                  {
                    $unwind: '$producto'
                  },
                  {
                    $group: {
                      _id: {
                        bodega_nombre: '$bodega.nombre',
                        producto_nombre: '$producto.nombre'
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
                      producto: '$_id.producto_nombre',
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
    static async insertProducts (req, res) {
        try {
          const db = await getConx();
          const productos = await db.collection('productos');
          const bodegas = await db.collection('bodegas');
          const inventarios = await db.collection('inventarios');

          const { id, nombre, descripcion, estado } = req.body;
          const newProduct = { id, nombre, descripcion, estado };
          
          const sameId = await productos.findOne({ id })
          if(sameId) return res.status(400).send({error: 'Duplicated id'})
          
          const insertProducto = await productos.insertOne(newProduct);

          const bodegaDefaulf = await bodegas.findOne({id: 4});

          const updateInventario  = {
            id_bodega: bodegaDefaulf.id,
            id_producto: newProduct.id,
            cantidad: 1
          }
          const newInventario = await inventarios.insertOne(updateInventario);

          res.status(201).send({newInventario});
        } catch(err) {
            res.status(500).send({error: err })
        }
    }
 }
        