function showNextMessage(nextMsgId) {
    const currentMsg = document.querySelector('.msg.active');
    if (currentMsg) {
        currentMsg.classList.remove('active');
        currentMsg.style.opacity = 0;
    }

    const nextMsg = document.getElementById('msg' + nextMsgId);
    if (nextMsg) {
        setTimeout(() => {
            nextMsg.classList.add('active');
            nextMsg.style.opacity = 1;
        }, 500); // Retraso para la transición de opacidad
    }
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el botón por su ID
    const button = document.getElementById("btnSi");

    // Agregar evento de clic al botón
    button.addEventListener("click", function() {
        alert("Bienvenida a nuestra historia <3");
    });
});

document.addEventListener("DOMContentLoaded", function() {
const button = document.getElementById("btnNo");

    // Agregar evento de clic al botón
    button.addEventListener("click", function() {
        alert("Vuelve a pensarlo");
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

