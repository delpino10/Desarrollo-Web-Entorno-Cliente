
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

    contenedor.style.backgroundColor = 'burlywood'
    contenedor.style.width = '500px'
    contenedor.style.heigth = '500px'


    for (let i = 0; i < 9; i++) {
        const fila = document.createElement('tr')
        //fila.textContent = i;
        for (let j = 0; j < 9; j++) {
            let r = Math.round((Math.random() * 8) + 1)
            const celda = document.createElement('td')
            celda.textContent = r;
            fila.appendChild(celda);
        }
        tabla.appendChild(fila)
    }
    contenedor.appendChild(tabla);
}




