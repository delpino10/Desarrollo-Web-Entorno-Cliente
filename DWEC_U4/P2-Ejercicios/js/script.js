// Ejercicio 1
// Selecciona un párrafo y le cambia el estilo para hacerlo más grande
// Se ejecuta desde HTML
function cambiaParrafo(){
    // Accedemos al valor del input text donde nos dice que párrafo selecciona
    let num = document.getElementById('numParrafo').value;
    // Le decimos que párrafo es el particular
    let id = document.getElementById("p" + num);
    // El botón para ejecutar la elección
    let btn = document.getElementById('btn')
    // Evento 'click' para cambiar los estilos
    btn.addEventListener('click', function () {
        id.style.fontWeight = 'bold'
        id.style.fontSize='20px';
        id.style.border='2px solid rgb(0, 183, 235)';
        id.style.backdropFilter='blur(40px)'
    })
}

// Ejercicio 2
// Validaciones
// Botón para enviar el formulario
let btn_submit = document.getElementById('btn-submit');
// Validaciones de un campo de texto
function validarCampo(campo){
    // Expresión regular
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
    // El campo no puede tener cero caracteres
    if (campo.length === 0){
        return "El campo nombre no puede estar vacío"
    // El campo no puede incluir caracteres especificados
    // fuera de la expresión regular
    }else if (!regex.test(campo)){
        return "Caracteres no admitidos"
    }else{
    // Cumple todo los anterior
        return "Nombre válido"
    }

// Valida un número de teléfono
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

// Envía los datos al servidor tras hacer 'click'
btn_submit.addEventListener('click', function (event){
    // Previene de enviar los datos al servidor sin validar
    event.preventDefault();
    // Accedemos al valor del campo nombre
    let nombre = document.getElementById('nombre').value;
    // Validamos ese valor
    const nombreValido = validarCampo(nombre);
    let input1 = document.getElementById('nombre')
    // Accedemos al nodo donde se muestra el error
    const errorNombre = document.getElementById('errorNombre');
        // si el nombre no está validado se muestra el error
        if("Nombre válido" !== nombreValido){
            // No se envía al servidor
            event.preventDefault()
            // Se muestra el tipo de error
            errorNombre.textContent = validarCampo(nombre);
            // Se decora el error
            errorNombre.style.color = 'red';
            input1.style.border = '2px solid red'
        }else {
            // si no hay error, se deja vacío.
            errorNombre.textContent = "";
            // El borde vuelve al color por defecto
            input1.style.border = '2px solid rgba(255, 165, 0,.3)'
        }
// Se hace lo mismo con el campo apellido
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
    // se hace lo mismo con el campo teléfono
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
// Utilizamos las validaciones incluidas en el navegador
// Accedemos al formulario completo
const formulario = document.querySelector('form');
// Cuando vayamos a enviar el formulario al servidor
formulario.addEventListener('submit', function (event){
    let email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    // Comprobamos que el email tiene un formato correcto
    if(!email.checkValidity()){
        event.preventDefault();
        // Mostramos el error si el email no es válido
        errorEmail.textContent = email.validationMessage;
    }else{
        // si es válido no mostramos nada
        errorEmail.textContent = "";
    }
});



// Ejercicio 8

// Accedemos al nodo del párrafo
let parrafo = document.getElementById('p')

// Asociamos el evento al párrafo
parrafo.addEventListener('mouseover', () => {
    // Introducimos en la web el texto del párrafo, pero transformado en mayúsculas
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
    // Redimensinar las páginas
    ventana.resizeTo(ancho, alto)
    // Mostramos las nuevas medidas de la página
    ventana.document.write(`Altura: ${ventana.outerHeight}px | Ancho: ${ventana.outerWidth}px`);

})
// Evento para desplazar la ventana según los valores insertados por el usuario
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




// Ejercicio 10
//Accedemos al botón para recargar la página
let reload_btn = document.getElementById('reset-button');
// Accedemos al botón para activar el evento
let btn_ej10 = document.getElementById('btn-ej10');
// Accedemos al botón para borrar el evento
let btn_remove = document.getElementById('btn-ej10-remove')

// El evento para cuando se hace click
const eventoClick = () => {
    alert('Has hecho click!!')
}
// Evento para cuando se pasa ratón por encima del botón
const eventoMouseOver = () => {
    btn_ej10.textContent = "Has pasado sobre mi"
}
// Evento para cuando el ratón sale del botón
const eventoMouseOut = () => {
    btn_ej10.textContent = "Has salido de mi"
}

// Recargamos la página tras pulsar el botón
reload_btn.addEventListener('click', () => {
    location.reload()
})

// Definimos los eventos al mismo botóm
btn_ej10.addEventListener('click', eventoClick)
btn_ej10.addEventListener('mouseover', eventoMouseOver)
btn_ej10.addEventListener('mouseout', eventoMouseOut)

// Creamos un array con los nombres de los eventos que queremos eliminar
let eventosEliminar = ['click', 'mouseover', 'mouseout']

// Cada vez que pulsemos el botón  eliminaremos un evento
btn_remove.addEventListener('click', () => {
    // Mientras el array tenga algun valor dentro
    if(eventosEliminar.length > 0 ){
        // Guardamos la primera posición del array en una const
        const evento = eventosEliminar.shift()
            // Recorremos el array y vamos eliminando los eventos
            if(evento === 'click'){
                // Evento para hacer click. (Debe estar escrito tal cual se creó)
                btn_ej10.removeEventListener('click', eventoClick)
            }else if(evento === 'mouseover'){
                // Evento para hacer para pasar el ratón por encima. (Debe estar escrito tal cual se creó)
                btn_ej10.removeEventListener('mouseover', eventoMouseOver)
            }else if (evento === 'mouseout'){
                // Evento para cuando el ratón sale del botón. (Debe estar escrito tal cual se creó)
                btn_ej10.removeEventListener('mouseout', eventoMouseOut)
            }
            // Ventana pop-up que muestra que evento se ha eliminado
            alert(`El evento ${evento} ha sido eliminado`)


    }else {
        // Ventana que meustra que cuando todos los eventos han sido eliminados
        alert("Todos los eventos han sido eliminados")
    }
})









