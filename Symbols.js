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
