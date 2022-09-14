let enemigo
let jugador
let opcionJugador
let opcionEnemigo
let opciones = ["papel", "piedra", "tijera"]

function elejir() {
    jugador = prompt("Escoje una opcion del 1 al 3:")
    if (jugador == 3) {
        return opcionJugador = opciones[2]
    } else if (jugador == 2) {
        return opcionJugador = opciones[1]
    } else if (jugador == 1) {
        return opcionJugador = opciones[0]
    } else {
        return
    }
}

function elejirEnemigo() {
    enemigo = aleatorio(1, 3)
    if (enemigo == 3) {
        return opcionEnemigo = opciones[2]
    } else if (enemigo == 2) {
        return opcionEnemigo = opciones[1]
    } else if (enemigo == 1) {
        return opcionEnemigo = opciones[0]
    } else {
        return
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min )
}

elejirEnemigo()
elejir()

// Validacion con el if

function ganador(enemigo, jugador) {
    if (enemigo === jugador) {
        console.log("Es un empate");
    } else if (jugador === "papel" && enemigo === "piedra") {
        console.log(`Ganaste con ${jugador}`)
    } else if (jugador === "piedra" && enemigo === "tijera") {
        console.log(`Ganaste con ${jugador}`)
    } else if (jugador === "tijera" && enemigo === "papel") {
        console.log(`Ganaste con ${jugador}`)
    } else {
        console.log(`Perdiste contra ${enemigo}`)
    }   
}

ganador(opcionEnemigo, opcionJugador)

// utilizando switch

function sGanador(enemigo, jugador) {
    switch (true) {
        case (enemigo === jugador):
            console.log("Es un empate");
            break;
        case (jugador === "piedra" && enemigo === "tijera"):
            console.log(`Ganaste con ${jugador}`)
            break;
        case (jugador === "piedra" && enemigo === "tijera"):
            console.log(`Ganaste con ${jugador}`)
            break;
        case (jugador === "tijera" && enemigo === "papel"):
            console.log(`Ganaste con ${jugador}`)
            break;
        default:
            console.log(`Perdiste contra ${enemigo}`)
            break;
    }
}

sGanador(opcionEnemigo, opcionJugador)