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
            alert("Mensaje enviado con éxito.");
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

    // Animación al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 45, 85, 0.9)';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
    });

    // Crear la onda al hacer clic
    document.addEventListener("click", function (event) {
        createWaveEffect(event.pageX, event.pageY);
    });
    
    function createWaveEffect(x, y) {
        const wave = document.createElement("div");
        wave.className = "wave-effect";
        wave.style.left = `${x - 25}px`; // Centrado de la onda (ajustado para el tamaño)
        wave.style.top = `${y - 25}px`; // Centrado de la onda (ajustado para el tamaño)
        document.body.appendChild(wave);
    
        setTimeout(() => wave.remove(), 3000); // Duración de la onda
    }
    
    // Scroll suave al hacer click en el botón
    document.querySelector('button').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#productos').scrollIntoView({
            behavior: 'smooth'
        });
    });        
    
    // Scroll suave al hacer click en el botón
    document.querySelector('button').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#productos').scrollIntoView({
            behavior: 'smooth'
        });
    });
});