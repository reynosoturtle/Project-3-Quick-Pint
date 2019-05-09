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

    //positioning of map
    map = new google.maps.Map(
        document.getElementById('map'), { center: Singapore, zoom: 11 });

    //if we are on the new bar page
    if (window.location.pathname == "/bars/new") {
        autoCompleteField();
    }

    //if we are on the show bar page
    const pathName = window.location.pathname.split('/')

    if (pathName[1] === 'bars' && (parseInt(pathName[2]) > -1)){
        const name = document.getElementById("placeName").innerText;
        const placeId = document.getElementById("placeId").innerText;

        const lat = document.getElementById("latitude").innerText;
        const long = document.getElementById("longitude").innerText;
        myLatLng = new google.maps.LatLng(lat, long);

        placeMarker(name,placeId);

    }
};