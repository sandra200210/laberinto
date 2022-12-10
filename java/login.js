
let padre=document.getElementById("login");
let fondo=document.getElementById("hi");
let empieza=document.getElementById("empieza");
/* window.addEventListener("load",iniciar);
function iniciar() {
} */
function empezar() {
    nom=document.getElementById("nom").value;
    apo=document.getElementById("apo").value;
    localStorage.setItem(nom,apo);
    document.getElementById("login").style.display="none";
    document.getElementById("hi").style.display="none";
}