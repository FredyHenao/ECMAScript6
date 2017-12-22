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
//angora.chillido();

/*Acceso al prototipo con la referencia "SUPER"*/

let persona = {
  saludar(){
      return "Hola";
  }
};

let amigo = {
  saludar(){
      //ES5
      //return Object.getPrototypeOf(this).saludar.call(this) + ", saludos!!!";
      //ES6
      return super.saludar() + ", saludos!!!";
  }
};

Object.setPrototypeOf( amigo, persona );

console.log( amigo.saludar() );

/*Destructuración de objetos*/

let ajustes = {
    nombre : "Fredy Henao",
    email : "fredy@gmail.com",
    facebook : "fre45y",
    google : "jhon45",
    premium : true,
    twitter : "jhon453"
}

let { nombre, email, facebook = "jajaaj", twitter:cuentaTwi = "fre45"} = ajustes;

console.log( cuentaTwi, facebook );