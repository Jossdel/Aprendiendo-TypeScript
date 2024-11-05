"use strict";
class Caballo {
    name = 'Rosinante';
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'hinc';
    }
}
class Cerdo {
    name = 'oinc';
    caminar() {
        console.log('cerdo camninando');
    }
    onomatopeya() {
        return 'oinc';
    }
}
class Perro {
    name = 'fido';
    caminar() {
        console.log('perro caminando');
    }
    onomatopeya() {
        return 'ladrido';
    }
}
class DiccionacioUsuarios {
}
let diccionarioUsuarios = new DiccionacioUsuarios();
diccionarioUsuarios['1a'] = 'usuario 1';
diccionarioUsuarios['a1'] = 'usuario 2';
console.log(diccionarioUsuarios);
//# sourceMappingURL=interfaces.js.map