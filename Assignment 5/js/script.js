let citiesData = {
    Tehran: {
        city: "Tehran",
        temp: 12,
        weather: "sunny",
        humidity: 23,
        windSpeed: 32
    },
    Shiraz: {
        city: "Shiraz",
        temp: 9,
        weather: "windy",
        humidity: 12,
        windSpeed: 14
    },
    Tabriz: {
        city: "Tabriz",
        temp: 1,
        weather: "rainy",
        humidity: 43,
        windSpeed: 12
    },
    Mashhad: {
        city: "Mashhad",
        temp: 16,
        weather: "snowy",
        humidity: 7,
        windSpeed: 24
    },
    Isfahan: {
        city: "Isfahan",
        temp: 23,
        weather: "sunny",
        humidity: 15,
        windSpeed: 18
    }
};
let searchBtn = document.getElementById("search");
let searchBar = document.querySelector(".search-bar");

searchBtn.addEventListener("click", function() {
    let searchBarValue = searchBar.value;
    let mainCityData = citiesData[searchBarValue];

    if (mainCityData) {
        document.querySelector(".city").innerHTML = 'Weather in' + mainCityData.city;
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".temp").innerHTML = mainCityData.temp + " " + 'C';
        document.querySelector(".description").innerHTML = mainCityData.weather;
        document.querySelector(".humidity").innerHTML = 'Humidity:' + mainCityData.humidity;
        document.querySelector(".wind").innerHTML = 'Humidity:' + mainCityData.windSpeed + 'km/h';
    } else {
        alert('اسم شهر مورد نظر را به درستی وارد نمایید');
    }
});