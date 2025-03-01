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