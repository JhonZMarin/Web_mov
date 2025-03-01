document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-details");
    const searchInput = document.getElementById("search");
    const contactList = document.getElementById("contact-list");
    const tabs = document.querySelectorAll(".tab");

    // Funcionalidad para desplegar detalles de contacto
    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const contactDetails = button.parentElement.nextElementSibling;
            contactDetails.classList.toggle("hidden");
            button.textContent = contactDetails.classList.contains("hidden") ? "▼" : "▲";
        });
    });
    
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-details").forEach(button => {
        button.addEventListener("click", function () {
            console.log("Botón clickeado"); // Verificar si el evento ocurre

            const contact = this.closest(".contact");
            const contactDetails = contact.querySelector(".contact-details");

            if (contactDetails) {
                console.log("Detalles encontrados, alternando visibilidad");

                // Alternar la clase 'hidden'
                contactDetails.classList.toggle("hidden");

                // Cambiar el ícono del botón según el estado
                if (contactDetails.classList.contains("hidden")) {
                    this.textContent = "▼"; // Flecha hacia abajo (cerrado)
                } else {
                    this.textContent = "▲"; // Flecha hacia arriba (abierto)
                }
            } else {
                console.log("No se encontraron detalles");
            }
        });
    });
});