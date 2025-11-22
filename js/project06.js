const getWeather = () => {
    const city = document.getElementById('cityInput').value;
    const apikey = '8a6b3ef62b13d278552ee342256f233c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        const weatherInpo = document.getElementById('weatherInpo');

        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        weatherInpo.innerHTML = `
        <p> Description: ${description} </p>
        <h4>Temperature: ${temperature} &#8451</h4>
        <h4>Humidity: ${humidity}% </h4>
        <h4>wind Speed: ${windSpeed}m/s </h4>
        
        `;
    })
    .catch(error => {
        console.error('Opps!, Sorry', error);
        document.getElementById('weatherInpo').innerText = 'city Not Found!';
    })
}