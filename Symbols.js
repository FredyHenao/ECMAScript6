/*Los símbolos
* son un tipo de dato único.. nuevo... diferente...
*undefined
*null
*boolean
*number
*string
*object
*symbol = siempre son diferentes*/

let primerNombre = Symbol("primer nombre");
let segundoNombre = Symbol();

let persona = {
  [segundoNombre]: "Henao"
};

persona[primerNombre] = "Fredy";

console.log( persona[primerNombre] );
console.log( persona[segundoNombre] );
console.log( primerNombre );
console.log( segundoNombre);

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log( simbolo1 == simbolo2 );
console.log( simbolo1 === simbolo2 );
console.log( Object.is(simbolo1, simbolo2) );

console.log( typeof primerNombre);

/*Compartiendo simbolos - Symbol.for() "simbolos compartidos" y Symbol.keyFor*/

let userID = Symbol.for("userID");
let objeto = {};

objeto[userID] = '12345';

console.log( objeto[userID] );
console.log( userID );

let userID2 = Symbol.for("userID");

console.log( userID == userID2 );
console.log( userID === userID2 );
console.log( Object.is(userID, userID2) );

console.log( objeto[userID2] );
console.log( userID2 );

let id = Symbol.for("id unico");
console.log( Symbol.keyFor( id ) );

let id2 = Symbol.for("id unico");
console.log( Symbol.keyFor( id2 ) );

console.log( id === id2 );

let id3 = Symbol("id unico");
console.log( Symbol.keyFor( id3 ) );

/*Coerción de los símbolos*/

let id4 = Symbol.for("id");
let numero = 10;
let texto = '10';
let bool = true;
let NotAN = NaN;

console.log( numero + texto );
console.log( "Mi simbolo es:", id4 );
console.log( "Mi simbolo es:" + String(id4) );

/*Recuperando las propiedades símbolo*/

let id5 = Symbol.for("ID");
let activo = Symbol.for("activo");

let persona1 = {
    [id5]: "123",
    [activo]: true,
  nombre: "Fredy",
  apellido: "Henao",
  edad: 31
};

console.log( Object.keys(persona1) );

for( key in persona1 ){
    console.log( key, persona1[key] );
}

let simbolos = Object.getOwnPropertySymbols(persona1);
console.log( simbolos );

for( i in simbolos ){
    console.log( simbolos[i], Symbol.keyFor( simbolos[i] ) );
}