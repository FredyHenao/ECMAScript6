var saludo1 = function (nombre) {
    return "Hola " + nombre;
}("Fredy");

console.log( saludo1 );

let saludo2 = ( nombre => `Hola ${nombre}` )("Jhon");

console.log( saludo2 );