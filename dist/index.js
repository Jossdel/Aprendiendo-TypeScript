"use strict";
let mensage = "hola mundo";
mensage = "chanchito feliz";
console.log(mensage);
mensage = "chao mundo";
console.log(mensage);
const func = (consfig) => {
    return consfig;
};
const animal0 = ['chanchito', 'feliz', 'felipe'];
let num = [1, 'feliz', 3, 4];
const num2 = [];
animal0.map((animales) => {
    console.log(animales);
});
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["Extragrande"] = "xl";
})(Talla || (Talla = {}));
;
const variable1 = Talla.Grande;
const estado = 2;
const objeto = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        talla: "siempre viva",
        pais: "chanchito feliz"
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 17)
        return "puedes ingresar ";
    return 'no puedes pasar';
};
const validaEdad = (edad, msg = 'chanchito feliz') => {
    if (edad > 17) {
        return `puedes ingresar${msg}`;
    }
    else {
        return 'no puedes ingresar';
    }
};
validaEdad(18);
const ErrorUsuario = () => {
    throw new Error('error Usuario');
};
let puntaje = 98;
puntaje = 'hola mundo';
let usuario = {
    id: 1,
    estado: '',
    name: ""
};
let animal = {
    id: 1,
    estado: '',
    name: ""
};
const sumaDos = (n) => {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
};
console.log('2' + 2);
const product = {
    created_at: '',
    modified_at: '',
    name: ''
};
const nDeFibo = 3;
const toNumber = (s) => {
    if (!s) {
        return 0;
    }
    return parseInt(s);
};
const n = toNumber(null);
const getUsers = (id) => {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: 'felipe',
        create_at: new Date()
    };
};
const user = getUsers(1);
console.log('Usuario ' + user?.create_at);
if (user && user.create_at) {
}
const arr1 = null;
console.log(arr1?.[0]);
const fn5 = null;
console.log(fn5?.());
const difficulty = 0;
const user2 = {
    username: 'chanchito feliz',
    difficulty: difficulty ?? 1,
};
console.log(user2);
const elemento = null;
const elemento1 = elemento;
const Lala = (x) => {
    if (typeof x === 'number') {
    }
    class Personaje {
        id;
        name;
        nivel;
        _hp;
        profesion;
        static equipo = 1;
        constructor(id, name, nivel, _hp) {
            this.id = id;
            this.name = name;
            this.nivel = nivel;
            this._hp = _hp;
        }
        subirNivel() {
            this.nivel++;
            return this.nivel;
        }
        static agregarPersonaje() {
            Personaje.equipo++;
        }
        cambiarHP(cantidad) {
            this._hp = this._hp + cantidad;
            return this._hp;
        }
        get hp() {
            return this._hp;
        }
        static getEquipo() {
            return Personaje.equipo;
        }
    }
    const personaje = new Personaje(1, 'Josue', 1, 100);
    personaje.cambiarHP(-10);
    const personaje1 = new Personaje(2, "Chanchito", 1, 120);
    Personaje.agregarPersonaje();
    console.log(Personaje.getEquipo());
};
//# sourceMappingURL=index.js.map