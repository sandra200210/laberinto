document.onkeydown = mover;
function mover(e){
    let personaje=document.getElementById("caja");
    let der=personaje.parentElement.nextElementSibling;
    let iz=personaje.parentElement.previousElementSibling;
    let arr=document.getElementById(personaje.parentElement.id-15);
    let baj=document.getElementById(personaje.parentElement.id*15/15+15);
    e = e || window.event;
    console.log(e.keyCode);
    if(e.keyCode == '38'){
        // arriba
        document.getElementById("persona").src="../IMG/Personaje/prota-arriba.gif"
        let clases = arr.classList;
        let tiene = false;
        for(let i = 0; i < clases.length; i++) {
            if(clases[i] == 'suelo' || clases[i] == 'entrada1')
                tiene = true;
        }
        if(tiene){
        arr.appendChild(personaje);
        der=personaje.parentElement.nextElementSibling;
        iz=personaje.parentElement.previousElementSibling;
        arr=document.getElementById(personaje.parentElement.id-15);
        baj=document.getElementById(personaje.parentElement.id*15/15+15)
        }
    }
    else if (e.keyCode =='40'){
        // abajo
        document.getElementById("persona").src="../IMG/Personaje/prota-abajo.gif"
        let clases = baj.classList;
        let tiene = false;
        for(let i = 0; i < clases.length; i++) {
            if(clases[i] == 'suelo' || clases[i] == 'entrada1')
                tiene = true;
        }
        if(tiene){
        baj.appendChild(personaje);
        der=personaje.parentElement.nextElementSibling;
        iz=personaje.parentElement.previousElementSibling;
        arr=document.getElementById(personaje.parentElement.id-15);
        baj=document.getElementById(personaje.parentElement.id*15/15+15);
        }
    }
    else if (e.keyCode == '37'){
        // izquierda
        document.getElementById("persona").src="../IMG/Personaje/prota-izq.gif"
        let clases = iz.classList;
        let tiene = false;
        for(let i = 0; i < clases.length; i++) {
            if(clases[i] == 'suelo' || clases[i] == 'entrada1')
                tiene = true;
        }
        if(tiene){
        iz.appendChild(personaje);
        der=personaje.parentElement.nextElementSibling;
        iz=personaje.parentElement.previousElementSibling;
        arr=document.getElementById(personaje.parentElement.id-15);
        baj=document.getElementById(personaje.parentElement.id*15/15+15);
        }
    }
    else if (e.keyCode == '39'){
        // derecha
        document.getElementById("persona").src="../IMG/Personaje/prota-dech.gif"
        let clases = der.classList;
        let tiene = false;
        for(let i = 0; i < clases.length; i++) {
            if(clases[i] == 'suelo' || clases[i] == 'entrada1')
                tiene = true;
        }
        if(tiene){
        der.appendChild(personaje);
        der=personaje.parentElement.nextElementSibling;
        iz=personaje.parentElement.previousElementSibling;
        arr=document.getElementById(personaje.parentElement.id-15);
        baj=document.getElementById(personaje.parentElement.id*15/15+15);
        }
    }
    let celdas=document.querySelectorAll("td.casilla");
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style.opacity=0;
    }
    personaje.parentElement.style.opacity = 1;
    der.style.opacity=1;
    iz.style.opacity=1;
    baj.style.opacity=1;
    arr.style.opacity=1;
}