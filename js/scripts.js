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
    document.querySelector(href).style.color = '#CCEBF1'
    setTimeout(resetTextColor, 1000, href);
}
function resetTextColor(href) {
    document.querySelector(href).style.color = '#000000'
}