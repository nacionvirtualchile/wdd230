const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const navigationID = document.querySelector('#navigation');
window.addEventListener('resize', function () {
    if (window.innerWidth >= 560) {
        navigationID.classList.remove('open');
        navigationID.classList.remove('navigation');
    } else {
        navigationID.classList.add('navigation');
        hamButton.classList.remove('open');
    }

});

window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 560) {
        navigationID.classList.remove('navigation');
    } else {
        navigationID.classList.add('navigation');
    }

});