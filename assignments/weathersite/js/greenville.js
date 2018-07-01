'use strict';
    var greenvilleRequest = new XMLHttpRequest();
    var greenvilleURL = "https://api.openweathermap.org/data/2.5/weather?id=4224162&units=imperial&APPID=2d51916561459638e3630bba8f819673";
    greenvilleRequest.open("GET", greenvilleURL, true);
    greenvilleRequest.responseType = "text";
    greenvilleRequest.send();
    greenvilleRequest.onload = function () {
    var greenvilleRequestText = greenvilleRequest.response;
    var greenvilleData = JSON.parse(greenvilleRequestText);
 
    var ghigh = greenvilleData.main.temp_max;
    document.getElementById("greenvillehigh").innerHTML= ghigh;
    var glow = greenvilleData.main.temp_min;
    document.getElementById("greenvillelow").innerHTML= glow;
    var gprec = greenvilleData.main.humidity;
    document.getElementById("greenvilleprec").innerHTML= gprec;
    var gwind = greenvilleData.wind.speed;
    document.getElementById("greenvillewind").innerHTML= gwind;
    var gimg = greenvilleData.weather[0].icon;
    var gicon = "<img src =" + "http://openweathermap.org/img/w/" + gimg + ".png" + " " + "alt=currentweathericon" + ">";
    document.getElementById("greenvillecurrenticon").innerHTML=sicon;
    var gdescription = greenvilleData.weather[0].description;
        document.getElementById("currentdescription").innerHTML=sdescription;
    }
