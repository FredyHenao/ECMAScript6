/*clases ECS5*/

function Persona1( nombre ) {

    this.nombre = nombre;

    this.gritarNombre = function () {
        console.log( this.nombre.toUpperCase() );
    }
}

Persona1.prototype.decirNombre = function () {
    console.log( this.nombre );
}

let fredy = new Persona1("Fredy");

fredy.gritarNombre();
fredy.decirNombre();

/*Clases en ECS6*/

class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    decirNombre(){
        console.log( this.nombre );
    }
}

let jhon = new Persona("Fredy");
jhon.decirNombre();

console.log( typeof Persona );
