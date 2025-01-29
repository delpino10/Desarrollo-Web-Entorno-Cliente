// Función que se llama cada vez que el usuario escribe algo en el campo de texto
function buscarSugerencias() {
    const input = document.getElementById('ciudad').value;
    if (input.length < 1) { // Evitamos peticiones si no hay al menos 3 caracteres
        document.getElementById('sugerencias').innerHTML = '';
        return;
    }

    // Realizamos la solicitud AJAX usando Fetch
    fetch('ciudades.json')
        .then(response => response.json())  // Convertimos la respuesta en JSON
        .then(datos => {
            const ciudades = datos.ciudades;
            const sugerencias = ciudades.filter(ciudad =>
                ciudad.nombre.toLowerCase()
                .startsWith(input.toLowerCase()));
            mostrarSugerencias(sugerencias);
        })
        .catch(error => console.error('Error al cargar las ciudades:', error));
}

// Función para mostrar las sugerencias en el DOM
function mostrarSugerencias(sugerencias) {
    const contenedorSugerencias = document.getElementById('sugerencias');
    contenedorSugerencias.innerHTML = '';  // Limpiamos el contenedor antes de agregar nuevas sugerencias
    // Si no hay coincidencias
    if (sugerencias.length === 0) {
        contenedorSugerencias.innerHTML = '<div>No se encontraron coincidencias</div>';
        return;
    }
    sugerencias.forEach(ciudad => {
        const div = document.createElement('div');
        div.textContent = ciudad.nombre;
        div.onclick = () => seleccionarCiudad(ciudad); // Cuando se selecciona una ciudad
        contenedorSugerencias.appendChild(div);
    });
}

// Función para manejar cuando se selecciona una ciudad
function seleccionarCiudad(ciudad) {
    document.getElementById('ciudad').value = ciudad;
    document.getElementById('sugerencias').innerHTML = ''; // Ocultamos las sugerencias
}

function mostrarMonumentos(sugerencia){

}
