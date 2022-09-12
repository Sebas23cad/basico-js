// Declarativas

function miFuncion() {
    return (2 + 3)    
}

miFuncion()

// expresivas o anonimas

let miFuncion = function(a, b) {
    console.log(`Aqui esta un tamplete ${a}, y aqui tambien lo enlaso con la otra variable ${b}`)
    return a + b
}

miFuncion(2, 4)