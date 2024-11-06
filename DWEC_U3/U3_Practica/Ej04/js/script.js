var list = document.querySelector('ul');
list.innerHTML="";
var saludos = ['¡Feliz cumpleaños!', 'Feliz navidades a todos', 
    'Te deseo una feliz navidad', 'En Navidades nos vamos de fiesta',
    'Pasa un buen fin de semana'];

    for(var i = 0; saludos.length; i++){
        var input = saludos[i];
        if(saludos[i].indexOf('nav') !== -1 
            || saludos[i].indexOf('Nav') !== -1  ){
            var result = input;
            var listItem = document.createElement('li');
            listItem.textContent = result;
            list.appendChild(listItem);
        }
    }