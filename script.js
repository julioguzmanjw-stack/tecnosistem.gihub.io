/* =====================================================
   GUZTEC - JAVASCRIPT
===================================================== */


/* ================= MENÚ MÓVIL ================= */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Cerrar menú al seleccionar una opción */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= AÑO AUTOMÁTICO ================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* ================= FORMULARIO ================= */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre =
        document.getElementById("nombre").value.trim();

    const telefono =
        document.getElementById("telefono").value.trim();

    const servicio =
        document.getElementById("servicio").value;

    const mensaje =
        document.getElementById("mensaje").value.trim();


    if (!nombre || !telefono || !servicio) {

        alert(
            "Por favor completa los campos obligatorios."
        );

        return;
    }


    /*
        IMPORTANTE:

        Reemplaza este número por el número real
        de WhatsApp de GuzTec.

        Formato:
        593 + número sin el 0 inicial.
    */

    const numeroWhatsApp = "593999999999";


    const texto =
        `Hola GuzTec.%0A%0A` +
        `Mi nombre es: ${nombre}%0A` +
        `Teléfono: ${telefono}%0A` +
        `Servicio: ${servicio}%0A` +
        `Mensaje: ${mensaje || "No especificado"}`;


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${texto}`;


    window.open(url, "_blank");

});


/* ================= ANIMACIÓN SUAVE ================= */

const animatedCards =
    document.querySelectorAll(
        ".service-card, .process-item"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(card);

});