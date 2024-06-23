const modeButton = document.querySelector("#mode");
const imgMode = modeButton.querySelector('#imgMode');
const bodyOfPage = document.querySelector("body");
const cards = document.querySelector(".parent-cards");
const logo = document.querySelector('#camara-comercio-logo');
const navAToA = document.querySelectorAll('nav a');



modeButton.addEventListener('click', () => {
    if (imgMode.getAttribute('src') === "images/dark-mode.svg") {
        imgMode.setAttribute('src', "images/light-mode.svg");
        imgMode.setAttribute('alt', "Light mode");
        bodyOfPage.style.background = "#393939";
        bodyOfPage.style.color = "#fff";
        cards.style.color = "#000";
        logo.setAttribute('src', "images/camara-comercio-logo-light.png");
        navAToA.forEach(enlace => {
            enlace.style.color = "#90e0ef";
        });

    } else {
        imgMode.setAttribute('src', "images/dark-mode.svg");
        imgMode.setAttribute('alt', "Dark mode");
        bodyOfPage.style.background = "#fff";
        bodyOfPage.style.color = "#000";
        logo.setAttribute('src', "images/camara-comercio-logo.png");
        navAToA.forEach(enlace => {
            enlace.style.color = "#000";
        });
    }
});