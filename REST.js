/*El parámetro "rest" es indicado con tres puntos (...) seguido del nombre que le asignaremos a dicho parámetro
* Ese paraámetro se convierte en un arreglo que contiene el "resto" de los parámetros pasados a la función
* De ahí se origina el nombre "REST"*/

function agregar_alumnos( arr_alumnos, ...alumnos) {
    for ( let i = 0; i < alumnos.length; i++){
        arr_alumnos.push(alumnos[i]);
    }
    return arr_alumnos;
}

let alumnos_arr = ["Fernando"];
let alumnos_arr2 = agregar_alumnos(alumnos_arr, "Maria","Pedro","Susana","Juan","Hernando");

console.log(alumnos_arr2);