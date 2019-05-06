var map;
var service;
var infowindow;
var autoComplete;
var marker;

function initMap() {
    var Singapore = new google.maps.LatLng(1.3521, 103.8198);

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(
        document.getElementById('map'), { center: Singapore, zoom: 11 });
    autoComplete = new google.maps.places.Autocomplete(document.querySelector('input'));
    autoComplete.bindTo('bounds', map);

    autoComplete.addListener('place_changed', handlePlaceChanged);
}

function handlePlaceChanged() {
    infowindow.close();
    // marker.setVisible(false);
    const place = autoComplete.getPlace();
    console.log('place', place);
}