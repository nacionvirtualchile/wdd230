const visitsDisplay = document.querySelector(".visits");
let thisMoment = new Date();
let differenceInMilliseconds = 0;

let timeOfVisit = window.localStorage.getItem("timeOfVisits-ls") || thisMoment;
if (timeOfVisit !== thisMoment) {
    timeOfVisit = new Date(window.localStorage.getItem("timeOfVisits-ls"))

    differenceInMilliseconds = timeOfVisit - thisMoment;
    millisecondsPerDay = 24 * 60 * 60 * 1000; // Horas * Minutos * Segundos * Milisegundos
    differenceInDays = Math.round(differenceInMilliseconds / millisecondsPerDay);

    if (differenceInDays > 1) {
        visitsDisplay.textContent = "You last visited " + differenceInDays + " days ago";
    } if (differenceInDays == 1) {
        visitsDisplay.textContent = "You last visited " + differenceInDays + " day ago";
    } else {
        visitsDisplay.textContent = "Back so soon! Awesome! ";
    }



} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}
localStorage.setItem("timeOfVisits-ls", timeOfVisit);


