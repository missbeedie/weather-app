function updateWeather(response) {
  let temperatureElement = document.querySelector("#current-temp-value");
  let currentCityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  currentCityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `humidity: ${response.data.temperature.humidity}%`;
  windElement.innerHTML = `wind speed: ${Math.round(
    response.data.wind.speed)}km/h`;
  timeElement.innerHTML = formatDate(date);
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

let searchFormElement = document.querySelector("form");
searchFormElement.addEventListener("submit", performSearch);




