# Curso de JavaScript basico

![Logo del curso](https://static.platzi.com/cdn-cgi/image/width=768,quality=50,format=auto/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png)

## Introduccion a JavaScript

### Que es JavaScript?

**Por qué nace?**: Este nace por la falta de dinamismo en las paginas web, antes solo teniamos paginas estaticas y aqui entra javaScript que nace para desarrollar dinamismo en la web.

*JavaScript* es un lenguaje interpretado, orientado a objetos, debilmente tipa y dinámico.

Nos referimos orientado a objeto ya que tratamos todo lo que hacemos en el lenguaje como un objeto en la vida real (Esto es otra cosa, asi que quedate con esto de momento.) es llevar objetos a un lenguaje. Debilmente tipa es que nos permite tener muchos "errores" o que sea muy pero muy flexible. Dinamico nos referimos que para probar lo que estas asiendo hay un paso en el medio que simplemente traduce tu lenguaje para que la maquina entienda.

```JavaScript
4 + "7"; // 47
4 * "7" // 28
2 + true // 3
false - 3 // -3
```

### Por qué JavaScript?

Es un lenguaje el cual debido a su comunidad tiene una enrome cantidad de librerias que se adaptan a todo lo que te puedas imaginar como el backend con nodeJs o hasta machine learning con TensorflowJs, tambien es uno de los lenguajes mas demandados actualmente.

### Elementos de un lenguaje de programacion

Algunos de los elementos mas utilizados son:

- Variables: Aqui puedes almacenar todo lo que quieras desde un string hasta listas.
- Funciones: tareas o algoritmos los cuales programamos para solucionar un problema o alguna cosa en especifica.
- Sintaxis: Esta depende de cada lenguaje, en javaScript es muy permisivo pero vamos a utilizar buenas practicas para entender nuestro propio codigo.
- Buenas practicas: Son estandares que tiene cada lenguaje para que el codigo sea mas legible y facil de leer.

**Parra correr javascript siempre tenemos que usarlo en un archivo de html, ya que este ultimo es su interprete.**

[Valores de ejemplo](valores.js) en codigo.

### Variables en javaScript

Las variables son espacios en memoria que guardan valores, es decir, miralo como cajas que puedes almacenar cosas en ellas, hasta otra caja.

Son ejemplos de variables en [codigo](variables.js)
tenemos dos estados al momento de usar variables el primero es al momento de declarar solo la creamos y no tiene un valor y el segundo es cuando la inicializamos es cuando le damos un valor.

### Funciones en javascript

Es una operacion que hace con valores que le pasamos, los conocemos como parametros y nos devuelve un nuevo resultado tras realizar la operacion designada en medio. [codigo de funciones](funciones.js), algo que me encanta de python que tambien hay en javascript es crear un tamplate string y es para poder llamar variables dentro de una cadena de texto lo hacemos con `` le añades texto y para añadir la variable lo hacemos con ${variable}. Me gusta llamarlo concatenar texto con variables.

---

## Bases de JavaScript

### Scope

Es el alcance que tienen las variables y nos referimos a dependiendo de donde y como las declares vamos a poder usarlas o no.

>Miralo como un estadio de futbol, hay diferentes sectores para los aficionados, a esto piensalo que si mas afuera los ponemos mas alcance de vista tienen. Ahora funciona igual con las variables si la ponemos en el scoop global cualquier funcion puede utilizar esas variables, pero si la creamos en una funcion solo esa funcion la va a poder usar a menos que lo retornes. Le llamamos scoop local el entorno donde trabaja la funcion.

Si lo quieres ver de otra manera puede ser como una cebolla va por capas como la pelicula de shrek. Estas se usan en el lugar que se declaro y en un entorno local dentro del entorno principal. Un ejemplo en [codigo](scoop.js)

### Hoisting

Es cuando tu creas o declaras las variables y funciones antes de que se procese el codigo.

>Esta bien aclarar que esto solo sucede con versiones inferiores a ecmascript 6, es decri desde la 5 hacia abajo. Por eso pienso que puede estar bien entenderlo pero no es determinante. Tambien solo pasaban con las variables y funciones que utilizan var pero con la llegada de las nuevas variables esto se elimino.

By the way, aqui esta el [enlace](hoisting.js) a ejemplos en codigo.

### Coerción

Es la forma en que el navegador cambia el tipo de dato a otro en corde a lo que este crea mejor o como esta hecho. Osea cambia un tipo de valor a otro en dependencia de lo que hagas como al principio vimos que en la una se hacia un string y en el otro se hacia la operacion de multiplicacion.

### Valores: Truthy and falsy

Los valores falsos son vacios, 0, null, NaN, undefined, false y string vacios.
Los valores verdaderos por default son el resto de esto son verdaderos hasta strings con solo un espacio, un array vacio, objeto vacio y una funcion.

### Operadores: Asignacion, comparacion y aritmeticos

Ya usamos operadores como los signos de la suma o resta los cuales son llamados operadores de operacion. Tambien tenemos operador de asignacion que es el igual solo o la suma con strings que hace una concatenacion entre ellos.. Ahora los de comparacion son dos iguales (compara si el valor es igual) y tres iguales (debe ser en todos los sentidos igual) o los mayor y menor que.
Algo que es importante que aprendan es los operadores logicos, los cuales dependiendo el lenguaje su sintaxis es diferente pero hacen lo mismo como y en python es and y para javascript es &&, o en python es or y en javascript es ||.

---

## Condicionales

### If, else, else if y switch

<!-- clase numero 12 condicionales if, etc. Terminar el reto de piedra papel y tijera -->

Las condicionales son las reglas que le damos a nuestro programa para que haga algo o se vaya por un camino diferente, en javascript tenemos dos el if y el switch aqui les dejo el ejemplo en [codigo](condicionales.js)

La principal diferencia entre estas condicionales es que en el switch lo que hacemos es usar la condicional por casos. Para el if lo usamos como caminos los cuales son infinitos y los casos son casos que si pasan hagan algo. Mira para que entiendan los casos velos como cuando te tomaban lista en el colegio el caso es cuando digan tu nombre tu respondes presente y asi va de caso en caso hasta que llega al tuyo.

[reto piedra, papel y tijera](condicionales.js) Completado hecho por mi.

---

## Arrays y loops

###

>

---

## Objects y metodos de arrays

###

>