let formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function (event) {
let contadorLeve = 0;
let contadorGrave = 0;
let contadorMedio = 0;
let resultado = document.getElementById('resultado');
let emoji = document.querySelector('.grave')

    event.preventDefault();
    let p1Seleccionada = document.querySelector('input[name = "pregunta1"]:checked');
    let p1 = p1Seleccionada ? p1Seleccionada.value : null;
    let p5Seleccionada = document.querySelector('input[name = "pregunta5"]:checked');
    let p5 = p5Seleccionada ? p5Seleccionada.value : null;
    let p6Seleccionada = document.querySelector('input[name = "pregunta6"]:checked');
    let p6 = p6Seleccionada ? p6Seleccionada.value : null;
    let p7Seleccionada = document.querySelector('input[name = "pregunta7"]:checked');
    let p7 = p7Seleccionada ? p7Seleccionada.value : null;

    const p2 = Array.from(document.querySelectorAll('input[name="pregunta2"]:checked'))
        .map(checkbox => checkbox.value);
    const p3 = Array.from(document.querySelectorAll('input[name="pregunta3"]:checked'))
        .map(checkbox => checkbox.value);
    const p4 = Array.from(document.querySelectorAll('input[name="pregunta4"]:checked'))
        .map(checkbox => checkbox.value);


    const valoresRadio = [p1, p5, p6, p7];

    valoresRadio.forEach(valor=>{
        if(valor <= 1 && valor !== null){
            contadorLeve++;
        }else if(valor > 1 && valor < 3 && valor !== null){
            contadorMedio++;
        }else if(valor >= 3 && valor !== null){
            contadorGrave++;
        }
    });

    const valoresCheckBox = [p2, p3, p4];

    valoresCheckBox.forEach(valor =>{
        if(valor.length === 1){
            contadorLeve++;
        }else if(valor.length === 2){
            contadorMedio++;
        }else if(valor.length > 2){
            contadorGrave++;
        }
    })

    if((contadorGrave > contadorMedio) && (contadorGrave > contadorLeve)){
        resultado.innerHTML = "Riesgo Grave: Estás siendo víctima de acoso. Por favor, comunícaselo a tus profesores"
        resultado.style.fontWeight='700'
    }else if ((contadorMedio > contadorGrave) && (contadorMedio > contadorLeve)){
        resultado.innerHTML = "Riesgo medio: Ten cuidado, puede ir a más "
        resultado.style.fontWeight='700'
    }else if((contadorLeve > contadorGrave) && (contadorLeve > contadorMedio)){
        resultado.innerHTML = "Riesgo Leve: No tienes ningún indicio de ser víctima de acoso"
        resultado.style.fontWeight='700'
    }


    console.log('pregunta 1:', p1)
    console.log('pregunta 2:', p2)
    console.log('pregunta 3:', p3)
    console.log('pregunta 4:', p4)
    console.log('pregunta 5:', p5)
    console.log('pregunta 6:', p6)
    console.log('pregunta 7:', p7)
    console.log('cont Leve:', contadorLeve)
    console.log('cont Medio:', contadorMedio)
    console.log('cont Grave:', contadorGrave)



})

