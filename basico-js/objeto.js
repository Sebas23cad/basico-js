// aqui esta tu objeto

let balon = {
    tamaño: 5,
    tipo: "Futbol",
    moverse: function patear() {
        // Aqui puedes poner todo lo que este involucrado con el movimiento como la fuerza, etc.
        // El this lo usamos para referirnos al objeto, es como decir este o esto.
        console.log(`Tipo ${this.tipo}`)
        // El this podria ser, mi balon tipo me traera futbol, ya que hace referencia a el mismo
    }
};

// Otro objeto

let autoT = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.año}`);
    }
};

// La funcion constructora, esta es una funcion que nosotros la creamos pero hay otra y es el estandar que se usa que lo veras en cursos mas vanzados.
function auto(marca, modelo, año) {
    this.marca = marca,
    this.modelo = modelo,
    this.año = año
}

function balones(tamaño, tipo) {
    this.tamaño = tamaño,
    this.tipo = tipo
}

// Construir el objeto con la funcion constructora que creamos. El new crea una nueva instancia de nuestra funcion constructura, como si fuera construir todo el elemento utilizando la funcion constructora como modelo.
let autoNuevo = new auto("Tesla", "Modelo s", 2022)
let basket = new balones(6, "Basketball")
let nuevoAuto = new auto("Tesla", "Model 3", 2022)

// Para ver que hay en nuestros objetos.
console.log(autoNuevo)

// Para acceder solo con su palabra clave
autoT.año
balon.tipo
autoT.detalleDelAuto()
balon.moverse()

// Completar reto, me falto un poco de logica pero ya esta jaja, lo hice pensando en modo de diccionarios en python jaja

let marcas = ["Tesla", "Toyota", "Mercedes"]
let modelos = ["Modelo family", "Camioneta", "Benz"]

for (const marca of marcas) {
    for (const model of modelos) {
        let automovil = new auto(marca, model, 2022)
    }
    console.log(automovil);
}