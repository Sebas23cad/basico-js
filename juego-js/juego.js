// piedra = 1, papel = 2, tijera = 3

let jugador = 0
let pc = 0
let min = 1
let max = 3

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min )
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra 🥌"
    } else if (jugada == 2) {
        resultado = "Papel 🧻"
    } else if (condition) {
        resultado = "Tijera ✂"
    } else {
        alert("Elije una opcion correcta!")
    }
    return resultado
}

let pc = aleatorio(min, max)
jugador = prompt("1.Piedra, 2.Papel, y 3.Tijera")

alert("EL pc eligio: " + eleccion(pc))
alert("EL pc eligio: " + eleccion(jugador))

// Combate

let triunfos = 0
let perdidas = 0

while (triunfos >= 3 && perdidas >= 3) {
    if (jugador == pc) {
        alert("Empataste con " + eleccion(pc) + " contra " + eleccion(jugador))
    } else if (jugador == 1 && pc == 3) {
        alert("Ganaste con " + eleccion(jugador) + " 🥌 contra " + eleccion(pc) + " ✂")
    } else if (jugador == 2 && pc == 1) {
        alert("Ganaste con " + eleccion(jugador) + " 🧻 contra " + eleccion(pc) + " 🥌")
    } else if (jugador == 3 && pc == 2) {
        alert("Ganaste con " + eleccion(jugador) + " ✂ contra " + eleccion(pc) + " 🧻")
    } else {
        alert("Perdiste con " + eleccion(jugador) + " contra " + eleccion(pc))
    }
}

// const opciones = ["Piedra", "Papel", "Tijera"]

// jugador = prompt("1.Piedra, 2.Papel, y 3.Tijera")

// Mi solucion
// if (jugador == pc) {
//     alert("Empataste con " + opciones[jugador - 1] + " contra " + opciones[pc - 1])
// } else if (jugador == 1 && pc == 3) {
//     alert("Ganaste con " + opciones[jugador - 1] + " 🥌 contra " + opciones[pc - 1] + " ✂")
// } else if (jugador == 2 && pc == 1) {
//     alert("Ganaste con " + opciones[jugador - 1] + " 🧻 contra " + opciones[pc - 1] + " 🥌")
// } else if (jugador == 3 && pc == 2) {
//     alert("Ganaste con " + opciones[jugador - 1] + " ✂ contra " + opciones[pc - 1] + " 🧻")
// } else {
//     alert("Perdiste con " + opciones[jugador - 1] + " contra " + opciones[pc - 1])
// }