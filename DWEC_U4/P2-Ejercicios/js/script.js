// Ejercicio 1
function cambiaParrafo(){
    let num = document.getElementById('numParrafo').value;
    let id = document.getElementById("p" + num);
    let btn = document.getElementById('btn')

    btn.addEventListener('click', function () {
        id.style.fontWeight = 'bold'
        id.style.fontSize='20px';
        id.style.border='2px solid rgb(0, 183, 235)';
        id.style.backdropFilter='blur(40px)'
    })
}

// Ejercicio 2
// Validaciones
let btn_submit = document.getElementById('btn-submit');

function validarCampo(campo){
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
    if (campo.length === 0){
        return "El campo nombre no puede estar vacío"
    }else if (!regex.test(campo)){
        return "Caracteres no admitidos"
    }else{
        return "Nombre válido"
    }


}function validarTelefono(campo){
    const regex = /^[67]\d{8}$/
    if (campo.length === 0){
        return "El campo teléfono no puede estar vacío"
    }else if (!regex.test(campo)){
        return "Caracteres no admitidos o número inferior a 9 dígitos "
    }else {
        return "Telefono válido"
    }
}


btn_submit.addEventListener('click', function (event){

    let nombre = document.getElementById('nombre').value;
    const nombreValido = validarCampo(nombre);
    let input1 = document.getElementById('nombre')
    const errorNombre = document.getElementById('errorNombre');
        if("Nombre válido" !== nombreValido){
            event.preventDefault()
            errorNombre.textContent = validarCampo(nombre);
            errorNombre.style.color = 'red';
            input1.style.border = '2px solid red'
        }else {
            errorNombre.textContent = "";
            input1.style.border = '2px solid rgba(255, 165, 0,.3)'
        }

    let apellido = document.getElementById('apellido').value;
    const apellidoValido = validarCampo(apellido);
    let input2 = document.getElementById('apellido')
    const errorApellido = document.getElementById('errorApellido');
        if ("Nombre válido" !== apellidoValido){
            event.preventDefault()
            errorApellido.textContent = validarCampo(apellido);
            errorApellido.style.color = 'red';
            input2.style.border = '2px solid red'
        }else {
            errorApellido.textContent="";
            input2.style.border = '2px solid rgba(255, 165, 0,.3)'
    }
    let telefonoValue = document.getElementById('telefono').value;
    const telefValido = validarTelefono(telefonoValue);
    let telef = document.getElementById('telefono')
    const errorTelefono = document.getElementById('errorTelefono');
        if ("Telefono válido" !== telefValido){
            event.preventDefault()
            errorTelefono.textContent = validarTelefono(telefonoValue);
            errorTelefono.style.color = 'red';
            telef.style.border = '2px solid red'
        }else {
            errorTelefono.textContent="";
            telef.style.border = '2px solid rgba(255, 165, 0,.3)'
    }

});

// Ejercicio 3 (Email) y 4 (Teléfono)
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event){
    let email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if(!email.checkValidity()){
        event.preventDefault();
        errorEmail.textContent = email.validationMessage;
    }else{
        errorEmail.textContent = "";
    }
});

var str = "Aprende javaScript de 10 en Síntesis";

// Busca la posición de la primera aparición de 'S' o 't' (sin importar mayúsculas o minúsculas)
var m = str.search(/[S|t]/i);
console.log(m); // Esperaría que el resultado sea 14, porque 'S' de "Síntesis" es la primera coincidencia.

// Busca la posición de la primera aparición de cualquier dígito del 0 al 9
var n = str.search(/[0-9]/i);
console.log(n); // Esperaría que el resultado sea 19, ya que '1' es el primer número en la cadena.

// Busca la posición de una secuencia de uno o más ceros consecutivos
var a = str.search(/0+/i);
console.log(a); // Esperaría que el resultado sea -1, porque no hay ninguna secuencia de ceros en la cadena.


