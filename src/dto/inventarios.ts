import { Expose } from 'class-transformer';
import { IsDefined, IsInt } from 'class-validator';

export class Inventario {
    @Expose({ name: 'bodegaId' })
    @IsDefined({ message: 'bodegaId is required' })
    @IsInt({ message: 'bodegaId must be an interger' })
    id_bodega: number;

    @Expose({ name: 'productoId' })
    @IsDefined({ message: 'productoId is required' })
    @IsInt({ message: 'productoId must be an interger' })
    id_producto: number;


    @Expose({ name: 'amount' })
    @IsDefined({ message: 'amount is required' })
    @IsInt({ message: 'amount must be an interger' })
    cantidad: number; 

    @Expose({ name: 'createdBy' })
    created_by?: string; 

    @Expose({ name: 'updatedBy' })
    updated_by?: string; 

    @Expose({ name: 'createdAt' })
    created_at?: Date;

    @Expose({ name: 'updatedAt' })
    updated_at?: Date;

    @Expose({ name: 'deletedAt' })
    deleted_at?: Date;
    
    constructor(data: Partial<Inventario>) {
        Object.assign(this, data);
        this.id_bodega = 1,
        this.id_producto = 1,
        this.cantidad = 1
    }
}
