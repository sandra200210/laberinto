let padre=document.getElementById("login");
let segundos=0;
let intervalo;
function empezar() {

    nom=document.getElementById("nom").value;
    apo=document.getElementById("apo").value;
    document.getElementById("perfil").children[1].innerHTML=nom;
    localStorage.setItem("nombre",nom);
    localStorage.setItem("apodo",apo);
    document.getElementById("login").style.display="none";
    document.getElementById("hi").style.display="none";
    intervalo=setInterval(function(){
        segundos++;
        document.getElementById("tiempo").innerHTML=segundos;
    },1000);
    document.getElementById("perfil").children[0].setAttribute("src","../IMG/perfil/"+Math.floor(Math.random() * 3)+".jpg");
    /* document.getElementById("audiofondo").volumen */
    document.getElementById("audiofondo").play();
    
}
