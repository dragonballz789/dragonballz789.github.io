
    function currentdate() {
        var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var number = getdate();
        var year = getFullYear();
        var month = getMonth();
        var days = day[number.getDay()];
    

    document.getElementById('onscreen').innerHTML = days;
}

