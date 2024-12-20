// Ejercicio 1
function cambiaParrafo(){
    let num = document.getElementById('numParrafo').value;
    let id = document.getElementById("p" + num);
    let btn = document.getElementById('btn')

    btn.addEventListener('click', function () {
        id.style.fontWeight = 'bold'
        id.style.fontSize='20px';
        id.style.border='2px solid rgb(0, 183, 235)';
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
}


btn_submit.addEventListener('click', function (){

    let nombre = document.getElementById('nombre').value;
    const nombreValido = validarCampo(nombre);
    let input1 = document.getElementById('nombre')
    const errorNombre = document.getElementById('errorNombre');
        if("Nombre válido" !== nombreValido){
            errorNombre.textContent = validarCampo(nombre);
            errorNombre.style.color = 'red';
            input1.style.border = '1px solid red'
        }else {
            errorNombre.textContent = "";
            input1.style.border = '1px solid black'
        }

    let apellido = document.getElementById('apellido').value;
    const apellidoValido = validarCampo(apellido);
    let input2 = document.getElementById('apellido')
    const errorApellido = document.getElementById('errorApellido');
        if ("Nombre válido" !== apellidoValido){
            errorApellido.textContent = validarCampo(apellido);
            errorApellido.style.color = 'red';
            input2.style.border = '1px solid red'
        }else {
            errorApellido.textContent="";
            input2.style.border = '1px solid black'
    }
});



