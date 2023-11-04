
function performSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-search-bar");
  let currentCityElement = document.querySelector("#current-city");
  currentCityElement.innerHTML = searchInput.value;

}


let searchFormElement = document.querySelector("form");
searchFormElement.addEventListener("submit", performSearch);


