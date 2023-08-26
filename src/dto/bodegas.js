var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsString } from 'class-validator';
export class Bodega {
    constructor(data) {
        Object.assign(this, data);
        this.id = 1;
        this.nombre = "Premium Ard";
        this.id_responsable = 1;
        this.estado = 2;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: 'Bodega id is required' }),
    IsInt({ message: 'Bodega id must be a interger' }),
    __metadata("design:type", Number)
], Bodega.prototype, "id", void 0);
__decorate([
    Expose({ name: 'name' }),
    IsDefined({ message: 'Bodega name is required' }),
    IsString({ message: 'Bodega name must be a string' }),
    __metadata("design:type", String)
], Bodega.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'idCharger' }),
    IsDefined({ message: 'The charger id is required' }),
    IsInt({ message: 'The charger id must be an integer' }),
    __metadata("design:type", Number)
], Bodega.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: 'status' }),
    IsDefined({ message: 'The bodega status is required' }),
    IsInt({ message: 'The bodega status must be an integer' }),
    __metadata("design:type", Number)
], Bodega.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'createdBy' }),
    __metadata("design:type", String)
], Bodega.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'updatedBy' }),
    __metadata("design:type", String)
], Bodega.prototype, "updated_by", void 0);
__decorate([
    Expose({ name: 'createdAt' }),
    __metadata("design:type", Date)
], Bodega.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updatedAt' }),
    __metadata("design:type", Date)
], Bodega.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deletedAt' }),
    __metadata("design:type", Date)
], Bodega.prototype, "deleted_at", void 0);
