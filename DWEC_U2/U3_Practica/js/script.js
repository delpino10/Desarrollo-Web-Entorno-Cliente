let y = document.getElementById("n");
let id = document.getElementById("id");

// Número aleatorio redondeado al primer decimal
let num = Math.round(Math.random() * 10) / 10;
//Creamos un nodo con el número aleatorio
let nodo = document.createTextNode(num);
// los añadimos al nodo asociado al id
y.appendChild(nodo);

function funcion(num){
    if (num >= 0.5){
        let link = document.createElement("a");
        link.href = "https://www.marca.com";
        link.textContent = "marca.com"
        id.appendChild(link); 
    }else{
        let date = new Date;
        let horas = date.getHours;

        if(horas >= 15){
            let bt = "Buenas Tardes";
            id.innerHTML = bt;
        }else{
            let bd = "Buenos Dias"
            id.innerHTML = bd;
        }
    }
}
       