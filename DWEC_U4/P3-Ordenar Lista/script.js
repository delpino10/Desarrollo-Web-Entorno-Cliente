// Lista de ciudades
const ciudades = [
    "Barcelona", "Tokio", "Nueva York", "Sídney",
    "Ciudad de México", "Roma", "Mumbai", "Buenos Aires",
    "Estambul", "Londres", "El Cairo", "Toronto",
    "Bangkok", "París", "Sao Paulo"
];

let listaCiudades = document.getElementById('listaCiudades');
let mensaje = document.getElementById('mensaje');

// Mostrar cuidadas por defecto en navegador
// recorremos el array "ciudades"
ciudades.forEach(ciudad =>{
    // Creamos un elemento "li"
   let li = document.createElement('li');
   // añadimos cada elemento del array al elemento "li"
   li.textContent = ciudad;
   // Añadimos el elemento "li" con el texto al nodo de la web
   listaCiudades.appendChild(li);
});

// Ordenar lista
function ordenarLista(){
    // Eliminamos la lista desordenada del navegador
    listaCiudades.innerHTML = "";
    // Creamos un nuevo array con las ciudades ordenadas
    let listaOrdenada = ciudades.sort();
    // Recorremos el nuevo array
    listaOrdenada.forEach(ciudad => {
    // Creamos un elemento "li"
    let li = document.createElement('li');
    // añadimos cada elemento del array al elemento "li"
    li.textContent = ciudad;
    // Añadimos el elemento "li" con el texto al nodo de la web
    listaCiudades.appendChild(li);
    });
    // Mostramos el mensaje
    mensaje.innerHTML = "Lista Ordenada! Buena Elección"
}

// Si no acepta ver la lista desordenada
function noOrdenarLista(){
    // Mostramos otro mensaje
    mensaje.innerHTML = "Tu te lo pierdes"
}

// La ventana para que confirme o no si quiere ver la lista ordenada
function ventanaEleccion () {
    // Le Preguntamos al usuario
    let mensaje = "¿Quieres ordenar la lista?"
    if (confirm(mensaje)){ // Si dice que sí
        // Muestra la lista ordenada
        ordenarLista()
    }else {
        // Si no, muestra el mensaje
        noOrdenarLista()
    }
}

// Esperamos 3 segundo antes de que aparezca la venta con la pregunta
setTimeout(() => {
    ventanaEleccion()
    }
    , 3000)



