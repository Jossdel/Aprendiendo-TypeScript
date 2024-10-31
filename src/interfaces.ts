interface  Animal{
    name: string

    caminar():void;
    onomatopeya():string
}
class Caballo implements Animal{
    name:string = 'Rosinante'
   caminar(): void {
        console.log('caminando')
    }
     onomatopeya(): string {
        return'hinc'
    }
}
class Cerdo implements Animal{
    name: string = 'oinc'
    caminar(): void {
       console.log('cerdo camninando')
    }
    onomatopeya(): string {
        return'oinc'
    }
 
}
class Perro implements Animal{
    name: string ='fido'
    caminar(): void {
       console.log('perro caminando');
    }
    onomatopeya(): string {
        return 'ladrido'
    }

}
class DiccionacioUsuarios{
    [id: string]: string
}
let diccionarioUsuarios = new DiccionacioUsuarios()
diccionarioUsuarios['1a']= 'usuario 1'
diccionarioUsuarios['a1']= 'usuario 2'
console.log(diccionarioUsuarios);