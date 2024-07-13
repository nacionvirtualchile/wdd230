const membersDataSorce = "data/members.json";
const articleMembersGrid = document.querySelector(".membersGrid");


async function getMembers() {
    const response = await fetch(membersDataSorce);
    if (response.ok) {
        const data = await response.json();
        console.table(data.members);
        displayMembers(data.members);
    }
}



const displayMembers = (members) => {
    members.forEach((member) => {

        let section = document.createElement('section');
        let picture = document.createElement('picture');
        let image = document.createElement('img');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let url = document.createElement('a');
        let mailto = document.createElement('a');


        image.setAttribute('src', member.image_icon);
        image.setAttribute('alt', member.name);
        image.setAttribute('width', "50px");
        picture.appendChild(image);
        h3.textContent = "Name: " + member.name;
        p1.textContent = "Address: " + member.address;
        p2.textContent = "Phone Number: " + member.phone_number;
        p3.textContent = "Membership level: " + member.membership_level;
        p4.textContent = "Join Date: " + member.additional_info.join_date;

        url.setAttribute('href', member.website_url);
        url.setAttribute('title', "Website of " + member.name);
        url.setAttribute('target', "_blank");
        url.textContent = member.website_url;

        mailto.setAttribute('href', "mailto:" + member.additional_info.email);
        mailto.setAttribute('title', member.additional_info.email);
        mailto.setAttribute('target', "_blank");
        mailto.textContent = member.additional_info.email;


        section.appendChild(picture);
        section.appendChild(h3);
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(p3);
        section.appendChild(p4);
        section.appendChild(url);
        section.appendChild(document.createElement('br'));
        section.appendChild(mailto);



        //li.appendChild(a);
        //li.append(" | ");



        articleMembersGrid.appendChild(section);



    });
}



const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}



getMembers();