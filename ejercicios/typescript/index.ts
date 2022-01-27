console.log('hello typescript');

//boolean
let muted: boolean = true;
muted = false;

//numeros
let age = 6;
let numerador:number = 42;
let denominador:number = age;
let resultado = numerador / denominador;

//string
let nombre:string = 'Luis';
let saludo = `me llamo ${nombre}`;

//arreglos
let people:string [] = [];
people = ["Isabel", "Nicole", "Raul"];
// people.push(9000)

let peopleandNumbers: Array<string | number> = [];
peopleandNumbers.push("luis");
peopleandNumbers.push(89);

// Enum
enum Color{
    Rojo = 'rojos',
    Verde = 'verde',
    Azul = 'azul',
    Amarillo = 'amarillo',
}

let colorFavorito: Color = Color.Azul;
console.log(`mi color favorito es ${colorFavorito}`);

// any
let comodin:any = 'joker';
comodin = {type: 'wildcard'};

// object
let someObject:object = { type: 'wildcard'};
// funciones
function add(a:number, b:number):number{
    return a+ b; 
}

const sum = add(2, 3);

function createAdder (a:number): (b:number) => number {
    return function (b:number):number {
        return b + a;
    };
};

const addFor = createAdder(4);
const forPlus6 = addFor(6);

let myAdd:(a:number, b:number) => number = function(x:number, y:number):number{return x + y};

function fullName(firstName:string, lastName?:string):string{
    return `${firstName} ${lastName}`;
}

const luis = fullName('luis', 'castilla');
const dayro = fullName('dayro');
console.log(dayro)

// interface
interface Rectangulo{
    ancho:number
    alto:number
    color?:Color
};

let rect:Rectangulo = {
    ancho:4,
    alto:6,
};

function area(r:Rectangulo):number{
    return r.alto * r.ancho
};
const areaRect = area(rect);
console.log(areaRect);

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
};

console.log(rect.toString());