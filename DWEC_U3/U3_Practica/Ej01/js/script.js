let y = document.getElementById("n");
let id = document.getElementById("id");
let h = document.getElementById("hora");

// Número aleatorio redondeado al primer decimal
let num = Math.round(Math.random() * 10) / 10;
//Creamos un nodo con el número aleatorio
let nodo = document.createTextNode(num);
// los añadimos al nodo asociado al id
y.appendChild(nodo);

// Creamos el objeto Date 
let date = new Date;
// Obtenemos la hora actual
let horas = date.getHours();
// Creamos un nodo de texto con la hora
let nodoHora = document.createTextNode(horas);
// Lo anidamos a su correspondiente nodo
h.appendChild(nodoHora);

function funcion(num){
    // Si el número random es superior o igual a 0.5
    if (num >= 0.5){
        // Creamos un elemento <a>
        let link = document.createElement("a");
        // Le aññadimos la URL
        link.href = "https://www.marca.com";
        // Le adjuntamos el texto del enlace
        link.textContent = "marca.com"
        // Lo anidamos a su correspondiente nodo
        id.appendChild(link); 
    }else{
        // Si son más de la 3 de la tarde
        if(horas >= 15){
            // Insertamos este texto
            let bt = "Buenas Tardes";
            id.innerHTML = bt;
        }else{
            // Si no, este otro texto
            let bd = "Buenos Dias"
            id.innerHTML = bd;
        }
    }
}

// Llamamos a la función
funcion(num);
       