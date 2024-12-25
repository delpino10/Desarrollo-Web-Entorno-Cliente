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

    event.preventDefault();
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



// Ejercicio 8

let parrafo = document.getElementById('p')

parrafo.addEventListener('mouseover', () => {
    parrafo.innerHTML = parrafo.textContent.toUpperCase();
});




// Ejercicio 9

// Boton para abrir una ventana nueva
let btn_open = document.getElementById('btn-abrir')
// Botón para redimensionar la ventana abierta
let btn_resizeTo = document.getElementById('btn-resizeTo')
// Botón para desplazar la ventana abierta
let btn_resizeBy = document.getElementById('btn-resizeBy')
// Botón para cerrar la ventana abierta
let btn_cerrar = document.getElementById('btn-cerrar')
// Iniciamos la ventana que vamos a abrir
let ventana;

// Evento que tras pulsar un botón para abrir una ventana según los valores introducidos por el usuario
btn_open.addEventListener('click', () => {
    // Valor Y
    let alto = parseInt(document.getElementById('alto').value)
    // Valor X
    let ancho = parseInt(document.getElementById('ancho').value)
    // Ejecutamos para abrir una ventana nueva según los valores recopilados
    ventana = window.open('','',"width="+ancho+"px, height="+alto+"px");
    // Mostramos esos valores en el Html de la ventana
    ventana.document.write(`Altura: ${ventana.outerHeight}px | Ancho: ${ventana.outerWidth}px`);
})
// Evento que tras pulsar un botón para redimensionar la ventana
// recién abierta según los valores introducidos por el usuario
btn_resizeTo.addEventListener('click',  () => {
    let alto = document.getElementById('alto').value
    let ancho = document.getElementById('ancho').value
    // Redimensinar las página
    ventana.resizeTo(ancho, alto)
    // Mostramos la nuevas medidas de la página
    ventana.document.write(`Altura: ${ventana.outerHeight}px | Ancho: ${ventana.outerWidth}px`);

})
// Evento para desplazar la ventanha según los valores insertados por el usuario
btn_resizeBy.addEventListener('click',  () => {
    let alto = document.getElementById('alto').value
    let ancho = document.getElementById('ancho').value
    // Ejecutamos el desplazamiento
    ventana.resizeBy(ancho, alto)
});

// Evento para cerrar la venta tras pulsar este botón
btn_cerrar.addEventListener('click', () =>{
    ventana.close();
})







