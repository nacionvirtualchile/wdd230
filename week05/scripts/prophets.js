const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');


let results = null;
async function getProphetData(url) {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        displayProphets(data.prophets);
        console.table(data.prophets);
    }
}


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let descriptionBirthdate = document.createElement('p');
        let descriptionBirthplace = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        descriptionBirthdate.textContent = `Date of birth: ${prophet.birthdate}`;
        descriptionBirthplace.textContent = `Place of birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(descriptionBirthdate);
        card.appendChild(descriptionBirthplace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}



getProphetData(url);
