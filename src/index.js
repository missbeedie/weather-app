function updateWeather(response) {
  let temperatureElement = document.querySelector("#current-temp-value");
  let currentCityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  currentCityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `humidity: ${response.data.temperature.humidity}%`;
  windElement.innerHTML = `wind speed: ${Math.round(
    response.data.wind.speed)}km/h`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-temp-icon"/>`;
  timeElement.innerHTML = formatDate(date);

  getForecast(response.data.city);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes};`
  }

  return `${day}, ${hours}:${minutes}`;


}




function searchCity(city) {
  let apiKey = "03fde306dbeefffd37840714ft0decoa";
  let apiUrl =
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}



function performSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-search-bar");
  
  searchCity(searchInput.value);
}

//forecast

function getForecast(city){
  let apiKey = "03fde306dbeefffd37840714ft0decoa";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl)
  axios(apiUrl).then(displayForecast)
}


function displayForecast(response){
  console.log(response.data)

let days = ['Tues', 'Wed', 'Thu', 'Fri', 'Sat']
let forecastHtml = ""

days.forEach(function(day){
forecastHtml = forecastHtml + ` 
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">${day}</div>
          <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700457-icon-43-wind-1024.png" alt="" width="60px"/>
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">18°C</span>
            <span class="weather-forecast-temperature-min">12°C</span>
          </div>
        </div>`;
})

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml
}




let searchFormElement = document.querySelector("form");
searchFormElement.addEventListener("submit", performSearch);

searchCity("London");
