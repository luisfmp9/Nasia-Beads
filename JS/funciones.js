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


    // Crear animación de corazón al hacer click
    function createHeartAnimation(event) {
        const heart = document.createElement('div');
        heart.className = 'ripple-effect';
        heart.style.left = event.pageX + 'px';
        heart.style.top = event.pageY + 'px';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
        console.log("hola");
    }

    // Animación de onda roja periódica
    setInterval(() => {
        const wave = document.createElement('div');
        wave.className = 'wave-effect';
        wave.style.left = '50%';
        wave.style.top = '50%';
        document.body.appendChild(wave);
        
        setTimeout(() => {
            wave.remove();
        }, 2000);
    }, 5000);
});