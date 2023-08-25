import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsString } from 'class-validator';

export class Bodega {
    @Expose({ name: 'name' })
    @IsDefined({ message: 'Bodega name is required' })
    @IsString({ message: 'Bodega name must be a string' })
    nombre: string;

    @Expose({ name: 'idCharger' })
    @IsDefined({ message: 'The charger id is required' })
    @IsInt({ message: 'The charger id must be an integer' })
    id_responsable: number; 

    @Expose({ name: 'status' })
    @IsDefined({ message: 'The bodega status is required' })
    @IsInt({ message: 'The bodega status must be an integer' })
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
    
    constructor(data: Partial<Bodega>) {
        Object.assign(this, data);
        this.nombre = "";
        this.id_responsable = 1;
        this.estado = 1
    }
}
