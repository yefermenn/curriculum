var abierto=false;
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

var grupoBachillerato = document.getElementById("g31");
var estrellaBachillerato = document.getElementById("path26");
var lineaBachillerato = document.getElementById("path11");

var grupoTecnico = document.getElementById("g33");
var estrellaTecnico = document.getElementById("path18");
var lineaTecnico = document.getElementById("path19")

var grupoProfesional = document.getElementById("g32");
var estrellaProfesional = document.getElementById("path28");
var lineaProfesional = document.getElementById("path27");

var grupoIrvine = document.getElementById("g46");
var estrellaIrvine = document.getElementById("path40");
var lineaIrvine = document.getElementById("path41");

var grupoAnalisis = document.getElementById("g64");
var estrellaAnalisis = document.getElementById("path59");
var lineaAnalisis = document.getElementById("path58");

var grupoProgramacion = document.getElementById("g69");
var estrellaProgramacion = document.getElementById("path64");
var lineaProgramacion = document.getElementById("path65");


var circuloBachillerato = document.getElementById("circle10");
var circuloTecnico = document.getElementById("circle17");
var circuloProfesional = document.getElementById("circle26");
var circuloIrvine = document.getElementById("circle42");
var circuloAnalisis = document.getElementById("circle60");
var circuloProgramacion = document.getElementById("circle66");

circuloBachillerato.addEventListener('mouseover',() => {
    grupoBachillerato.style.visibility="visible";
    grupoBachillerato.style.opacity="1";
    estrellaBachillerato.style.visibility="visible";
    estrellaBachillerato.style.opacity="1";
    lineaBachillerato.style.visibility="visible";
    lineaBachillerato.style.opacity="1";
})
circuloTecnico.addEventListener('mouseover', () => {
    grupoTecnico.style.visibility="visible";
    grupoTecnico.style.opacity="1";
    estrellaTecnico.style.visibility="visible";
    estrellaTecnico.style.opacity="1";
    lineaTecnico.style.visibility="visible";
    lineaTecnico.style.opacity="1";
})
circuloProfesional.addEventListener('mouseover', () =>{
    grupoProfesional.style.visibility="visible";
    grupoProfesional.style.opacity="1";
    estrellaProfesional.style.visibility="visible";
    estrellaProfesional.style.opacity="1";
    lineaProfesional.style.visibility="visible";
    lineaProfesional.style.opacity="1";
})
circuloIrvine.addEventListener('mouseover', () =>{
    grupoIrvine.style.visibility="visible";
    grupoIrvine.style.opacity="1";
    estrellaIrvine.style.visibility="visible";
    estrellaIrvine.style.opacity="1";
    lineaIrvine.style.visibility="visible";
    lineaIrvine.style.opacity="1";
});
circuloAnalisis.addEventListener('mouseover', () =>{
    grupoAnalisis.style.visibility="visible";
    grupoAnalisis.style.opacity="1";
    estrellaAnalisis.style.visibility="visible";
    estrellaAnalisis.style.opacity="1";
    lineaAnalisis.style.visibility="visible";
    lineaAnalisis.style.opacity="1";
});
circuloProgramacion.addEventListener('mouseover', () =>{
    grupoProgramacion.style.visibility="visible";
    grupoProgramacion.style.opacity="1";
    estrellaProgramacion.style.visibility="visible";
    estrellaProgramacion.style.opacity="1";
    lineaProgramacion.style.visibility="visible";
    lineaProgramacion.style.opacity="1";
});

window.addEventListener('scroll', parallaxEffect);
window.onload=setAlturaPant('header');