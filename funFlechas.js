/*Arrow Functios -- Funciones de Flecha(=>)
Este tipo de funciones tienen una sintaxis variada que depende de lo que quieras realizar.
Pero normalmente tienen la misma estructura
1. Función con argumentos
2. Seguido de una flecha gorda =>
3. Seguido del cuerpo de la función
*Para qué sirven?
1. Menos código que es más simple de interpretar
2. No hay un nuevo "this" dentro de las funciones
3. No hay constructores, no tiene new
4. No puedes cambiar el valor del "this" aunque uses call(), apply() o bind()
5. No hay objeto "arguments"
6. Rntre otras cosas...
* Características principales
1. No hay creación de this, super, arguments y new.target
2. No puede ser llamado con new
3. No tienen prototypes
4. No pueden cambiar el valor de this
5. No hay relación con el objeto arguments
6. No pueden tener numeros duplicados a la hora de enviar parametros
 *
 * Ejemplos*/

var miFuncion1 = function (valor) {
    return valor;
}

let miFuncion2 = valor => valor;

var sumar1 = function (num1,num2) {
    return num1+num2;
}

let sumar2 = (num1,num2) => num1+num2;

var saludar1 = function () {
    return "Hola Mundo";
}

let saludar2 =() => "Hola Mundo";



var saludarPersona = function (nombre) {
    var salida = "Hola, " + nombre;
    return salida;
}

let saludarPersona1 =nombre =>{
    let salida = `Hola, ${nombre}`;
    return salida;
}
console.log(saludarPersona("Fredy"));
console.log(saludarPersona1("Edilma"));


/***********/

var obtenerLibro = function (id) {
    return{
        id:id,
        nombre:"Harry Potter"
    }
}

let obtenerLibro1 = id => ({ id:id,
    nombre:"Harry Potter" });





