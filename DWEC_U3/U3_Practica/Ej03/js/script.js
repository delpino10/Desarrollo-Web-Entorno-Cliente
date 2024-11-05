
function encontrarPalabra(){
    // Obtenemos la frase
    let frase = document.getElementById('frase').value;
    // Obtenemos la palabra
    let palabra = document.getElementById('palabra').value;
    // El nodo para mostrar el resultado
    let resultado = document.getElementById('resultado');

    // Busca la posición de la palabra. 
    // El número que se obtiene es la posición de la primera letra
    let posicion = frase.lastIndexOf(palabra);

    // Si encuentra la palabra devuelve >=0
    if(posicion !== -1){
        resultado.innerHTML = "La Palabra <b>" + palabra + "</b> está en la posición :" + posicion;
    // Si no encuentra la palabra devuelve -1    
    }else{
        resultado.innerHTML = "La Palabra <b>" + palabra + "</b> no está en la frase" 
    }
}