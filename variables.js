/**
 * Created by FredyHenao on 24/10/2017.
 */
/* Scope */
/**El ámbito de una variable(llamado "scope" en ingles)
 * es la zona del programa en la que se define la variable
 * JavaScript define dos ámbitos para las variables
 * Global Función
 *
 * en ecmascript6 no hay re-declaracion de variables
**/
/*let mensaje = "1234";

if(1===1){
    let mensaje = "Hola Mundo";
    console.log(mensaje);
}

console.log(mensaje);*/

/* Declaración de variables constantes
 *  es buena practica que las constantes se escriban en mayuscula
 *  tienen que inicializarce en el momento que se declara
 * no se le pueden reasignar valores
 *  se pueden declarar objetos
 *  no se puede volver a declarar
 */

const IMPUESTO_SV = 15.5;

const PERSONA = {
    nombre: "Fredy",
    apellido: "Henao"
}
PERSONA.nombre = "Jhon";

if( true ){
    const IMPUESTO_SV = 19.5;
    console.log(IMPUESTO_SV);
}

console.log(IMPUESTO_SV);

/* declaracion de funciones en ciclos */

var funciones = [];

for( let i=0; i<10; i++ ){
    //versioón 6 cambiando var por let
    funciones.push( function () {
        console.log(i);
    } );
    /* Versión anterior
    funciones.push((function (valor) {
        return function () {
            console.log(valor);
        }
    })(i)
    );*/
}

funciones.forEach( function (func) {
    func();
} );