// Array es lo mismo o se le conoce como lista de datos
let frutas = ["Manzana", "Mangos", "Pera", "Piña"]
console.log(frutas);

// añadir datos a un array con metodos
let masFrutas = frutas.push("Platanos");
console.log(masFrutas);

// Eliminar elementos en un array con metodos
let ultimo = frutas.pop("Platanos")
console.log(ultimo);

// Agregar un valor al principio del array
let nuevaLongitud = frutas.unshift("Uvas")
console.log(nuevaLongitud);

// Borrar la primera fruta
let borrarFruta = frutas.shift("Uvas")
console.log(borrarFruta);

// Conocer el indice con un elemento
let posicion = frutas.indexOf("Pera")
console.log(posicion);

// No es necesario hacer variables para añadir elementos a un array.

// Acceder valores en el array lo hacemos asi
console.log(frutas[1]);

// ver los elementos del array
console.log(frutas.length);