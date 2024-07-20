const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.4165&lon=-3.7026&appid=4896cc561f0455dcf0c2d2e8e8a23fa1&units=metric';


const city = document.querySelector('#city');
const weather = document.querySelector('#wheaterTemperature');
const weatherIcon = document.querySelector('#wheaterIcon');
const wheaterDescription = document.querySelector('#wheaterDescription');





async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            //console.table(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



function displayResults(data) {
    city.textContent = "Location: " + data.name;
    weather.innerHTML = "Temperature: " + `${data.main.temp}&deg;C`;
    let desc = data.weather[0].description;
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    wheaterDescription.textContent = `${desc}`;


    //currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    //captionDesc.textContent = `${desc}`;
}



apiFetch();
