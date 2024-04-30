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

const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const body = Object.fromEntries(new FormData(e.target))

    postData('http://localhost:80/api/sendmail', body)
    .then(data => {
        console.log(data);
    });
})