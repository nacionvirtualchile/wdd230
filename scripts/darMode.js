const modeButton = document.querySelector("#mode");
const imgMode = modeButton.querySelector('#imgMode');
const bodyOfPage = document.querySelector("Body");
const cards = document.querySelector(".parent-cards");



modeButton.addEventListener('click', () => {
    if (imgMode.getAttribute('src') === "images/dark-mode.svg") {
        imgMode.setAttribute('src', "images/light-mode.svg");
        imgMode.setAttribute('alt', "Light mode");
        bodyOfPage.style.background = "#393939";
        bodyOfPage.style.color = "#fff";
        cards.style.color = "#000";
    } else {
        imgMode.setAttribute('src', "images/dark-mode.svg");
        imgMode.setAttribute('alt', "Dark mode");
        bodyOfPage.style.background = "#fff";
        bodyOfPage.style.color = "#000";
    }
});