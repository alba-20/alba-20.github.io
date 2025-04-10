document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar el envío real del formulario

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulación de la validación del formulario
    if (name && email && message) {
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
        document.querySelector("form").reset();  // Limpiar el formulario
    } else {
        alert("Por favor, completa todos los campos del formulario.");
    }
});
