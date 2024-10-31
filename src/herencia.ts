abstract class DatosBasicos {
constructor(
    public name:string,
    public desc:string,
    protected created_at: Date,
    protected created_by: number,
){}
get fullYear(){
    return this.created_at.getFullYear()
    }
get fullDesc(){
    return this.name +' - '+this.desc
}
abstract guardar ():void;
}

class Producto extends DatosBasicos{
    constructor(
        public stock :number,
        public sku: number,
        name: string,
        desc: string,
        created_at: Date,
        create_by:number,
    ){
        super(name ,desc ,created_at, create_by)
    }
    
override get fullDesc()  {
        
        return 'Producto: '+ super.fullDesc
    }
guardar(){
        console.log('guardando producto')
    }
        
    
    
}
class Categoria extends DatosBasicos{
    public productos: Producto[] = []
    constructor(     
        name: string,
        desc: string,
        created_at: Date,
        create_by:number,
    ){
        super(name ,desc ,created_at, create_by)
    }
override get fullDesc()  {
        return 'Categoria: '+ super.fullDesc
    }
guardar(){
    console.log('guardando Categoria')
    }
       
    
agregarProductos(producto: Producto){
     this.productos.push(producto)
    }
}
const producto1 = new Producto ( 
 100,
 1 ,
'iphone',
' este es un smartPhone',
new Date(),
1
)
 const categoria = new Categoria(
'celulares',
'', 
new Date(),
1
)
categoria.agregarProductos(producto1)
console.log(producto1.fullDesc)