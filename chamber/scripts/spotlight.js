const membersDataSorce = "data/members.json";
const articleMembersGrid = document.querySelector(".membersGrid");


// async function getMembers() {
//     const response = await fetch(membersDataSorce);
//     if (response.ok) {
//         const data = await response.json();
//         //console.table(data.members);
//         displayMembers(data.members);


//     }
// }




// async function getMembers() {
//     try {
//         const response = await fetch(membersDataSorce);
//         if (response.ok) {
//             const data = await response.json();
//             //console.table(data);
//             displayMembers(data.members);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//         document.querySelector("#spotlight").style.display = 'none';

//     }
// }





const displayMembers = (data) => {
    const filteredData = data.filter(data => {
        // Retorna true para los registros que deseas conservar
        return data.membership_level === "Gold" || data.membership_level === "Silver";
        // Puedes agregar más condiciones para filtrar como necesites
    });
    //displayMembers(1, filteredData.members.length);
    // console.log(filteredData.length);
    // console.log(filteredData);
    // console.table(filteredData);
    get2RandomNumbers(filteredData, 1, filteredData.length);

}




function get2RandomNumbers(filteredData, min, max) {
    const firstNumber = getRandomNumber(min, max);

    let secondNumber;

    do {
        secondNumber = getRandomNumber(min, max);
    } while (secondNumber === firstNumber);

    //console.log(firstNumber, secondNumber);
    //console.log(filteredData[firstNumber].name, filteredData[secondNumber].name);
    let p1 = document.createElement('p');
    let url1 = document.createElement('a');
    let p2 = document.createElement('p');
    let url2 = document.createElement('a');
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    p1.textContent = "Name: " + filteredData[firstNumber].name;
    p2.textContent = "Name: " + filteredData[secondNumber].name;
    url1.setAttribute('href', filteredData[firstNumber].website_url);
    url1.setAttribute('title', "Website of " + filteredData[firstNumber].name);
    url1.setAttribute('target', "_blank");
    url1.textContent = filteredData[firstNumber].website_url;
    url2.setAttribute('href', filteredData[secondNumber].website_url);
    url2.setAttribute('title', "Website of " + filteredData[secondNumber].name);
    url2.setAttribute('target', "_blank");
    url2.textContent = filteredData[secondNumber].website_url;

    li1.appendChild(p1);
    li1.appendChild(url1);
    li2.appendChild(p2);
    li2.appendChild(url2);

    ul.appendChild(li1);
    ul.appendChild(li2);
    document.querySelector("#spotlight").appendChild(ul);
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




fetch(membersDataSorce)
    .then(response => response.json())
    .then(data => {
        displayMembers(data.members);
    })
    .catch(error => {
        console.log(error);
        document.querySelector("#spotlight").style.display = 'none';
    });