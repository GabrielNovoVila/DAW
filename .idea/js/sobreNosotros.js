addEventListener("DOMContentLoaded", function() {
    const ul = document.getElementsByTagName("ul")[1]; // Obtiene el segundo <ul>
    const items = ul.getElementsByTagName("a"); // Obtiene los <li> dentro de él

    const texto= document.getElementById("texto"); // Obtiene el elemento con id "texto"
    const spans= texto.getElementsByTagName("span"); // Obtiene los <span> dentro de él

    const desaparecer="opacity: 0; transition: opacity 0.5s ease;";
    const aparecer="opacity: 1; transition: opacity 0.5s ease;";

    // Iterar sobre cada <li>
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("mouseenter", function() {
            if (this.innerHTML.trim() === "FAQ") { // trim() para evitar espacios extra
                spans[1].style= desaparecer;
                spans[2].style= desaparecer;
            }else if(this.innerHTML.trim() === "Contactos") {
                spans[0].style= desaparecer;
                spans[2].style= desaparecer;
            }else if(this.innerHTML.trim() === "Nosotros") {
                spans[0].style= desaparecer;
                spans[1].style= desaparecer;
            }
        });
        items[i].addEventListener("mouseleave", function() {
            if (this.innerHTML.trim() === "FAQ") { // trim() para evitar espacios extra
                spans[1].style= aparecer;
                spans[2].style= aparecer;
            }else if(this.innerHTML.trim() === "Contactos") {
                spans[0].style= aparecer;
                spans[2].style= aparecer;
            }else if(this.innerHTML.trim() === "Nosotros") {
                spans[0].style= aparecer;
                spans[1].style= aparecer;
            }
        });
    }
});



