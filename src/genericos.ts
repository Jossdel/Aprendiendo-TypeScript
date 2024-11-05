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