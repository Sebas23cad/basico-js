// condicional if
let edad = 15

if (edad < 18 && edad >= 15) {
    console.log(edad + " eres menor");
} else if (edad >= 18) {
    console.log(edad + " Eres mayor");
} else {
    console.log("Se que eres menor de 15 un niño")
} 

// La diferencia es que en el uno es mas estricto a mi parecer osea aun no investigo si puedo usar signos de comparacion pero de momento asi funciona. Importante siempre poner el break porque rompe la validacion cuando uno es verdad

switch (edad) {
    case 15:
        console.log(`${edad} eres menor`);
    break;
    case 18:
        console.log(`${edad} eres mayor`);
        break;
    default:
        console.log("Se que eres menor de 15 años");
        break;
}

// Sintaxis de un operador ternario 
// condition ? true : false;

let numero = 1

let resultado = numero === 1 ? "Si soy un uno" : "No soy un uno"

// condicional switch

switch (numero) {
    case 1:
        console.log("Soy un uno");
        break;
    case 10:
        console.log("Soy un dies");
        break;
    default:
        console.log("No soy nada");
        break;
}