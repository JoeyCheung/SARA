
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

function displayselect(){
    var opt = document.getElementById("selection");
    var display = opt.options[opt.selectedIndex].text;
    document.getElementById("result").innerHTML = display;
    console.log(display);
}//end displaySelect

function checkSelected(){
    displayselect();
    var opt = document.getElementById("selection");
    var display = opt.options[opt.selectedIndex].text;
    if (display == "Screen Diameters"){
        document.getElementById("result").innerHTML = " Your screen dimensions are " + screen.width + " by " + screen.height;
}
    if (display == "Window Diameters"){
    document.getElementById("result").innerHTML = " Your window dimensions are " + w + " by " + h;
}
if (display == "Browser Location"){
    document.getElementById("result").innerHTML = " Your page location is " + window.location.href;
}
if (display == "Location"){
    getLocation();
}

}//end checkSelected

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        document.getElementById("result").innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    document.getElementById("result").innerHTML = "Location: Latitude: " + position.coords.latitude + 
    " Longitude: " + position.coords.longitude;
  }

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }