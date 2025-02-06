document.addEventListener('DOMContentLoaded', function() {
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
            header.style.backgroundColor = '#ff2d55';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = '#ff2d55';
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