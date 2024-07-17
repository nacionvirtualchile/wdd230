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