const API_KEY = "c6d4eb9d6344c101b60329681ca91318";

function geoSuccess(position){
    const latitude =  position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;   // units=metric --> 화씨 온도로 나타난 것을 섭씨로 바꾸기 위함
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherArea = document.querySelector('#weather span:first-child');
            const cityArea = document.querySelector('#weather span:last-child');
            const city = data.name;
            const weather = data.weather[0].main;
            weatherArea.innerText = `${weather} / ${data.main.temp}`;
            cityArea.innerText = city;
    });     // js가 url 부름(단, 시간이 걸림 --> then 사용)
}

function geoFailed(){
    alert("Can't find you. No weather for you.");
}

// funtion that gives user's geolocation
navigator.geolocation.getCurrentPosition(geoSuccess, geoFailed);    // require two arguments --> 1. function when success 2. function when failed
// show weather in the window
