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
let mensaje = "1234";

if(1===1){
    let mensaje = "Hola Mundo";
    console.log(mensaje);
}

console.log(mensaje);


