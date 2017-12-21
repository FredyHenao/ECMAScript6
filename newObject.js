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