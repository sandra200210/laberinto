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
    monedita=document.getElementById("marcador").innerHTML;
    const rank=localStorage.getItem("RK").split("*");
    const jugador=[localStorage.getItem("apodo"),monedita,tiempo];
    let ranki=jugador.join(";");
    rank.push(ranki);
    if (condition) {
        
    }
    localStorage.setItem("RK",rank.join("*"));
}
function leerRK(){

}