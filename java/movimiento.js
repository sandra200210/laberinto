var moneda=window.parent.document.getElementById("marcador").innerHTML;
document.onkeydown = mover;
function mover(e){

    let personaje=document.getElementById("caja");
    let der=personaje.parentElement.nextElementSibling;
    let iz=personaje.parentElement.previousElementSibling;
    let arr=document.getElementById(personaje.parentElement.id-15);
    let baj=document.getElementById(personaje.parentElement.id*15/15+15);
    e = e || window.event;

    if(e.keyCode == '38' || e.keyCode == '87'){
        // arriba
        document.getElementById("persona").src="../IMG/Personaje/prota-arriba.gif";
        let clases = arr.classList;
        let tiene = false;
        for(let i = 0; i < clases.length; i++) {
            if(clases[i] == 'suelo' || clases[i] == 'entrada1' || clases[i] == 'money')
                tiene = true;
            if(clases[i] == 'money'){
                moneda++;
                arr.classList.remove('money');
                window.parent.document.getElementById("marcador").innerHTML=moneda;
            }
            if(clases[i] == 'entrada1'){
                window.parent.document.getElementById("frame").src="Mapa2 copy.html";
            }
            if(clases[i] == 'salida'){
                window.parent.document.getElementById("frame").style.display="none";
                window.parent.document.getElementById("final").style.display="block";
                //Quitar el iframe y poner una imagen con el gif dando vueltas;
            }
        }
        if(tiene){
            arr.innerHTML="";
            arr.appendChild(personaje);
            der=personaje.parentElement.nextElementSibling;
            iz=personaje.parentElement.previousElementSibling;
            arr=document.getElementById(personaje.parentElement.id-15);
            baj=document.getElementById(personaje.parentElement.id*15/15+15)
        }
    }
    else if (e.keyCode =='40' || e.keyCode == '83'){
        // abajo
        document.getElementById("persona").src="../IMG/Personaje/prota-abajo.gif";
        let clases = baj.classList;
        let tiene = false;
        for(let i = 0; i < clases.length; i++) {
            if(clases[i] == 'suelo' || clases[i] == 'entrada1' || clases[i] == 'money')
                tiene = true;
            if(clases[i] == 'money'){
                moneda++;
                baj.classList.remove('money');
                window.parent.document.getElementById("marcador").innerHTML=moneda;
            }
            if(clases[i] == 'entrada1'){
                window.parent.document.getElementById("frame").src="Mapa2 copy.html";
            }
        }
        if(tiene){
            baj.innerHTML="";
        baj.appendChild(personaje);
        der=personaje.parentElement.nextElementSibling;
        iz=personaje.parentElement.previousElementSibling;
        arr=document.getElementById(personaje.parentElement.id-15);
        baj=document.getElementById(personaje.parentElement.id*15/15+15);
        }
    }
    else if (e.keyCode == '37' || e.keyCode == '65'){
        // izquierda
        document.getElementById("persona").src="../IMG/Personaje/prota-izq.gif";
        let clases = iz.classList;
        let tiene = false;
        for(let i = 0; i < clases.length; i++) {
            if(clases[i] == 'suelo' || clases[i] == 'entrada1' || clases[i] == 'money')
                tiene = true;
            if(clases[i] == 'money'){
                moneda++;
                iz.classList.remove('money');
                window.parent.document.getElementById("marcador").innerHTML=moneda;
            }
            if(clases[i] == 'entrada1'){
                window.parent.document.getElementById("frame").src="Mapa2 copy.html";
            }
        }
        if(tiene){
            iz.innerHTML="";
        iz.appendChild(personaje);
        der=personaje.parentElement.nextElementSibling;
        iz=personaje.parentElement.previousElementSibling;
        arr=document.getElementById(personaje.parentElement.id-15);
        baj=document.getElementById(personaje.parentElement.id*15/15+15);
        }
    }
    else if (e.keyCode == '39' || e.keyCode == '68'){
        // derecha
        document.getElementById("persona").src="../IMG/Personaje/prota-dech.gif";
        let clases = der.classList;
        let tiene = false;
        for(let i = 0; i < clases.length; i++) {
            if(clases[i] == 'suelo' || clases[i] == 'entrada1' || clases[i] == 'money')
                tiene = true;
            if(clases[i] == 'money'){
                moneda++;
                der.classList.remove('money');
                window.parent.document.getElementById("marcador").innerHTML=moneda;
            }
            if(clases[i] == 'entrada1'){
                window.parent.document.getElementById("frame").src="Mapa2 copy.html";
            }
        }
        if(tiene){
            der.innerHTML="";
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