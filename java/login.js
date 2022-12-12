let padre=document.getElementById("login");
let fondo=document.getElementById("hi");
let empieza=document.getElementById("empieza");
let segundos=0;
let intervalo;
/* window.addEventListener("load",iniciar);
function iniciar() {
} */
function empezar() {
    nom=document.getElementById("nom").value;
    apo=document.getElementById("apo").value;
    localStorage.setItem("nombre",nom);
    localStorage.setItem("apodo",apo);
    document.getElementById("login").style.display="none";
    document.getElementById("hi").style.display="none";
    intervalo=setInterval(function(){
        segundos++;
        document.getElementById("tiempo").innerHTML=segundos;
    },1000);
    //document.getElementById("nomusr").innerHTML=nom;
}
