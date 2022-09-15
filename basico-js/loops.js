// Tenemos mas de un ciclo en este lenguaje
let estudiantes = ["Camilo", "Manolo", "Maria", "Pepe"]

// El primero es el for
function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`)
}

// Al declarar una variable si no le asignas nada el valor sera undefined y si tratas de añadirle algo no lo hara por que es como si lo multiplicaras por cero o algo parecido Aqui almacenamos la posicion en numeros del array. empezando obviamente desde el cero.

for(let i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i])
    console.log(i);
    // Estamos imprimiendo i para que vean como va aumentando de uno en uno hasta llegar al indece maximo de nuestro array.
}

// la segunda forma de un ciclo, mira lo que le decimos aqui es que por cada iteracion en el singular estudiante utiliza un valor del plural de estudiantes. Aqui almacenamos el dato como tal sea un numero o string.

for (let estudiante of estudiantes) {
    saludarEstudiante(estudiante)
    console.log(estudiante);
}

// Tercera forma de un ciclo. Este esta en la mayoria de lenguajes de programacion. Mira piesalo mientras lo que te digo es verdad vas a ejecutar esto.

while (estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante)
    console.log(estudiante)
}