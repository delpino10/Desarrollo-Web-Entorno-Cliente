// Guardamos el nodo donde se van insertar el número de visitas
let impSesion = document.getElementById('contenedor-cookie');

// Crear variable y asignar valor desde cookie
let visitas = document.cookie.replace(/(?:(?:^|.*;\s*)visitas\s*\=\s*([^;]*).*$)|^.*$/, "$1");
// Asegurar que tiene un valor entero o asignar cero si algo falla
visitas = parseInt(visitas) || 0;

// si el usuario acepta las cookies
function aceptaCookies(){
// Incrementar
visitas ++;
// Guardar cookie que expire en 365 días
document.cookie = 'visitas=' + visitas + ';';
// Nombre de Usuario
document.cookie = 'Usuario=JoseAntonio'
// Expira en un 1 año = 31104000 segundos
document.cookie = 'max-age = 31104000'
// Imprimimos el número de visitas en la web
impSesion.innerHTML = 'Total visitas=' + visitas + ';'
}
// Si no acepta las cookies, las borramos
function borrarCookies(){
    // dejamos vacio el valor de usuario
    document.cookie = 'Usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // Dejamos el contador de visitas a 0
    visitas = 0;
    // Actulizamos la cookie con el nuevo valor de 'visitas'
    document.cookie = 'visitas=' + visitas + ';';
    // Imprimimos el número de visitas
    impSesion.innerHTML = 'Total visitas=' + visitas
    // Lanzamos un alert box para confirmar que las cookies han sido borradas
    alert('Cookies Borradas')
}

// Preguntamos al usuario si quiere guardar las cookies
function ventanaMensaje(){
let mensaje = "Quiere guardar las cookies de su sesión";
    // Si acepta, guardamos las cookies
    if(confirm(mensaje)){
        aceptaCookies()
    }else{
        // Si no acepta, las borramos
        borrarCookies()
    }
}
// Aparece una ventana para preguntar al usuario si quiere guardar las cookies
ventanaMensaje();
