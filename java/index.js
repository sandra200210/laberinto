let moneda=0;
let nombre="";
let apodo="";
let tiempo=0;
let monedita="";

window.addEventListener("load",iniciar);
function iniciar() {
    if (localStorage.getItem("RK")==null) {
        localStorage.setItem("RK","");
    }
}

function fin() {
    const rank=localStorage.getItem("RK").split("*");
    tiempo=document.getElementById("tiempo").innerHTML;
    monedita=document.getElementById("marcador").innerHTML;
    const jugador=[monedita,tiempo,localStorage.getItem("apodo")];
    let ranki=jugador.join(";");
    rank.push(ranki);
    for (let i = 0; i < rank.length; i++) {
        if (rank[i].split(";")[2]=="") {
            rank.splice(i, 1);
        }
    }
    localStorage.setItem("RK",rank.join("*"));
}

function leerRK(){
    fin();
    const rank=localStorage.getItem("RK").split("*");
    let padre=document.getElementById("tabla");
    rank.sort();
    rank.reverse();
    /* debe de limpiarse todo lo que es en la tabla antes de volver a cargar los datos */
    if (padre.children!=0) {
        const elim=padre.children;
        for (let i = 0; i < elim.length; i++) {

            padre.removeChild(elim[i]);
        }
        padre.innerHTML="<tr><th>Moneda</th><th>Tiempo</th><th>Apodo</th></tr>";
    }
    for (let i = 0; i < rank.length; i++) {
        let caja= document.createElement("tr");
        const datos_jugador=rank[i].split(";");/* es el array de jugador pero con diferente nombre */
        for (let i = 0; i < datos_jugador.length; i++) {
            /* creamos los 3 datos como 3 td */
            let caja2= document.createElement("td");
            let valor=datos_jugador[i];
            let palabra=document.createTextNode(valor);
            caja2.appendChild(palabra);
            /* introducimos los 3 td en el tr */
            caja.appendChild(caja2);
        }
        /* por cada jugador incorpotamos un tr nuevo*/
        padre.appendChild(caja);
    }

}
function finpartida() {
    clearInterval(intervalo);
    leerRK();
}