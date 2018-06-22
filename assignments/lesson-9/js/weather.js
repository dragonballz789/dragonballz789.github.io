'use strict';
    var franklinRequest = new XMLHttpRequest();
    var franklinURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=2d51916561459638e3630bba8f819673";
    franklinRequest.open("GET", franklinURL, true);
    franklinRequest.responseType = "text";
    franklinRequest.send();
    franklinRequest.onload = function () {
    var franklinRequestText = franklinRequest.response;
    var franklinData = JSON.parse(franklinRequestText);
 
    var fhigh = franklinData.main.temp_max;
    document.getElementById("franklinhigh").innerHTML= fhigh;
    var flow = franklinData.main.temp_min;
    document.getElementById("franklinlow").innerHTML= flow;
    var fprec = franklinData.main.humidity;
    document.getElementById("franklinprec").innerHTML= fprec;
    var fwind = franklinData.wind.speed;
    document.getElementById("franklinwind").innerHTML= fwind;
    var fimg = franklinData.weather[0].icon;
    var ficon = "<img src =" + "http://openweathermap.org/img/w/" + fimg + ".png" + " " + "alt=currentweathericon" + ">";
    document.getElementById("franklincurrenticon").innerHTML=ficon;
    var fdescription = franklinData.weather[0].description;
        document.getElementById("currentdescription").innerHTML=fdescription;
    }

    
