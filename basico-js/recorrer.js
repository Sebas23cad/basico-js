// Creamos el array con los objetos
let articulos = [ 
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 200},
    { nombre: "Celular", costo: 3400},
    { nombre: "Laptop", costo: 3800},
    { nombre: "Teclado", costo: 500},
    { nombre: "Airpods", costo: 560}
]

// Validar si algo es verdad o falso para añadirlo en un nuevo array.

var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500
})

console.log(articulosFiltrados);

// Mapear articulos para añadirlo a un nuevo array.

let nombreArtuculos = articulos.map(function(articulo) {
    return articulo.nombre
})

console.log(nombreArtuculos);

// Encontrar algo dentro del array y lo guardamos en un nuevo array

let encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop"
})

console.log(encuentraArticulo);

// Para filtrar cosas aqui no necesariamente nos crea un nuevo array, lo usamos para filtrar y podemos usarlo para crear cosas aun mas complejas, pero eso en un futuro.

articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
})

// Nos regresa una validacion de verdadero o falso.

let articuloBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 1000
})

console.log(articuloBaratos);
// Aqui no nos regresa los articulos nos regresa si es verdad o no lo que le ponemos.