/*clases ECS5*/

function Persona( nombre ) {

    this.nombre = nombre;

    this.gritarNombre = function () {
        console.log( this.nombre.toUpperCase() );
    }
}

Persona.prototype.decirNombre = function () {
    console.log( this.nombre );
}

let fredy = new Persona("Fredy");

fredy.gritarNombre();
fredy.decirNombre();



