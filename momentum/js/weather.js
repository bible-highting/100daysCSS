API_KEY = "05c18d7c38efec05b025f04c6a741d15"
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    const name = data.name;
    const weatherData = data.weather[0].main;
    const tempData = data.main.temp;
    weather.innerText = `${weatherData}/${tempData}˚`;
    city.innerText = name;
  });
}
function onGeoError() {
  alert("Can't find you. Wo weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);