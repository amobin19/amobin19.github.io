function refresh() {
	var press = document.getElementById("myButton");
    if (press.innerHTML == "Date and Time"){ // show date
       	press.innerHTML = "Click for Time";
    }
    else if(press.innerHTML == "Click for Time"){
    	press.innerHTML == "Click for Date";
    }
    else if(press.innerHTML == "Click for Date"){
    	press.innerHTML == "Click for Time";
    }
}