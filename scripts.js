var abierto=false;
var identificador=0;
function setAlturaPant(nombre){
    var tamaño = window.innerHeight;
    document.getElementById(nombre).style.height=tamaño + 'px';
}
function parallaxEffect() {
    var scrollPosition = window.pageYOffset;
    var header = document.getElementById('header');
    header.style.backgroundPositionY = (scrollPosition * 0.7) + 'px';
}
function menuHabilidades(solicitud){
    var tecnicas= document.getElementById('Tecnicas');
    var blandas= document.getElementById('Blandas');
    var creativas= document.getElementById('Creativas');
    var idiomaticas= document.getElementById('Idiomaticas');
    if(abierto==false){
        switch(solicitud){
            case 1:
                tecnicas.classList.add('mostrar');
                document.getElementById('tcard').style.backgroundColor="rgb(97, 100, 102)";
                abierto=true;
                identificador=1;
                break;
            case 2:
                blandas.classList.add('mostrar');
                document.getElementById('bcard').style.backgroundColor="rgb(97, 100, 102)";
                abierto=true;
                identificador=2;
                break;
            case 3:
                creativas.classList.add('mostrar');
                document.getElementById('ccard').style.backgroundColor="rgb(97, 100, 102)";
                abierto=true;
                identificador=3;
                break;
            case 4:
                idiomaticas.classList.add('mostrar');
                document.getElementById('icard').style.backgroundColor="rgb(97, 100, 102)";
                abierto=true;
                identificador=4;
                break;
        }
    }else{
        switch(identificador){
            case 1:
                tecnicas.classList.remove('mostrar');
                document.getElementById('tcard').style.backgroundColor="white";
                abierto=false;
                break;
            case 2:
                blandas.classList.remove('mostrar');
                document.getElementById('bcard').style.backgroundColor="white";
                abierto=false;
                break;
            case 3:
                creativas.classList.remove('mostrar');
                document.getElementById('ccard').style.backgroundColor="white";
                abierto=false;
                break;
            case 4:
                idiomaticas.classList.remove('mostrar');
                document.getElementById('icard').style.backgroundColor="white";
                abierto=false;
                break;
        }

        
        if(solicitud!=identificador){
            menuHabilidades(solicitud);
        }
    }
}
function hover(solicitud){
    var tecnicas= document.getElementById('tcard');
    var blandas= document.getElementById('bcard');
    var creativas= document.getElementById('ccard');
    var idiomaticas= document.getElementById('icard');
    switch(solicitud){
        case 1:
            if(tecnicas.style.backgroundColor!="rgb(97, 100, 102)"){
                tecnicas.style.backgroundColor="#b5b7b8ff";
            }
            break;
        case 2:
            if(blandas.style.backgroundColor!="rgb(97, 100, 102)"){
                blandas.style.backgroundColor="#b5b7b8ff";
            }
            break;
        case 3:
            if(creativas.style.backgroundColor!="rgb(97, 100, 102)"){
                creativas.style.backgroundColor="#b5b7b8ff";
            }
            break;
        case 4:
            if(idiomaticas.style.backgroundColor!="rgb(97, 100, 102)"){
                idiomaticas.style.backgroundColor="#b5b7b8ff";
            }
            break;
    }
}
function leave(solicitud){
    var tecnicas= document.getElementById('tcard');
    var blandas= document.getElementById('bcard');
    var creativas= document.getElementById('ccard');
    var idiomaticas= document.getElementById('icard');
    switch(solicitud){
        case 1:
            if(tecnicas.style.backgroundColor!="rgb(97, 100, 102)"){
                tecnicas.style.backgroundColor="white";
            }
            break;
        case 2:
            if(blandas.style.backgroundColor!="rgb(97, 100, 102)"){
                blandas.style.backgroundColor="white";
            }
            break;
        case 3:
            if(creativas.style.backgroundColor!="rgb(97, 100, 102)"){
                creativas.style.backgroundColor="white";
            }
            break;
        case 4:
            if(idiomaticas.style.backgroundColor!="rgb(97, 100, 102)"){
                idiomaticas.style.backgroundColor="white";
            }
            break;
    }
}
window.addEventListener('scroll', parallaxEffect);
window.onload=setAlturaPant('header');