
window.addEventListener("load",iniciar);
function iniciar() {
    let nombre=document.getElementById("nom").innerHTML;
    let apodo=document.getElementById("apo").innerHTML;
    let empieza=document.getElementById("empieza");
    let padre=document.getElementById("login");
    padre.style.display="block";
    empieza.addEventListener("click", ()=>{
        
        padre.style.display="none";
    })
}