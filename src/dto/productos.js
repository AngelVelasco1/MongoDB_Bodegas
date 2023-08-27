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
export class Producto {
    constructor(data) {
        Object.assign(this, data);
        this.id = 5,
            this.nombre = "HP Portable",
            this.descripcion = "Descripcion del Producto",
            this.estado = 1;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: 'Producto id is required' }),
    IsInt({ message: 'Producto id must be a interger' }),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    Expose({ name: 'name' }),
    IsDefined({ message: 'Producto name is required' }),
    IsString({ message: 'Producto name must be a string' }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'description' }),
    IsDefined({ message: 'The description is required' }),
    IsString({ message: 'The description must be a string' }),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'status' }),
    IsDefined({ message: 'The Producto status is required' }),
    IsInt({ message: 'The Producto status must be an integer' }),
    __metadata("design:type", Number)
], Producto.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'createdBy' }),
    __metadata("design:type", String)
], Producto.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'updatedBy' }),
    __metadata("design:type", String)
], Producto.prototype, "updated_by", void 0);
__decorate([
    Expose({ name: 'createdAt' }),
    __metadata("design:type", Date)
], Producto.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updatedAt' }),
    __metadata("design:type", Date)
], Producto.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deletedAt' }),
    __metadata("design:type", Date)
], Producto.prototype, "deleted_at", void 0);
