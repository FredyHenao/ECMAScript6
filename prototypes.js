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

/*Destructuración de objetos anidados*/

let autoGuardado = {
    archivo: "app.js",
    cursor: {
        linea: 7,
        columna: 16
    },
    ultimoArchivo:{
        archivo: "index.html",
        cursor: {
            linea: 8,
            columna: 20
        }
    },
    otroNodo:{
        subNodo:{
            cursor: {
                linea: 11,
                columna: 11
            }
        }
    }
}

let { cursor:cursorActivo } = autoGuardado;
console.log( cursorActivo );

let { ultimoArchivo:{ cursor:ultimoArchivo } } = autoGuardado;
console.log( ultimoArchivo );

let { otroNodo:{ subNodo:{ cursor:otroSuperNodo } } } = autoGuardado;
console.log( otroSuperNodo );

let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log( otroSuperNodo2 );

/*Destructuración de arreglos*/

let frutas = ["banano","pera","uva"];
let [ fruta1, fruta2 ] = frutas;

console.log( fruta1 );
console.log( fruta2 );

let [,,fruta3] = frutas;
console.log( fruta3 );

let otraFruta = "manzana";

[ otraFruta ] = frutas;
console.log( otraFruta );

