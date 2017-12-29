/*Miembros estáticos y métodos computados*/

let nombreMetodo = "gritarNombre";

class Persona{
    constructor( nombre ){
        this.nombre = nombre;
    }

    decirNombre(){
        console.log( this.nombre );
    }

    [ nombreMetodo ](){
        console.log( this.nombre.toUpperCase() );
    }

    static crear( nombre ){
        return new Persona( nombre );
    }
}

let yo = Persona.crear( "Fredy" );

console.log( yo );