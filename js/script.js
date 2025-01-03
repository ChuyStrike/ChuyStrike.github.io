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
        alert("Recuerdas ese momento cuando le diste click aqui, y empezo nuestra aventura, justo asi con un Click que solo decia 'Bienvenida a nuestra historia' <3");
    });
});

document.addEventListener("DOMContentLoaded", function() {
const button = document.getElementById("btnNo");

    // Agregar evento de clic al botón
    button.addEventListener("click", function() {
        alert("Eres una grosera por volver a darle que no primero");
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



    


document.addEventListener('DOMContentLoaded', function () {
    // Obtener el botón por su ID
    const button = document.getElementById('button1');
    let clickedOnce = false; // Variable para rastrear los clics

    // Evento para manejar el clic en el botón
    button.addEventListener('click', function () {
        if (!clickedOnce) {
            // Primer clic: abrir el PDF en una nueva pestaña
            window.open('./imagenes/For_Liz.pdf', '_blank');
            clickedOnce = true; // Marcar que ya se hizo el primer clic
        } else {
            // Segundo clic: cambiar el texto del botón y redirigir
            button.innerHTML = '<span>Espero que te haya gustado el detalle, pero sigamos viendo &#128526;</span>';
            
            // Redirigir después de un breve retraso
            setTimeout(() => {
                window.location.href = './mensaje.html';
            }, 2000); // Espera 2 segundos antes de redirigir
        }
    });
});

//CANCIONES
// Esperar a que la página cargue completamente
window.addEventListener('load', function() {
    const audio = document.getElementById('myAudio1');

    // Retrasar la reproducción del audio por 3 segundos
    setTimeout(() => {
        audio.play().catch((error) => {
            console.log('Reproducción automática bloqueada:', error);
        });
    }, 3000); // 3000ms = 3 segundos
});
