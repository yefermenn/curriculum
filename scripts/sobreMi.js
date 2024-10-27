function setAlturaPant(nombre){
    var tamaño = window.innerHeight;
    document.getElementById(nombre).style.height=tamaño + 'px';
}
window.onload=setAlturaPant('menuLat');