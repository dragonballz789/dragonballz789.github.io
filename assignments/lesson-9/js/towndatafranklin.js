'use strict'
        var townrequestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
        var townrequest = new XMLHttpRequest();
        townrequest.open('GET', townrequestURL, true);
        townrequest.responseType = "text";
        townrequest.send();
        townrequest.onload = function() {
            var townrequesttext = townrequest.response;
            var towndata = JSON.parse(townrequesttext);
            
       
                var fmotto = towndata.towns[0].motto;
                document.getElementById("franklinmotto").innerHTML=fmotto;
                var fyear = towndata.towns[0].yearFounded;
                document.getElementById("franklinfounded").innerHTML=fyear;
                var fpop = towndata.towns[0].currentPopulation;
                document.getElementById("franklinpopulation").innerHTML=fpop;
                var frain = towndata.towns[0].averageRainfall;
                document.getElementById("franklinrainfall").innerHTML=frain;
                var greenmotto = towndata.towns[1].motto;
                document.getElementById("greenvillemotto").innerHTML=greenmotto;
                var greenyear = towndata.towns[1].yearFounded;
                document.getElementById("greenvillefounded").innerHTML=greenyear;
                var greenpop = towndata.towns[1].currentPopulation;
                document.getElementById("greenvillepopulation").innerHTML=greenpop;
                var greenrain = towndata.towns[1].averageRainfall;
                document.getElementById("greenvillerainfall").innerHTML=greenrain;
                var springmotto = towndata.towns[3].motto;
                document.getElementById("springfieldmotto").innerHTML=springmotto;
                var springyear = towndata.towns[3].yearFounded;
                document.getElementById("springfieldfounded").innerHTML=springyear;
                var springpop = towndata.towns[3].currentPopulation;
                document.getElementById("springfieldpopulation").innerHTML=springpop;
                var springrain = towndata.towns[3].averageRainfall;
                document.getElementById("springfieldrainfall").innerHTML=springrain;
}