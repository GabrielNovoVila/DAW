let intervaloAnimacion = null;

$(document).ready(function() {
    // Abrir popup
    $("#btn-filtro").on("click", function(event) {
        $("#filtro").addClass("popup");
        $("body").append('<div class="overlay"></div>');

        $("#filtro").append('<img id="cruz" src="../imagenes/cruz.png" alt="Cerrar">');
        $("#filtro").append("<h3>Filtros de búsqueda</h3>");

        const $label = $("<label class=\"listaFiltros\">");
        $label.append($("<input>", { type: "radio", name: "filtro" }));
        $label.append($("<span class=\"radioTexto\">Recientes</span>"));

        const $label1 = $("<label class=\"listaFiltros\">");
        $label1.append($("<input>", { type: "radio", name: "filtro" }));
        $label1.append($("<span class=\"radioTexto\">Localización</span>"));
        
        const $label2 = $("<label class=\"listaFiltros\">");
        $label2.append($("<input>", { type: "radio", name: "filtro" }));
        $label2.append($("<span class=\"radioTexto\">Intolerancias</span>"));

        const $label3 = $("<label class=\"listaFiltros\">");
        $label3.append($("<input>", { type: "radio", name: "filtro" }));
        $label3.append($("<span class=\"radioTexto\">Dificultad</span>"));

        $("#filtro").append($label);
        $("#filtro").append($label1);
        $("#filtro").append($label2);
        $("#filtro").append($label3);

        $("#filtro").append("<p id=\"descripcion\">Esta función permite filtrar las recetas de nuestra página de una manera eficiente en base a ciertos parámetros</p>");

        $("#filtro").append("<a href=\"../paginas/recetasFiltradas.html\" class=\"botoncitos\">Aplicar filtro de búsqueda</a>");

        $("#descripcion").css("justify-self","center").css("text-align","justify").css("max-width","400px").css("height","40px").css("font-size","16px");
        $("label span").css("border", "3px solid white").css("border-radius","10px").css("font-size", "18px").css("padding-left", "10px");
        $("#filtro .botoncitos").css("justify-self", "center").css("position", "relative").css("bottom", "-100px").css("width","500px").css("margin-left","0px");
    });

    // Cerrar popup al hacer clic fuera
    $(document).on("click", function(event) {
        // Si el clic NO fue dentro de #filtro ni en #btn-filtro
        if (!$(event.target).closest("#filtro").length && !$(event.target).is("#btn-filtro") || $(event.target).is("#cruz")) {
            $(".overlay").remove();
            $("#filtro").empty();
            $("#filtro").removeClass("popup");
        }
    });

    $(document).on("change", "input[name='filtro']", function() {
        const textoOpcion = $(this).next(".radioTexto").text(); // Texto del span
        
        if (textoOpcion === "Recientes") {
            animarTexto($("#descripcion"), "El contenido será organizado por fecha, permitiendo al usuario acceder rápidamente a las últimas recetas publicadas. Es útil para quienes buscan estar al día con las tendencias o nuevas creaciones culinarias. ", 1);
        }else if (textoOpcion === "Localización") {
            animarTexto($("#descripcion"), "Permite al usuario ajustar los resultados según su ubicación geográfica. Este filtro es ideal para quienes desean explorar la cocina basada en su entorno o aprovechar productos frescos de su área. ", 1);
        }else if (textoOpcion === "Intolerancias") {
            animarTexto($("#descripcion"), "Se mostrarán recetas que sean aptas para el consumo de intolerantes a los ingredientes habituales: huevos, pescado, frutos secos, etc. Asegurando que sean seguras para quien las consuma.", 1);
        }else if (textoOpcion === "Dificultad") {
            animarTexto($("#descripcion"), "Las recetas estarán organizadas por dificultad descendente asignada de manera colaborativa con nuestros usuarios, así, los amantes de retos culinarios podrán practicar sus destrezas sin miramientos.", 1);
        }

    });

    function animarTexto($element, texto, velocidad = 100) {
        // 1. Limpiar animación anterior si existe
        if (intervaloAnimacion) {
            clearInterval(intervaloAnimacion);
            intervaloAnimacion = null;
        }
        
        // 2. Resetear el contenido
        $element.empty();
        let i = 0;
        
        // 3. Iniciar nueva animación
        intervaloAnimacion = setInterval(() => {
            if (i < texto.length) {
                $element.append(texto.charAt(i));
                i++;
            } else {
                clearInterval(intervaloAnimacion);
                intervaloAnimacion = null;
            }
        }, velocidad);
    }

});