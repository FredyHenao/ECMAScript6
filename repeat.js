/*let texto = "Hola";

console.log( texto.repeat(2) );

const ESPACIOS = 12;

let nombres = ["Fernando","Melissa","Juan"];
let telefonos = ["99887766","33445566","22334455"];

for(i in nombres){
    let dif = ESPACIOS - nombres[i].length;
    console.log( nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);
}*/

//template literal

let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;

console.log( nombreCompleto );

let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`;
console.log( nombreCompleto2 );

function obtenerNombre() {
    return "Maria Perez";
}
let nombreCompleto3 = `El nombre completo es ${obtenerNombre()}`;
console.log( nombreCompleto3 );

//multilinea

let multiLinea = `<h1 class="algo" ${nombre}</h1>
<p>Hola mundo ${apellido}</p>
I'am Fredy`;
console.log( multiLinea );