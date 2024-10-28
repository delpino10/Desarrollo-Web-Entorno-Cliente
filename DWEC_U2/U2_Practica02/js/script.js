function dibujarRombo(n) {
  let resultado = '';

  // Parte superior del rombo
  for (let i = 0; i < n; i++) {
      let linea = '';
  
      // Añadir espacios usando &nbsp;
      for (let j = 0; j < n - i - 1; j++) {
          linea += '&nbsp;';
      }
  
      // Añadir asteriscos
      for (let k = 0; k < 2 * i + 1; k++) {
          linea += '*';
      }
  
      resultado += linea + '<br>';
  }

  // Parte inferior del rombo
  for (let i = n - 2; i >= 0; i--) {
      let linea = '';
  
      // Añadir espacios usando &nbsp;
      for (let j = 0; j < n - i - 1; j++) {
          linea += '&nbsp;';
      }
  
      // Añadir asteriscos
      for (let k = 0; k < 2 * i + 1; k++) {
          linea += '*';
      }
  
      resultado += linea + '<br>';
  }

  document.body.innerHTML = resultado; // Mostrar el rombo en la página
}

// Llamada a la función para crear un rombo de tamaño 4
dibujarRombo(4);
