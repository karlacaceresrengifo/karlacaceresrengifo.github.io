
function limpiar(opacity){
    var juegos = document.querySelectorAll(".juego");
    for(i=0; i<juegos.length;i++){
        juegos[i].style.opacity= opacity;
    }
    
}
function mostrarTodos(clases){
    limpiar("0.2");
    var juegos = document.querySelectorAll("."+clases);
    for(i=0; i<juegos.length;i++){
        juegos[i].style.opacity= "1";
    }
}

