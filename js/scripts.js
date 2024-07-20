const links = document.querySelectorAll(".go-to a");
for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop + 200,
        behavior: "smooth"
    });
    highlightText(href);
}

function highlightText(href) {
    const text = document.querySelector(href)
    text.classList.toggle('lighted-text')
    setTimeout(resetTextColor, 1000, href);
}

function resetTextColor(href) {
    const text = document.querySelector(href)
    text.classList.toggle('lighted-text')
}

const switchButton = document.getElementById("switch-btn")

switchButton.addEventListener('click', (e) => {
    document.documentElement.classList.toggle('dark-mode');
    switchButton.classList.toggle('active')
    const cards = document.querySelectorAll(".card")
    cards.forEach(card => {
        card.classList.toggle('bg-dark')
        card.classList.toggle('text-white')
    })
    const navbar = document.querySelector('nav')
    navbar.classList.toggle('navbar-dark')
    navbar.classList.toggle('bg-dark')
})

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data) 
    });
    return response.json();
}

const modal = document.getElementById("emailResultModal")
const bootstrapModal = new bootstrap.Modal(modal, {});

const contactForm = document.getElementById('contact-form')

function setModalText(title, bodyText) {
    const modalTitle = document.querySelector('#emailResultModal .modal-title');
    const modalBody = document.querySelector('#emailResultModal .modal-body');

    modalTitle.textContent = title
    modalBody.textContent = bodyText
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const body = Object.fromEntries(new FormData(e.target))

    postData('https://jp-portfolio-backend.vercel.app/api/sendmail', body)
    .then(data => {
        console.log("data: ",data);
        const correctMsg = "Tu correo se ha enviado correctamente. Me contactaré contigo lo antes posible 😉."
        setModalText("¡Muchas gracias por contactarme!", correctMsg)
        bootstrapModal.show();
    })
    .catch(error => {
        console.log("eror: ",error);
        const errorMsg = "Ocurrió un error al enviar el formulario 😱. Prueba en unos minutos, por favor. O también puedes enviarme tu mensaje a pedrojulianpalavecino@gmail.com 😉."
        setModalText("Ocurrió un error", errorMsg)
        bootstrapModal.show();
    });
})