/*Maps-> tiene una llave y un valor
* tienen: Has(), delete(), clear(), size, iteraciones*/

let mapa = new Map();

mapa.set( "nombre", "Fredy" );
mapa.set( "apellido" );
mapa.set( "edad", 21 );

console.log( mapa );
console.log( mapa.size );

console.log( mapa.get( "nombre" ) );
console.log( mapa.get( "edad" ) );
console.log( mapa.has( "nombre") );
console.log( mapa.has( "apellido" ) );

mapa.delete( "nombre" );
console.log( mapa.has( "nombre" ) );
console.log( mapa.get( "nombre" ) );

mapa.set( "edad" );
console.log( mapa );


mapa.clear();

console.log( mapa );