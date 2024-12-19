// Ejercicio 1
function cambiaParrafo(){
    let num = document.getElementById('numParrafo').value;
    let id = document.getElementById("p" + num);
    let btn = document.getElementById('btn')

    btn.addEventListener('click', function () {
        id.style.fontWeight = 'bold'
        id.style.fontSize='30px';
    })
}

// Ejercicio 2
// Validaciones
let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')


