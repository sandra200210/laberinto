
window.addEventListener("load",iniciar);
function iniciar() {
    enlaces=document.querySelectorAll("a");
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener("click",()=>{
            window.open(enlaces[i].getAttribute("href"));
            
        })
    }

}
