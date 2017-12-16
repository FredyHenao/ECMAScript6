function etiqueta( literales, ...sustituciones) {
    let resultado = "";
    console.log(literales);
    console.log(sustituciones);

    for( let i = 0; i < sustituciones.length; i++ ){
        resultado += literales[i];
        resultado += sustituciones[i];
    }
    return resultado;
}

let unidades = 5,
    costo_unitario = 10;

let mensaje = etiqueta`${unidades} lapices cuestan ${unidades * costo_unitario} pesos.`;

console.log(mensaje);

// usar valores "raw"(crudos) en template literal
let mensaje1 = `Hola \nMundo\\`,
    mensaje2 = String.raw`Hola \nMundo\\`;

//var mensaje3 = String.raw'Hola \nMundo\\';

console.log(mensaje1);
console.log(mensaje2);
//console.log(mensaje3);