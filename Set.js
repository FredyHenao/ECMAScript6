/*Los Set
los sets son una lista ordenada de valores sin duplicados.
Permiten un rápido acceso a la data que contienen
* Hostoricamente, JavaScript sólo ha tenido un tipo de colección de datos los array
* Y aunque muchos digan que los objetos son una colección de pares de valores, no son realmente una colección de datos*/

let items = new Set( [1,2,3,4,5,6,7,7,7,7] );
/*add->agregar un elemento. has->saber si existe el elemento*/
console.log( items.has(7) );

/*items.add(10);
items.add(11);
items.add(8);
items.add(7);
items.add(7);
items.add(7);
items.add("7");

console.log( items.size );*/

console.log( items );

/*Removiendo valores*/

let items2 = new Set( [1,2,3,4,5] );
//eliminar un valor
items2.delete( 3 );

console.log( items2 );

//eliminar todos los valores
items2.clear();

console.log( items2 );

/*forEach() en los Sets*/

let personas = new Set(["Fredy","Jhon","Edilma"]);

personas.forEach( function ( valor, llave, setOriginal) {
    console.log( valor, llave, setOriginal );
    console.log( personas === setOriginal );
} );
