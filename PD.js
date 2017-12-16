
//parametros opcionales
function saludo( mensaje = "Hola Mundo", tiempo = 1500) {
    //mensaje = mensaje || "Hola Mundo";
    //mensaje = (typeof mensaje !== "undefined")?mensaje : "Hola Mundo";

    setTimeout(function () {
        console.log(mensaje);
    }, tiempo);
}

saludo();

/**/
function saludar( fn = fnTemporal , persona = Persona) {
    fn();
    console.log(persona);
}

function fnTemporal() {
    console.log('Hola Mundo FN');
}

let Persona = {
    nombre:"Fredy Henao"
}

saludar();

/* cómo los valores por defecto afectan el objeto "arguments" */
//afectan cuando no se envian valores a la función y se pone valores por defecto

function sumar(a = 1,b = 2) {
   console.log(arguments);
}

sumar();
