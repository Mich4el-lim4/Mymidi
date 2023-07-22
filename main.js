function tocaSom(idElementAudio){
    document.querySelector(idElementAudio).play();
}
//document.querySelector('.tecla_pom').onclick = tocaSomPom;
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = function(){
        
    }
    contador++;
}