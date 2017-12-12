let texto = "Hola";

console.log( texto.repeat(2) );

const ESPACIOS = 12;

let nombres = ["Fernando","Melissa","Juan"];
let telefonos = ["99887766","33445566","22334455"];

for(i in nombres){
    let dif = ESPACIOS - nombres[i].length;
    console.log( nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);
}