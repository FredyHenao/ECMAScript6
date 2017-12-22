/*Prototipos
* La POO de JavaScript se encontraba basada en prototipos y no en clases.(ES6 introduce clases)
* Los prototipos son un conjunto de normas para integrar Programación Orientada a Objetos en JavaScript. pero con los prototipos, nosotros somos capaces de realizar tareas como:- Herencia -encapsulamiento -Abstracción -Polimorfismo*/

let gato = {
    sonido(){
        console.log("Miau!");
    },
    chillido(){
        console.log("MIAU!!!!!");
    }
}

let perro = {
    sonido(){
        console.log("Guau!!");
    }
}

let angora = Object.create( gato );
console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
angora.chillido();

Object.setPrototypeOf( angora, perro );

console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
angora.chillido();