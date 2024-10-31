

// let mensage : string = "hola mundo";
// mensage = "chanchito feliz"
// console.log(mensage)

// mensage = "chao mundo"
// console.log(mensage)

// const func = (consfig:any)=>{
// return consfig
// }


// const animal0 = ['chanchito', 'feliz', 'felipe']
// let num:(number | string)[] = [ 1 ,'feliz', 3, 4]

// const num2: Array<number> =[]

// animal0.map((animales)=>{
//     console.log(animales)
// })

// const chica = 's';
// const mediana = 'm'
// const grande = 'l'
// const extragrande= 'xl'

// enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', Extragrande ='xl' };
// const variable1 = Talla.Grande;

// const enum loagingState {Idle , Loading, Success , Error}

// const estado = loagingState.Success

// type Persona = {
//     readonly id: number,
//      nombre?: string
//      talla: Talla
//      direccion:{
//         numero:number,
//         talla:string,
//         pais:string

//      }
//  }
// const objeto: Persona = {
//     id:1,
//     nombre:'Hola Mundo',
//     talla: Talla.Chica,
//     direccion:{
//         numero:1,
//         talla:"siempre viva",
//         pais:"chanchito feliz"

//      }
// }
// const arr :Persona []=[];

// const fn: (a:number) =>String = (edad :number)=>{
// if (edad > 17 ) 
//     return "puedes ingresar "
// return 'no puedes pasar'
// }
// const validaEdad = (edad: number, msg = 'chanchito feliz'): string => {
//     if (edad > 17) {
//         return `puedes ingresar${msg}`;
//     } else {
//         return 'no puedes ingresar';
//     }
// };
// validaEdad(18)

// const ErrorUsuario = (): never=>{
// throw new Error('error Usuario')
// }

// let puntaje:number | string =98

// puntaje = 'hola mundo'

// type Animal = {
//     id: number,
//     estado:string
// }
// type  Usuario ={
//     id:number,
//     estado: string,
//     name:string
// }
// let usuario: Usuario = {
//     id: 1,
//     estado:'',
//     name:""
// }

// let animal: Animal | Usuario = {
//     id:1,
//      estado:'',
//      name:""
//     }

//     const sumaDos= (n:number|string): number  =>{
//         if (typeof n === 'number') {
//              return n + 2
//         }
//        return parseInt(n) + 2

//     }

//     console.log('2' + 2)

//   type Audit ={
// created_at: string,
// modified_at:string

//   }
//   type Product ={
//     name:string
//   }
//   const product: Audit & Product= {
//     created_at: '',
//     modified_at:'',
//     name:''
//   }
// type Fibo = 0|1|2|3|5
//   const nDeFibo: Fibo = 3


//   const toNumber = (s:string | null| undefined)=>{
//    if (!s) {
//     return 0
//    }   
//    return parseInt(s)
   
//   }
//   const n = toNumber(null)

//   const getUsers=(id:number )=>{
// if (id < 0) {
//    return null 
// }
// return{
//     id:1,
//     name: 'felipe',
//     create_at: new Date()
// }
//   }
//   const user= getUsers(1)
// console.log('Usuario '+ user?.create_at)

// if (user && user.create_at) {
    
// }
// const arr1 = null;
// console.log(arr1?.[0])

// const fn5:any = null

// console.log(fn5?.())

// const difficulty: number | null = 0

// const user2 = {
//     username: 'chanchito feliz',
//     difficulty: difficulty ?? 1,
// }
// console.log(user2)
// const elemento : any = null;
// const elemento1 = elemento as number


// const Lala = (x:string | number) =>{
//     if (typeof x === 'number') {
        
//     }
    

//     const prosesa =(algo: unknown)=>{
//         if (typeof algo === 'string') {
//             algo.toUpperCase
//         }
//         if (typeof algo === 'number') {
//             return algo.toString()
//         }
//         if (algo instanceof String) {
            
//         }
//         algo.haceCosas()
//         algo.otrasCosas()
//         algo.genkiDama()
//     }
class Personaje {
profesion?: string
    private static equipo: number = 1
constructor(
    public readonly id: number,
    public name:string,
    public nivel: number,
    private _hp: number
    ){

    }
    subirNivel(): number{
        this.nivel++
        return this.nivel
    }
   static agregarPersonaje():void{
        Personaje.equipo++
    }
    cambiarHP(cantidad : number):number{
        this._hp= this._hp + cantidad
        // no pasarse del maximo
        return this._hp
    }
    get hp():number{
        return this._hp
    }
    static getEquipo():number{
        return Personaje.equipo
    }
}
const personaje = new Personaje(1 , 'Josue' , 1 , 100)
personaje.cambiarHP(-10)

const personaje1 = new Personaje(2,"Chanchito",1,120,)
Personaje.agregarPersonaje()
console.log(Personaje.getEquipo())
