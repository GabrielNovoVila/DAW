$(document).ready(function() {
    // 1. Obtener el parámetro 'tarta' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    let nombreTarta = urlParams.get('tarta');
    if (!nombreTarta) {
        alert("Solo las tartas tienen un XML asociado.");
        nombreTarta = "Queso"; // Valor por defecto si no se encuentra el parámetro
    }
    // 2. Cargar el XML
    $.ajax({
        type: "GET",
        url: "../js/tartas.xml", // Ruta al archivo XML
        dataType: "xml",
        success: function(xml) {
            // 3. Buscar la tarta específica
            const tarta = $(xml).find('tarta').filter(function() {
                return $(this).find('nombre').text() === nombreTarta;
            });

            if (tarta.length > 0) {
                // 4. Mostrar los datos en el HTML
                $("#nombre-tarta").text(tarta.find('nombre').attr("descripcion").trim());
                $("#descripcion").text(tarta.find('descripcion').text().trim());
                $("#foto-tarta").attr("src", tarta.find('foto').text().trim());
                
                // Mostrar información
                const $infoList = $("#info");
                tarta.find('informacion info').each(function() {
                    $infoList.append(`<li>${$(this).text()}</li>`);
                });

                // Mostrar ingredientes
                const $ingredientesList = $("#ingredientes");
                tarta.find('ingredientes ingrediente').each(function() {
                    $ingredientesList.append(`<li>${$(this).text()}</li>`);
                });

                // Mostrar pasos de preparación
                const $pasosList = $("#pasos");
                tarta.find('preparacion paso').each(function() {
                    $pasosList.append(`<li>${$(this).text()}</li>`);
                });
            } else {
                alert("Tarta no encontrada");
            }
        },
        error: function(xhr, status, error) {
            console.error("Error:", status, error, xhr.responseText);
        }
    });
});