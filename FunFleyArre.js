
var arreglo = [5,10,11,2,1,9,20];

var ordenadoES5 = arreglo.sort(function (a,b) {
   return a-b;
});

let ordenadoES6 = arreglo.sort((a,b)=>a-b);

console.log( ordenadoES6 );

/*Identificando funciones de flecha y otros ejemplos*/

var restar = (a,b) => a-b;

console.log( typeof restar );
console.log( restar instanceof Function );

// var restar2 = new restar(1,2);

function ejemplo(x,y) {
    ((a,b) => {
        console.log( arguments );
    })();
}

ejemplo(10.20);