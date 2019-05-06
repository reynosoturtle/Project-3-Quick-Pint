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
    const place = autoComplete.getPlace();
    // console.log('place', place);
    const lat = autoComplete.getPlace().geometry.location.lat();
    const long = autoComplete.getPlace().geometry.location.lng();
    const myLatLng = new google.maps.LatLng(lat, long);

    document.getElementById("name").value = place.name;
    document.getElementById("address").value = place.formatted_address;
    document.getElementById("business_hour").value = place.opening_hours.weekday_text;

    // const hoursArray = place.opening_hours.weekday_text
    // hoursArray.forEach(function(day) {
    //     console.log(day);
    // });

    var marker = new google.maps.Marker({
        position: myLatLng,
        title: "Hello World!"
    });

    marker.setMap(map);

};