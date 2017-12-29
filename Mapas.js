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

/*Inicialización de mapas*/

let mapa1 = new Map( [ ["nombre","Jhon"], ["edad",21], [undefined,null] ] );

console.log( mapa1 );

console.log( mapa1.get( undefined ) );

/*foreach() de los mapas*/

let mapa2 = new Map( [ ["nombre","Jhon"], ["edad",21] ] );

mapa2.forEach( (valor, llave, mapaOrigen) => {
    console.log( ` Llave: ${llave}, valor: ${valor} ` );
    console.log( mapaOrigen );
} );