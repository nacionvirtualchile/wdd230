const baseURL = "https://yourgithubusername.github.io/wdd230/";
const linksURL = "data/links.json";
const ulToLinks = document.querySelector("#ulToLinks");


async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        console.table(data.weeks);
        displayLinks(data.weeks);
    }
}



const displayLinks = (weeks) => {
    weeks.forEach((week) => {

        let li = document.createElement('li');
        // let p = document.createElement('p');
        // p.textContent = week.week;
        // li.appendChild(p);
        li.append(week.week);
        li.append(": ");

        week.links.forEach((link) => {
            let a = document.createElement('a');
            a.setAttribute('href', link.url);
            a.setAttribute('title', link.title);
            a.setAttribute('target', "_blank");
            a.textContent = link.title;

            li.appendChild(a);
            li.append(" | ");
        })

        ulToLinks.appendChild(li);




        // let fullName = document.createElement('h2');
        // let descriptionBirthdate = document.createElement('p');
        // let descriptionBirthplace = document.createElement('p');
        // let portrait = document.createElement('img');

        // fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        // portrait.setAttribute('src', prophet.imageurl);
        // portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        // portrait.setAttribute('loading', 'lazy');
        // portrait.setAttribute('width', '340');
        // portrait.setAttribute('height', '440');
        // descriptionBirthdate.textContent = `Date of birth: ${prophet.birthdate}`;
        // descriptionBirthplace.textContent = `Place of birth: ${prophet.birthplace}`;

        // card.appendChild(fullName);
        // card.appendChild(descriptionBirthdate);
        // card.appendChild(descriptionBirthplace);
        // card.appendChild(portrait);
        // cards.appendChild(card);
    });
}



getLinks();