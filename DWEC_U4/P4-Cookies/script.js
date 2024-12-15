let imprSesion = document.getElementById('contenedor-cookie');

// Crear Cookie
document.cookie= "usuario = Jose Antonio; expires=15 dec 2025 00:00:00 UTC; path=/"
/*

// Contar sesiones
function contarSesiones(){
    if (!localStorage.getItem('sesiones')) {
        localStorage.setItem('sesiones', 1);
    } else {
        let sesiones = parseInt(localStorage.getItem('sesiones'))
        sesiones++;
        localStorage.setItem('sesiones', sesiones)
    }

    return parseInt(localStorage.getItem('sesiones'))
}


*/

let sumaSesiones = 0;
// Función para sumar el número de sesiones almacenadas en cookies
function sumarSesionesDesdeCookies() {
    let cookies = document.cookie.split('; ');  // Separar las cookies por punto y coma

    cookies.forEach(cookie => {
        let par = cookie.split('=');
        let nombre = par[0];
        let valor = parseInt(par[1]);

        // Verificar si la cookie contiene "sesiones"
        if (nombre === 'sesiones') {
            sumaSesiones += valor;
        }
    });

    return sumaSesiones;
}

// Llamar la función para sumar sesiones
let totalSesiones = sumarSesionesDesdeCookies();
console.log("Total de sesiones:", totalSesiones);

function pedirPermiso(){
    let mensaje = "Este sitio web almacena cookie para mejorar la experiencia de usuario\n" +
        "¿Desea continuar?"
    if (confirm(mensaje)){
        sumarSesionesDesdeCookies();
    }else{

    }
}

pedirPermiso()

