'use strict';
function windchil() {
    var h = parseInt(document.getElementById('high').value);
    var l = parseInt(document.getElementById('low').value);
    var t = ((h + l) / 2);
    var s = parseInt(document.getElementById('windspeed').value);
    var fah = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
    document.getElementById('windchil()').innerHTML = fah;
    
}
