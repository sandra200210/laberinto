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
    leerRK();/* si lo escribimos directamente aqui da 2 fallos:
    - O se queda en nulo y no añade el jugador
    - o te repite varias veces el jugador que supongo que sera por lo de que se recarga sola la pagina */
}

function fin() {
    monedita=document.getElementById("marcador").innerHTML;
    const rank=localStorage.getItem("RK").split("*");
    const jugador=[localStorage.getItem("apodo"),monedita,tiempo];
    let ranki=jugador.join(";");
    rank.push(ranki);
    for (let i = 0; i < rank.length; i++) {
        if (rank[i].split(";")[0]=="") {
            rank.splice(i, 1);
        }
    }
    localStorage.setItem("RK",rank.join("*"));
}

function leerRK(){
    fin();
    const rank=localStorage.getItem("RK").split("*");
    let padre=document.getElementById("lista");
    
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