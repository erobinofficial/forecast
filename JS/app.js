const API_KEY = `XirI4qeJlXKbJ31tpLmjUH7scyH0XE1w`;
const loadWeather = async (city) =>{
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${city}&fields=temperature&timesteps=1h&units=metric&apikey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    displayWeather(data);
}
const displayWeather = (data) =>{
    // console.log();
    const weather = document.getElementById('weather');
    weather.innerText = data.timelines.hourly[0].values.temperature;
    document.getElementById('city').innerText = location.name;
}
document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;

    loadWeather(city);
})
loadWeather('Dhaka');