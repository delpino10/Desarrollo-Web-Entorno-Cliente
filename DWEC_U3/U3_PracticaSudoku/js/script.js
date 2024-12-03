// Función para generar un Sudoku válido y completo (sin huecos)
function generarSudokuCompleto() {
    const tablero = Array.from({ length: 9 }, () => Array(9).fill(0));

    // Función recursiva para llenar el Sudoku con un algoritmo backtracking
    function resolverSudoku(tablero) {
        for (let fila = 0; fila < 9; fila++) {
            for (let col = 0; col < 9; col++) {
                if (tablero[fila][col] === 0) { // Si la celda está vacía
                    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    while (numeros.length > 0) {
                        const num = numeros.splice(Math.floor(Math.random() * numeros.length), 1)[0];
                        if (esValido(tablero, fila, col, num)) {
                            tablero[fila][col] = num;
                            if (resolverSudoku(tablero)) {
                                return true;
                            }
                            tablero[fila][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true; // Sudoku completado correctamente
    }

    // Función para comprobar si el número es válido en la posición (fila, col)
    function esValido(tablero, fila, col, num) {
        // Comprobar fila
        for (let c = 0; c < 9; c++) {
            if (tablero[fila][c] === num) return false;
        }
        // Comprobar columna
        for (let r = 0; r < 9; r++) {
            if (tablero[r][col] === num) return false;
        }
        // Comprobar subcuadrícula 3x3
        const inicioFila = Math.floor(fila / 3) * 3;
        const inicioCol = Math.floor(col / 3) * 3;
        for (let r = inicioFila; r < inicioFila + 3; r++) {
            for (let c = inicioCol; c < inicioCol + 3; c++) {
                if (tablero[r][c] === num) return false;
            }
        }
        return true;
    }

    resolverSudoku(tablero); // Llamar a la función para resolver el Sudoku
    return tablero;
}

// Función para mostrar el Sudoku en la tabla
function mostrarSudokuEnTabla(tablero) {
    let tabla = document.getElementById("tablaSudoku");

    // Limpiar tabla antes de mostrar el nuevo Sudoku
    tabla.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < 9; j++) {
            let celda = document.createElement("td");
            celda.textContent = tablero[i][j]; // Mostrar número en la celda
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }
}

// Función para generar un Sudoku a partir de uno existente (modificando el original)
function generarNuevoSudokuDesdeExistente(tableroOriginal) {
    let tableroNuevo = tableroOriginal.map(fila => [...fila]); // Copiar el tablero original

    // Realizar una variación simple: intercambiar filas dentro de una misma subcuadrícula 3x3
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let fila1 = Math.floor(Math.random() * 3) + (i * 3);
            let fila2 = Math.floor(Math.random() * 3) + (i * 3);
            while (fila2 === fila1) fila2 = Math.floor(Math.random() * 3) + (i * 3);

            // Intercambiar las filas
            [tableroNuevo[fila1], tableroNuevo[fila2]] = [tableroNuevo[fila2], tableroNuevo[fila1]];
        }
    }

    return tableroNuevo;
}

// Inicializar el Sudoku
let sudokuActual = generarSudokuCompleto();  // Sudoku generado completo

document.addEventListener("DOMContentLoaded", function() {
    mostrarSudokuEnTabla(sudokuActual);  // Mostrar el Sudoku al cargar la página

    // Evento para generar un nuevo Sudoku al hacer clic en el primer botón
    document.getElementById("generarSudoku").addEventListener("click", function() {
        sudokuActual = generarSudokuCompleto();  // Generar un nuevo Sudoku completo
        mostrarSudokuEnTabla(sudokuActual);  // Mostrar el nuevo Sudoku
    });

    // Evento para generar un nuevo Sudoku a partir del anterior al hacer clic en el segundo botón
    document.getElementById("generarNuevoSudoku").addEventListener("click", function() {
        sudokuActual = generarNuevoSudokuDesdeExistente(sudokuActual);  // Generar nuevo Sudoku a partir del anterior
        mostrarSudokuEnTabla(sudokuActual);  // Mostrar el nuevo Sudoku
    });
});
