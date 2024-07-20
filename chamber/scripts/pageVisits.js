const visitsDisplay = document.querySelector(".visits");
let thisMoment = new Date();
let differenceInMilliseconds = 0;

let numVisits = Number(window.localStorage.getItem("numVisits-ls2")) || 0;
numVisits++;
localStorage.setItem("numVisits-ls2", numVisits);

let timeOfVisit = window.localStorage.getItem("timeOfVisits-ls2") || thisMoment;
if (timeOfVisit !== thisMoment) {
    timeOfVisit = new Date(window.localStorage.getItem("timeOfVisits-ls2"))

    differenceInMilliseconds = timeOfVisit - thisMoment;
    millisecondsPerDay = 24 * 60 * 60 * 1000; // Horas * Minutos * Segundos * Milisegundos
    differenceInDays = Math.round(differenceInMilliseconds / millisecondsPerDay);

    if (differenceInDays > 1) {
        visitsDisplay.textContent = "Your visits: " + numVisits + " - You last visited " + differenceInDays + " days ago";
    } if (differenceInDays == 1) {
        visitsDisplay.textContent = "Your visits: " + numVisits + " - You last visited " + differenceInDays + " day ago";
    } else {
        visitsDisplay.textContent = "Your visits: " + numVisits + " - Back so soon! Awesome! ";
    }



} else {
    visitsDisplay.textContent = "Your visits: " + numVisits + " - Welcome! Let us know if you have any questions.";
}
localStorage.setItem("timeOfVisits-ls2", timeOfVisit);


