import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsString } from 'class-validator';

export class Producto {
    @Expose({ name: 'id' })
    @IsDefined({ message: 'Producto id is required' })
    @IsInt({ message: 'Producto id must be a interger' })
    id: number;

    @Expose({ name: 'name' })
    @IsDefined({ message: 'Producto name is required' })
    @IsString({ message: 'Producto name must be a string' })
    nombre: string;

    @Expose({ name: 'description' })
    @IsDefined({ message: 'The description is required' })
    @IsString({ message: 'The description must be a string' })
    descripcion: string; 

    @Expose({ name: 'status' })
    @IsDefined({ message: 'The Producto status is required' })
    @IsInt({ message: 'The Producto status must be an integer' })
    estado: number;

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
    
    constructor(data: Partial<Producto>) {
        Object.assign(this, data);
        this.id = 5,
        this.nombre = "HP Portable",
        this.descripcion = "Descripcion del Producto",
        this.estado = 1
    }
}
