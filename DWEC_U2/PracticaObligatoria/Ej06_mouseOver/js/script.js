// Accedemos al nodo
var foto = document.getElementById('foto');
// Accedemos al nodo del input del formulario
const nombre = document.getElementById('nombre');
var n = nombre.value;
// Si el usuario pasa el ratón encima de la imagen
foto.addEventListener('mouseover', () =>{
    foto.src='./img/2.jpg';
})
// Si el usuario saca el ratón fuera de la imagen
foto.addEventListener('mouseout', () =>{
    foto.src='./img/1.jpg';
})
// Cuando el usuario no ha ingresado ningún dato, 
// salta una alerta
function b(){
    
        alert('No ha ingresa ningún dato');
    
}

