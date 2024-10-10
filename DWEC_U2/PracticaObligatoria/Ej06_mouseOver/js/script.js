var foto = document.getElementById('foto');

foto.addEventListener('mouseover', () =>{
    foto.src='./img/2.jpg';
})

foto.addEventListener('mouseout', () =>{
    foto.src='./img/1.jpg';
})