function intercambio(opcion){
    var tecnicas = document.getElementById("1");
    var tecnicasbtn = document.getElementById("b1");
    switch(opcion){
        case 1:
            tecnicas.style.height="250px";
            tecnicas.style.opacity=1;
            tecnicasbtn.style.backgroundColor="rgb(219, 219, 219)";
            break;
        case 2: 
            alert("2");
            break;
        case 3: 
            alert("3");
            break;
        case 4: 
            alert("4");
            break;
    }
}