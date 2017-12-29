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

/*Clases como expresiones*/

let Persona2 = class{

    constructor(){
        this.nombre = "";
        this.edad = 21;
        this.direccion = "Facatativá"
    }

    decirNombre(){
        console.log( "Hola Mundo" );
    }
}

let mario = new Persona2();
console.log( typeof mario );
console.log( mario instanceof Persona2 );

/*Clases como parámetros*/

class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }

    getArea(){
        return this.lado * this.lado;
    }
}

function imprimirCuadrado( cuadrado ) {
    if( !(cuadrado instanceof Cuadrado) ){
        console.log( "El parametro enviado no es un cuadrado" );
    }

    console.log( cuadrado.getArea() );
}

let mesa = new Cuadrado(10);

//imprimirCuadrado("Fredy");
imprimirCuadrado( mesa );
