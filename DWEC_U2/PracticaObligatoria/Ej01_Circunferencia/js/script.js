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
    // Formular para obtener el perímetro de una circunferencia
    var x = 2 * Math.PI * radio;
    // Anidar el resultado de la fórmula al 
    perimetro.appendChild(document.createTextNode(x.toFixed(2)));
    console.log(x);
});

btnA.addEventListener('click', () => {
    var a = Math.PI * Math.pow(radio,2);
    area.appendChild(document.createTextNode(a.toFixed(2)));
    console.log(a);
});

btnR.addEventListener('click', () => {
    location.reload();
});
