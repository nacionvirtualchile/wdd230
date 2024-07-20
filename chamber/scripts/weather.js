const url1 = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.6491&lon=-70.4016&appid=4896cc561f0455dcf0c2d2e8e8a23fa1&units=metric';


const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=Antofagasta,CL&units=metric&appid=4896cc561f0455dcf0c2d2e8e8a23fa1';

const city = document.querySelector('#city');
const weather = document.querySelector('#wheaterTemperature');
const weatherIcon = document.querySelector('#wheaterIcon');
const wheaterDescription = document.querySelector('#wheaterDescription');
const br = document.createElement("br");




async function apiFetch() {
    try {
        const response = await fetch(url1);
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
    city.textContent = "Locación: " + data.name;
    weather.innerHTML = "Temperatura actual: " + `${data.main.temp}&deg;C`;
    let desc = data.weather[0].description;
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    wheaterDescription.textContent = `${desc}`;


    //currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    //captionDesc.textContent = `${desc}`;
}



async function forcastFetch() {
    try {
        const response = await fetch(url2);
        if (response.ok) {
            const data = await response.json();
            displayResults2(data);
            //console.table(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



function displayResults2(data) {
    // 3 days filter
    const now = new Date();
    const limitDate = new Date(now);
    limitDate.setDate(limitDate.getDate() + 3);

    const threeDayForecast = data.list.filter(entry => {
        const entryDate = new Date(entry.dt_txt);
        return entryDate <= limitDate;
    });

    // Mostrar el pronóstico de los 3 días
    //console.log("length: " + threeDayForecast.length);
    document.querySelector('#imgGraphic').style.gridTemplateColumns = `repeat(${threeDayForecast.length}, 1fr)`;


    threeDayForecast.forEach(forecast => {
        const date = new Date(forecast.dt_txt);
        const temp = forecast.main.temp;
        const description = forecast.weather[0].description;
        //console.log(`Fecha y hora: ${date}, Temperatura: ${temp}°C, Descripción: ${description}`);
        let span = document.createElement("span");
        span.textContent = date.getDate();
        document.querySelector('#imgGraphic').appendChild(span);

    });


    threeDayForecast.forEach(forecast => {
        const date = new Date(forecast.dt_txt);
        const temp = forecast.main.temp;
        const description = forecast.weather[0].description;
        //console.log(`Fecha y hora: ${date}, Temperatura: ${temp}°C, Descripción: ${description}`);
        let image = document.createElement("img");
        image.setAttribute('src', "images/Temp.png");
        image.setAttribute('alt', `${date}`);
        image.setAttribute('width', "15px");
        image.setAttribute('height', 2 * `${temp}`);
        document.querySelector('#imgGraphic').appendChild(image);


    });



    threeDayForecast.forEach(forecast => {
        const date = new Date(forecast.dt_txt);
        const temp = forecast.main.temp;
        const description = forecast.weather[0].description;
        //console.log(`Fecha y hora: ${date}, Temperatura: ${temp}°C, Descripción: ${description}`);
        let span = document.createElement("span");
        span.textContent = Math.round(temp) + "°";
        document.querySelector('#imgGraphic').appendChild(span);

    });
}





forcastFetch();
apiFetch();


