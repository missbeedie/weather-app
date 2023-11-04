function updateWeather(response){
  let temperatureElement = document.querySelector("#current-temp-value");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
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
  let currentCityElement = document.querySelector("#current-city");
  currentCityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("form");
searchFormElement.addEventListener("submit", performSearch);




