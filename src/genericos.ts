// const log= <T>(a: string, b: T): T=> {
// console.log(a, b);

// return b
// }

// log<number>('dato' ,34)
// log('dato' ,'')
const fetchData = async<T>(resurso:string ): Promise<T> =>{
const respuesta = await fetch(`${resurso}`)
return respuesta.json()
}
type User = {
    id: string,
    name: string,
}
const main = async()=>{
    const user = await fetchData<User>('/usuarios')
    user.id
}
type Computador = {
    encender: ()=>void,
    apagar:  ()=>void
}

class Programador<T>{
    computador:T;
    constructor(t: T){
        this.computador= t
    }
}
const programador = new Programador<Computador>({encender: ()=>{},apagar:()=>{}})
const programador1 = new Programador<string>('hola mundo')


interface KeyValue<T, V> {
    key: T;
    value: V;
}

interface Product1 {
    id: string;
}

const fetchProduct = (): KeyValue<string, Product1> => {
    return {
        key: 'id del producto',
        value: { id: 'id de producto' }
    };
};
const fetchStock =(): KeyValue<string, number> =>{

return{
    key:'is de producto',
    value: 500
}
} 

// interface Usuario1 {
//     id:string
//     name:string
// }
class Usuario2{
    constructor(
        id:string,
        name:string
    ){}
}

const print1 = <T extends Usuario2 >(t:T):T =>{
    console.log(t);
    return t
}

print1({id:'user_id',name:'felipe'})

class Estado <T>{
protected data: T[]=[];
agregar(t:T): void{
    this.data.push(t)
}
getestado():T[] {
return this.data
}
}
type ObjectId ={
    id:string
}
class EstadoEliminar<T extends ObjectId > extends Estado<T>{
    eliminar(id:string){
        this.data = this.data.filter(x=> x.id !== id)
    }
}

class estadoUsuarios<T> extends Estado <Usuario2>{
    reiniciarContracenas(){
        //
    }
}



type Calendario ={
    id:number,
    fuente:string,
    dueno:string,
}
const calendar:Calendario = {id:1 ,fuente:'Google', dueno:'yo' }

const getProp=<T>(objet:T, property:keyof T):unknown=>{
    return objet[property]
}
getProp(calendar ,'id')
getProp(calendar ,'fuente')
getProp(calendar ,'dueno')

type Punto = {
    x: number,
    y:number,
    desc?:string,
}
type PuntoOpcional= Partial<Punto>
type PuntoRequire= Required<Punto>

const KeyVal:Record<string ,number >={
    'soy un string':42
}
const p: Omit<Punto,'desc'| 'y' >={
x:1
}
const p1: Pick<Punto, 'x'|'y'>={
    x:1,
    y:2
}

const readOnlyP: Readonly<Punto> ={
    x:1,
    y:3,
    desc: 'soy una descripcion'
}

