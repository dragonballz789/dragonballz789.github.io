'use strict';
    var springfieldRequest = new XMLHttpRequest();
    var springfieldURL = "https://api.openweathermap.org/data/2.5/weather?id=4224162&units=imperial&APPID=2d51916561459638e3630bba8f819673";
    springfieldRequest.open("GET", springfieldURL, true);
    springfieldRequest.responseType = "text";
    springfieldRequest.send();
    springfieldRequest.onload = function () {
    var springfieldRequestText = springfieldRequest.response;
    var springfieldData = JSON.parse(springfieldRequestText);
 
    var shigh = springfieldData.main.temp_max;
    document.getElementById("springfieldhigh").innerHTML= shigh;
    var slow = springfieldData.main.temp_min;
    document.getElementById("springfieldlow").innerHTML= slow;
    var sprec = springfieldData.main.humidity;
    document.getElementById("springfieldprec").innerHTML= sprec;
    var swind = springfieldData.wind.speed;
    document.getElementById("springfieldwind").innerHTML= swind;
    var simg = springfieldData.weather[0].icon;
    var sicon = "<img src =" + "http://openweathermap.org/img/w/" + simg + ".png" + " " + "alt=currentweathericon" + ">";
    document.getElementById("springfieldcurrenticon").innerHTML=sicon;
    var sdescription = springfield.weather[0].description;
        document.getElementById("currentdescription").innerHTML=sdescription;
    }

    