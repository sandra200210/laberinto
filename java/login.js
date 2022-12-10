let empieza=document.getElementById("empieza");
/* window.addEventListener("load",iniciar);
function iniciar() {
} */
function empezar() {
    let nom=document.getElementById("nom").value;
    let apo=document.getElementById("apo").value;
    localStorage.setItem("nombre",nom);
    localStorage.setItem("apodo",apo);
    document.getElementById("login").style.display="none";
    document.getElementById("hi").style.display="none";
}

