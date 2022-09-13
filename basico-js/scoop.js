// Scoop global

let n = 3

// Scoop local

function suma(a) {
    let b = 4
    return a * b
}

suma(3) // 12

// si tu intentas en tu navegador hacer esta operacion y luego ves que hay en la variable b, no te va a dar ningun resultado ya que solo esta creada en un scoop local o entorno dentro del global. Esto se puede poner tan complejo como sea lo que quieres solucionar.