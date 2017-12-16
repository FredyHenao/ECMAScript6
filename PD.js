
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