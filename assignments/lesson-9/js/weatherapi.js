'use strict';
    var weatherRequest = new XMLHttpRequest();
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=2d51916561459638e3630bba8f819673";
    weatherRequest.open("GET", apiURL, true);
    weatherRequest.responseType = "text";
    weatherRequest.send();
    weatherRequest.onload = function () {
    var weatherRequestText = weatherRequest.response;
    var weatherData = JSON.parse(weatherRequestText);
   
    console.log(weatherData);

        var answer = weatherData.main.temp;
    
    
       
   
    document.getElementById("franklintemp").innerHTML= answer;
    
    }

    
