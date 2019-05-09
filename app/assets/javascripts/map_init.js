var map;
var infowindow;
var autoComplete;
var marker = null;
var myLatLng;
var place;

//initialize map
function initMap() {
    //show Singapore on map
    var Singapore = new google.maps.LatLng(1.3521, 103.8198);

    //create infowindow
    infowindow = new google.maps.InfoWindow();

    //positioning of map
    map = new google.maps.Map(
        document.getElementById('map'), { center: Singapore, zoom: 11 });

    //if we are on the new bar page
    if (window.location.pathname == "/bars/new") {
        autoCompleteField();
    }

    //if we are on the show bar page
    const pathName = window.location.pathname.split('/')
    console.log(pathName);
    console.log(isNaN(parseInt(pathName[2])));

    if (pathName[1] === 'bars' && (typeof parseInt(pathName[2]) === 'number')){

        const lat = document.getElementById("latitude").innerHTML
        const long = document.getElementById("longitude").innerHTML
        myLatLng = new google.maps.LatLng(lat, long);

        placeMarker();
        // alert("hello");
    }
};