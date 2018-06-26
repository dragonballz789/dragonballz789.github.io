'use strict';

function currentdate() {
    var d = new Date();
    
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var days = day[d.getDay()];
    var year = d.getFullYear();
   
    
    var months = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];
    var maybe = months[d.getMonth()];
    var please = days + "," + " " + d.getDate() + " " + maybe + " " + year;

    
    document.getElementById('currentdate()').innerHTML = please;
}
