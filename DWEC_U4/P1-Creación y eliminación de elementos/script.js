let aniadir = document.getElementById('agregar');
let eliminar = document.getElementById('eliminar');
let lista = document.getElementById('lista');

// Array donde se alojan las palabras que vamos a insertar en la lista
const numeros = [
    "Quinto",
    "Sexto",
    "Séptimo",
    "Octavo",
    "Noveno",
    "Décimo"
];

// Contador para asociar los clicks a la posición de las palabras dentro del array
let contador   = 0;

// Escucha cada vez que se pulsa el botón "Añadir"
aniadir.addEventListener("click", function (){
    // Creamos el elemento 'li' para añadirlo a lla lista 'ul'
    let li = document.createElement('li')
    // Introducimos el texto alojado el array 'numeros' según recorremos el array
    // con la posición que marca el conatdor.
    let texto = document.createTextNode(numeros[contador] + ' dato')
    // Añadimos el texto al elemento 'li'
    li.appendChild(texto);
    // Añadimos al elemento 'li' a la lista
    lista.appendChild(li);
    // sumamos 1 cada vez que hacemos click
    contador++;
    });
// Escucha cada vez que se pulsa el botón "Eliminar"
eliminar.addEventListener("click", function (){
    // Seleccionamos el último nodo de la lista
    let li = document.querySelector('li:last-child')
    // Lo borramos
    lista.removeChild(li)
    // Restamos 1 al contador
    contador--;
    });





