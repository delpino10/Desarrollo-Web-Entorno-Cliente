function cambiarImagen(){
    var image = document.getElementById('myFPImage');
    if(image.src.match("green")){
        image.src='black.png';
    }else{
        image.src="green.png";
    }
}