/*El operador Spread
* Muy cercano al REST, se encuentra el operador "SPREAD"
* Mientras que el parámetro "REST" permite especificar argumentos independientes que serán combinados en un arreglo, el operador "SPREAD" permite especificar un arreglo que será separado y cada item enviado será un argumento independiente a la función*/

let numeros = [1,2,3,4,19,349,234];

//var max = Math.max.apply(Math, numeros);
let max = Math.max(...numeros);

console.log(max);