function createWaveEffect(event) {
    const wave = document.createElement("div");
    wave.className = "wave-effect";
    wave.style.left = `${event.pageX - 25}px`; // Centrado de la onda (ajustado para el tamaño)
    wave.style.top = `${event.pageY - 25}px`; // Centrado de la onda (ajustado para el tamaño)
    document.body.appendChild(wave);

    setTimeout(() => wave.remove(), 3000); // Duración de la onda
}
     
function toggleMenu() {
    let nav = document.querySelector(".nav-links");
    let menuToggle = document.querySelector(".menu-toggle");

    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector("form").addEventListener("submit", function(event) {
        let nombre = document.querySelector("input[type='text']").value;
        let email = document.querySelector("input[type='email']").value;
        let mensaje = document.querySelector("textarea").value;
    
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, llena todos los campos.");
            event.preventDefault();
        } else if (!email.includes("@")) {
            alert("Ingresa un correo válido.");
            event.preventDefault();
        } else {
            let asunto = `Mensaje de ${nombre}`;
            let cuerpo = `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`;

            // Crear el enlace mailto con los datos del formulario
            let mailtoLink = `mailto:nathalykalantar@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
            // Redirigir al enlace mailto
            window.location.href = mailtoLink;
        }
    });

    // Suavizar scroll al hacer click en los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll suave al hacer click en el botón
    document.querySelector('button').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#productos').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Crear la onda al hacer clic
    document.addEventListener("click", function (event) {
        createWaveEffect(event);
    });
    
});