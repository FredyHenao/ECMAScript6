/*Objetos literales en ES6
* Este tipo de estructura es el patrón más utilizado en JavaScript. (JSON se construyó de esta sintaxis).
* Dichos objetos se encuentran en casi cualquier script en el internet, casi el 99% de los programadores los utilizan en algún punto.*/

function crearPersona( nombre, apellido, edad ) {
    return{
        /*ES5
        nombre:nombre,
        apellido:apellido,
        edad:edad
        */
        //ES6
        nombre,
        apellido,
        edad
    }
}

var fredy = crearPersona("Fredy","Henao",30);

console.log( fredy );

/*Metodos simples o concisos*/

var persona = {
    nombre: "Fernando",

    /*getNombre: function () {
        console.log( this.nombre );
    }*/
    //metodo conciso
    getNombre(){
        console.log( this.nombre );
    }
}

persona.getNombre();