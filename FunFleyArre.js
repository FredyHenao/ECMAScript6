
var arreglo = [5,10,11,2,1,9,20];

var ordenadoES5 = arreglo.sort(function (a,b) {
   return a-b;
});

let ordenadoES6 = arreglo.sort((a,b)=>a-b);

console.log( ordenadoES6 );