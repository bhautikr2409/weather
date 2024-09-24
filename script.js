const APIkey = "0472b46b38a0404d5b60aed781fb7b7e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="



const cityName = document.getElementById('cityInput')
const searchBtn = document.getElementById('SearchBtn')
const weatherImg = document.getElementById('weatherImg')
const displayWeather = document.getElementById('weather')
const displayError = document.getElementById("error")



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${APIkey}`);

    if (response.status == 404) {
        displayError.classList.add('flex')
        displayError.classList.remove('hidden')

        displayWeather.classList.add('hidden')
        displayWeather.classList.remove('block')
    }

    else {

        var data = await response.json();
        console.log(data);


        document.getElementById('cityName').innerHTML = data.name
        document.getElementById('temperature').innerHTML = Math.round(data.main.temp) + "°C"
        document.getElementById('humadity').innerHTML = data.main.humidity + "%"
        document.getElementById('windSpeed').innerHTML = data.wind.speed + "km/h";


        if (data.weather[0].main == 'Clouds') {
            weatherImg.src = 'img/cloud.png'
        }
        else if (data.weather[0].main == 'Clear') {
            weatherImg.src = 'img/clear-sky.png'
        }
        else if (data.weather[0].main == 'Rain') {
            weatherImg.src = 'img/rain.png'
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherImg.src = 'img/vecteezy_3d-weather-icon-day-with-rain_24825182.png'
        }
        else if (data.weather[0].main == 'Mist') {
            weatherImg.src = 'img/mist.png'
        }
        document.getElementById('cityInput').value = ''


        displayWeather.classList.add('block')
        displayWeather.classList.remove('hidden')


        displayError.classList.add('hidden')
        displayError.classList.remove('flex')
    }
}



searchBtn.addEventListener('click', () => {
    checkWeather(cityName.value)
})


