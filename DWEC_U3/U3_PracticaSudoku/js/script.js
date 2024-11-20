
// function crearTablero(){
//     const tablero = [];
//     for (let i = 0; i < 9; i++) {
//         tablero[i] = []
//         for (let j = 0; j < 9; j++) {
//             tablero[i][j] = 0
//         }
//     }
//     return tablero;
// }

function mostrarTablero(){
const contenedor = document.getElementById('contenedor');
const tabla = document.createElement('table');
    for (let i = 0; i < 9; i++) {
        const fila = document.createElement('tr')
        for (let j = 0; j < 9; j++) {
            const celda = document.createElement('td')
            fila.appendChild(celda);
        }
        tabla.appendChild(fila)
    }
    contenedor.appendChild(tabla);
}




