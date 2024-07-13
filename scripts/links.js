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



    });
}



getLinks();