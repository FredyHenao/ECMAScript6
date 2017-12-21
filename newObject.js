/*Nuevo metodo Object.is*/
console.log( +0 == -0 );
console.log( +0 === -0 );
console.log( Object.is(+0, -0) );

console.log( "=========" );

console.log( NaN == NaN );
console.log( NaN === NaN );
console.log( Object.is(NaN,NaN) );

console.log( "=========" );

console.log( 5 == 5);
console.log( 5 == "5" );

console.log( 5 === 5);
console.log( 5 === "5" );

console.log( "=========" );

console.log( Object.is(5 ,5));
console.log( Object.is(5 ,"5") );

/*Nuevo metodo Object.assign*/
//pasar propiedades de una objeto a otro sin utilizar herencia

//ES5
function mezclar( objReceptor, objDonador) {
    Object.keys( objDonador ).forEach( function (key) {
        objReceptor[key] = objDonador[key];
    } );

    return objReceptor;
}

var objReceptor = {};
var objDonador = {
  get nombre(){
      return "mi-archivo.js"
  }
};

console.log( mezclar( objReceptor, objDonador ) );

//ES6
console.log("=======ES6")
console.log( Object.assign( objReceptor, objDonador ) );

/*Orden de la enumeración de las propiedades de los objetos
* todas las llaves van en orden ascendente
* todas las llaves tipo string, van ordenadas en la manera que fueron agregadas al objeto
* todos los símbolos en el orden que fueron agregados al objeto*/

var objeto = {
    c: 1,
    0: 1,
    x: 1,
    15: 1,
    r: 1,
    3: 1,
    b: 1
};

objeto.d = 1;
objeto["2"] = 1;
objeto["a"] = 1;

console.log( Object.getOwnPropertyNames( objeto ).join(",") );

console.log( Object.keys( objeto ) );

console.log( JSON.stringify( objeto ) );

for( i in Object.keys( objeto )){
    console.log( Object.keys( objeto )[i] );
}