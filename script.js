let search = document.getElementById("location");
let submit = document.getElementById("submit");
let icon = document.getElementById("icon");
let temperature = document.getElementById("tempText");
let windSpeed = document.getElementById("windText");
let humidText = document.getElementById("humidText");
console.log(submit)
let value1;



submit.onclick=()=>{
value1 = search.value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${value1}&appid=1d686110cdaa9c80154b21b87d0133ac&units=metric`

let response = fetch(url)
response.then((value)=>{
    return value.json()
}).then((value)=>{
    console.log(value);
    if(value.weather[0].main=='Rain'){
        icon.src = "rain.png"
    }
    if(value.weather[0].main=='snow'){
        icon.src = "snowy.png"
    }
    if(value.weather[0].main=='hazy'){
        icon.src = "fog.png"
    }
    if(value.weather[0].main=='Clear'){
        icon.src = "sun.png"
    }
    if(value.weather[0].main=='Clouds'){
        icon.src = "cloudy.png"
    }
    temperature.innerHTML = `${value.main.temp}&deg;C`
    windSpeed.innerHTML = `${value.wind.speed} kmph`
    humidText.innerHTML = `${value.main.humidity}%`
})
}



