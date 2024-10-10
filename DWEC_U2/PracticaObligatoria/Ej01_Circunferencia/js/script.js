// Accedemos al valor introducido por el usuario
var radio = document.getElementById('radio').value; 
// Accedemos a los párrafos en el DOM mediante su correspondiente Id
// para luego mostrar el resultado.
var perimetro = document.getElementById('perimetro');
var area = document.getElementById('area');
// Accedemos a los botones mediante su correspondiente id
const btnP = document.getElementById('btn-perimetro');
const btnA = document.getElementById('btn-area');
const btnR = document.getElementById('btn-reseteo');
 
// Escuchamos mediante un Listener cuando el usuario pulse calcular el perímetro
btnP.addEventListener('click', () => {
    // Formular para obtener el perímetro de una circunferencia -> 2*PI*R
    var x = 2 * Math.PI * radio;
    // Anidar el resultado a la etiqueta con Id perimetro con dos decimales
    perimetro.appendChild(document.createTextNode(x.toFixed(2)));
    // Visualizamos el resultado por consola
    console.log(x);
});

// Escuchamos mediante un Listener cuando el usuario pulse calcular el área
btnA.addEventListener('click', () => {
    // Formular para obtener el área de una circunferencia -> PI*R*R
    var a = Math.PI * Math.pow(radio,2);
    // Anidar el resultado a la etiqueta con Id área con dos decimales
    area.appendChild(document.createTextNode(a.toFixed(2)));
    // Visualizamos el resultado por consola
    console.log(a);
});

// Cuando el usuario pulsa el botón borrar, la página se recarga
btnR.addEventListener('click', () => {
    location.reload();
});







