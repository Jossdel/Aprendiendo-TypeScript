"use strict";
class DatosBasicos {
    name;
    desc;
    created_at;
    created_by;
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
    get fullDesc() {
        return this.name + ' - ' + this.desc;
    }
}
class Producto extends DatosBasicos {
    stock;
    sku;
    constructor(stock, sku, name, desc, created_at, create_by) {
        super(name, desc, created_at, create_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDesc() {
        return 'Producto: ' + super.fullDesc;
    }
    guardar() {
        console.log('guardando producto');
    }
}
class Categoria extends DatosBasicos {
    productos = [];
    constructor(name, desc, created_at, create_by) {
        super(name, desc, created_at, create_by);
    }
    get fullDesc() {
        return 'Categoria: ' + super.fullDesc;
    }
    guardar() {
        console.log('guardando Categoria');
    }
    agregarProductos(producto) {
        this.productos.push(producto);
    }
}
const producto1 = new Producto(100, 1, 'iphone', ' este es un smartPhone', new Date(), 1);
const categoria = new Categoria('celulares', '', new Date(), 1);
categoria.agregarProductos(producto1);
console.log(producto1.fullDesc);
//# sourceMappingURL=herencia.js.map