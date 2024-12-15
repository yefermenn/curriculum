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
