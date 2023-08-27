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
import { IsDefined, IsInt } from 'class-validator';
export class Inventario {
    constructor(data) {
        Object.assign(this, data);
        this.id_bodega = 1,
            this.id_producto = 1,
            this.cantidad = 1;
    }
}
__decorate([
    Expose({ name: 'bodegaId' }),
    IsDefined({ message: 'bodegaId is required' }),
    IsInt({ message: 'bodegaId must be an interger' }),
    __metadata("design:type", Number)
], Inventario.prototype, "id_bodega", void 0);
__decorate([
    Expose({ name: 'productoId' }),
    IsDefined({ message: 'productoId is required' }),
    IsInt({ message: 'productoId must be an interger' }),
    __metadata("design:type", Number)
], Inventario.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: 'amount' }),
    IsDefined({ message: 'amount is required' }),
    IsInt({ message: 'amount must be an interger' }),
    __metadata("design:type", Number)
], Inventario.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: 'createdBy' }),
    __metadata("design:type", String)
], Inventario.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'updatedBy' }),
    __metadata("design:type", String)
], Inventario.prototype, "updated_by", void 0);
__decorate([
    Expose({ name: 'createdAt' }),
    __metadata("design:type", Date)
], Inventario.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updatedAt' }),
    __metadata("design:type", Date)
], Inventario.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deletedAt' }),
    __metadata("design:type", Date)
], Inventario.prototype, "deleted_at", void 0);
