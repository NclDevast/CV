const yearElement = document.querySelector("#current-year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (typeof ScrollReveal === "function") {
    ScrollReveal().reveal(".reveal", {
        distance: "24px",
        duration: 700,
        easing: "ease-out",
        interval: 100,
        origin: "bottom",
        reset: false
    });
}

const printButton = document.querySelector("#print-page");
if (printButton instanceof HTMLButtonElement) {
    printButton.addEventListener("click", () => window.print());
}

const navigation = document.querySelector("#navBarCollapseContent");
if (navigation instanceof HTMLElement) {
    navigation.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.matchMedia("(max-width: 991.98px)").matches) {
                bootstrap.Collapse.getOrCreateInstance(navigation).hide();
            }
        });
    });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm instanceof HTMLFormElement) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const subject = `Contacto desde el portafolio: ${formData.get("name") || ""}`;
        const body = `Nombre: ${formData.get("name") || ""}\nCorreo: ${formData.get("email") || ""}\n\n${formData.get("message") || ""}`;
        window.location.href = `mailto:correo@ejemplo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}