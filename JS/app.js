const API_KEY = `1a301874a116ded8ea06640d46bfd1f4`;
const loadWeather = async (city) =>{
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${city}&fields=temperature&timesteps=1h&units=metric&apikey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    displayWeather(data);
}
const displayWeather = (data) =>{
    const weather = document.getElementById('weather');
    weather.innerText = data.temperature;
}
document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadWeather(city);
})
loadWeather('Dhaka');