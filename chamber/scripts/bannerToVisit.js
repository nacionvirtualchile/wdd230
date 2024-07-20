const bannerButton = document.querySelector('#bannerButton');
const bannerToVisit = document.querySelector('.bannerToVisit');

bannerButton.addEventListener('click', () => {
    bannerToVisit.style.display = 'none';
});



const day = new Date().getDay();

if (day === 1 || day === 2 || day === 3) {
    bannerToVisit.style.display = 'flex';
} else {
    bannerToVisit.style.display = 'none';
}