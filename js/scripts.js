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

/* Language */

const spanish = {
        "navbarDropdownMenuAbout": "Sobre mí",
        "dropdown-about-presentation": "Presentación",
        "dropdown-about-studies": "Estudios",
        "dropdown-about-knowledge": "Conocimientos",
        "dropdown-about-experience": "Experiencia",
        "dropdown-about-english": "Nivel de inglés",
        "dropdown-about-contact": "Contacto",
        "navbarDropdownMenuProjects": "Mis proyectos",
        "dropdown-projects-repos": "Mis repositorios",
        "dropdown-projects-portfolio-repo": "Repositorio de este portfolio",
        "nav-contact": "Contáctame",
        "profile-profession": "Desarrollador Frontend",
        "about-title": "Sobre mí",
        "info-presentation": "Presentación",
        "info-presentation-1": "🧑 Desarrollador muy entusiasta y de aprendizaje continuo. Me encanta crear, por lo que siempre trabajo con alegría.",
        "info-presentation-2": "👨‍💻 Me especializo en el área de Frontend con <b>ReactJS</b>, y me desenvuelvo cómodamente en Backend con Spring Framework y Node.js.",
        "info-presentation-3": "💻 Busco trabajar en proyectos que me ayuden a crecer como desarrollador adquiriendo experiencia y habilidades.",
        "info-studies": "Estudios",
        "info-studies-informatorio-specialization-1": "Introducción a la programación",
        "info-studies-informatorio-specialization-2": "Desarrollo Web Full Stack",
        "info-studies-pixel-lab-title": "Pixel Lab (Antiguo 'Infogamers Chaco')",
        "info-studies-pixel-lab-specialization-1": "Desarrollo de Videojuegos",
        "info-studies-pixel-lab-specialization-2": "Introducción al desarrollo de Videojuegos",
        "info-knowledge": "Conocimientos",
        "info-knowledge-tools-title": "Otras herramientas",
        "info-experience-title": "Experiencia",
        "info-experience-cadizspa": "Proyecto freelance donde se crean funcionalidades y se adapta una plantilla a medida.",
        "info-experience-cettlab": "Proyecto freelance donde se crean funcionalidades y se adapta una plantilla a medida.",
        "info-experience-teledoc": "Mantenimiento y creación de nuevas funcionalidades como Frontend Developer en una plataforma de telemedicina.",
        "info-experience-alkemy": "Plataforma de entrenamiento en donde desarrolladores de software trainee aceleran y certifican sus habilidades como programadores junior productivos.",
        "info-experience-matanga": "Proyecto final grupal de la etapa 2 del Informatorio Chaco.",
        "info-english-level-title": "Nivel de inglés",
        "ef-set-button": "Credencial de EF SET",
        "info-contact-title": "Contacto",
        "submit-email-button": "Enviar mensaje",
        "section-projects-title": "Mis principales proyectos",
    }

const english =
    {
        "navbarDropdownMenuAbout": "About",
        "dropdown-about-presentation": "Presentation",
        "dropdown-about-studies": "Studies",
        "dropdown-about-knowledge": "Knowledge",
        "dropdown-about-experience": "Experience",
        "dropdown-about-english": "English Level",
        "dropdown-about-contact": "Contact",
        "navbarDropdownMenuProjects": "My projects",
        "dropdown-projects-repos": "My repositories",
        "dropdown-projects-portfolio-repo": "Repository of this portfolio",
        "nav-contact": "Contact me",
        "profile-profession": "Frontend Developer",
        "about-title": "About",
        "info-presentation": "Presentation",
        "info-presentation-1": "🧑 A very enthusiastic and constantly learning developer. I love creating, so I always work with joy.",
        "info-presentation-2": "👨‍💻 I specialize in the Frontend area with ReactJS, and I am comfortable in Backend with Spring Framework and Node.js.",
        "info-presentation-3": "💻 I'm looking to work on projects that help me grow as a developer by gaining experience and skills.",
        "info-studies": "Studies",
        "info-studies-informatorio-specialization-1": "Introduction to programming",
        "info-studies-informatorio-specialization-2": "Full Stack Web Development",
        "info-studies-pixel-lab-title": "Pixel Lab (Previously 'Infogamers Chaco')",
        "info-studies-pixel-lab-specialization-1": "Game Development",
        "info-studies-pixel-lab-specialization-2": "Introduction to Game Development",
        "info-knowledge": "Knowledge",
        "info-knowledge-tools-title": "Other tools",
        "info-experience-title": "Work experience",
        "info-experience-cadizspa": "Freelance project where functionalities are created and a custom template is adapted.",
        "info-experience-cettlab": "Freelance project where functionalities are created and a custom template is adapted.",
        "info-experience-teledoc": "Maintaining and creating new features as a Frontend Developer on a telemedicine platform.",
        "info-experience-alkemy": "Training platform where trainee software developers accelerate and certify their skills as productive junior programmers.",
        "info-experience-matanga": "Final group project of stage 2 of the Chaco Informatory.",
        "info-english-level-title": "English level",
        "ef-set-button": "EF SET Credential",
        "info-contact-title": "Contact",
        "submit-email-button": "Send message",
        "section-projects-title": "My main projects",
    }

document.getElementById('spanish-button').addEventListener('click', (e) => {
    if (!document.getElementById("english-flag").classList.contains('d-none')) {
        document.getElementById("english-flag").classList.add('d-none')
    }
    document.getElementById("spanish-flag").classList.remove('d-none')
    for (let key in spanish) {
        console.log(`${key}`)
        document.getElementById(key).innerHTML = spanish[key]
    }
})

document.getElementById('english-button').addEventListener('click', (e) => {
    document.getElementById("english-flag").classList.remove('d-none')
    if (!document.getElementById("spanish-flag").classList.contains('d-none')) {
        document.getElementById("spanish-flag").classList.add('d-none')
    }
    for (let key in english) {
        console.log(`${key}`)
        document.getElementById(key).innerHTML = english[key]
    }
})

/* /Language/ */

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
    const langSwitch = document.getElementById('dropdownMenuLang')
    langSwitch.classList.toggle('text-light')
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
const submitEmailBtn = document.getElementById('submit-email-button')

function setModalText(title, bodyText) {
    const modalTitle = document.querySelector('#emailResultModal .modal-title');
    const modalBody = document.querySelector('#emailResultModal .modal-body');

    modalTitle.textContent = title
    modalBody.textContent = bodyText
}

function setSubmitBtnLoading(isLoading) {
    if (isLoading) {
        submitEmailBtn.innerHTML = `
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
        `;
        submitEmailBtn.disabled = true;
    } else {
        submitEmailBtn.innerHTML = `
            Enviar mensaje
        `;
        submitEmailBtn.disabled = false;
    }
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const body = Object.fromEntries(new FormData(e.target))
    setSubmitBtnLoading(true)

    postData('https://jp-portfolio-backend.vercel.app/api/sendmail', body)
    .then(data => {
        console.log("data: ",data);
        const correctMsg = "Tu correo se ha enviado correctamente. Me contactaré contigo lo antes posible 😉."
        setModalText("¡Muchas gracias por contactarme!", correctMsg)
        bootstrapModal.show();
        setSubmitBtnLoading(false);
    })
    .catch(error => {
        console.log("eror: ",error);
        const errorMsg = "Ocurrió un error al enviar el formulario 😱. Prueba en unos minutos, por favor. O también puedes enviarme tu mensaje a pedrojulianpalavecino@gmail.com 😉."
        setModalText("Ocurrió un error", errorMsg)
        bootstrapModal.show();
        setSubmitBtnLoading(false);
    });
})
