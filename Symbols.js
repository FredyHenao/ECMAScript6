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
console.log( "Hola " + Symbol.keyFor( id2 ) );

console.log( id === id2 );

let id3 = Symbol("id unico");
console.log( Symbol.keyFor( id3 ) );

