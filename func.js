//aclarando el doble comportamiento de las funciones

/*ecmascript 5*/

function Persona(nombre) {
    if( this instanceof Persona){
         this.nombre = nombre;
    } else {
        throw new Error("Esta función, debe ser utilizada con el new");
    }

    this.nombre = nombre;
}

var persona = new Persona("Fernando");

var noEsPersona = Persona.call(persona,"Fernando");

console.log(persona);
console.log(noEsPersona);

/*ecmascript 6 -- new.target -- meta propiedad
*Una meta propiedad, es una propiedad de un no-objeto, que provee información adicional relacionada con su procedencia(como el new)
* Cuando el constructor de la función es llamada, new.target se llena con el operador new.
* Si la función "Call()" es ejecutada, "new.target" no estará definida ya que no se ejecutó el constructor*/

function Persona(nombre) {
    if( typeof new.target !== "undefined"){
        this.nombre = nombre;
    } else {
        throw new Error("Esta función, debe ser utilizada con el new");
    }

    this.nombre = nombre;
}

var persona = new Persona("Fernando");

var noEsPersona = Persona.call(persona,"Fernando");

console.log(persona);
console.log(noEsPersona);
