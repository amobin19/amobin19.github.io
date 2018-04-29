function myTimer() {
    document.getElementById("demo").innerHTML = Date();
}

function refresh() {
    var change = document.getElementById("myButton");
    if (change.innerHTML == "Date and Time")
    {
        change.innerHTML = "Refresh";
    }
}