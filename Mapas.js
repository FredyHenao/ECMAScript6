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

/*Nuevo ciclo FOR-OF-> ciclo especializado para las colecciones*/

/*let numeros = [100,20,30,50,200];

for(let i = 0; i < numeros.length; i++){
    console.log( numeros[i] );
}

for(let i in numeros){
    console.log( numeros[i] );
}

for( let numero of numeros ){
    console.log( numero );
}*/

let personas = [
    { nombre: "Fredy",edad:21 },
    { nombre: "Edilma",edad:54 },
    { nombre: "Mario",edad:34 },
    { nombre: "Victor",edad:34 },
    { nombre: "Nestor",edad:45 }
];

for( let per of personas){
    console.log( per.nombre, per.edad );
}

let personas1 = new Set();

personas1.add( { nombre:"Fredy", edad:21 } );
personas1.add( { nombre:"Jhon", edad:21 } );
personas1.add( { nombre:"Gerardo", edad:31 } );

for( let per of personas1){
    console.log( per.nombre, per.edad );
}

let mapa3 = new Map( [ ["nombre","Jhon"], ["apellido","Henao"] ] );

for( let detalle of mapa3){
    console.log( detalle );
}