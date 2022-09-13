let opciones = ["papel", "piedra", "tijera"]

let enemigo = 0
let jugador = 0

if (opciones[enemigo] === opciones[jugador]) {
    console.log("Es un empate");
} else if (opciones[jugador] === 0 && opciones[enemigo] === 1) {
    console.log("ganaste con papel")
} else if (opciones[jugador] === 1 && opciones[enemigo] === 2) {
    console.log("ganaste con papel") 
} else if (opciones[jugador] === 2 && opciones[enemigo] === 0) {
    console.log("ganaste con papel")
} else {
    console.log("Perdiste")
}
