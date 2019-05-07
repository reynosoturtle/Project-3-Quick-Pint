var map;
var service;
var infowindow;
var autoComplete;
var marker;

//initialize map
function initMap() {

    //show Singapore on map
    var Singapore = new google.maps.LatLng(1.3521, 103.8198);

    //create infowindow
    infowindow = new google.maps.InfoWindow();

    //positioning of map
    map = new google.maps.Map(
        document.getElementById('map'), { center: Singapore, zoom: 11 });

    //adding auto completion stuff
    autoComplete = new google.maps.places.Autocomplete(document.querySelector('input'));

    //location bound to Singapore's latlng
    autoComplete.bindTo('bounds', map);

    autoComplete.addListener('place_changed', handlePlaceChanged);
}

//when place_changed is executed, run this
function handlePlaceChanged() {

    //getPlace gives me the details from google of the location in the autocomplete field
    const place = autoComplete.getPlace();
    // console.log('place', place);

    //save the lat long to place the marker later on
    const lat = place.geometry.location.lat();
    const long = place.geometry.location.lng();
    const myLatLng = new google.maps.LatLng(lat, long);

    //input the data retrieved from google into the text fields
    document.getElementById("name").value = place.name;
    document.getElementById("address").value = place.formatted_address;
    //saving these to db because we need them for map markers (these will hidden fields on views)
    document.getElementById("lat").value = lat;
    document.getElementById("long").value = long;
    document.getElementById("place_id").value = place.place_id;

    //business hours data returned from api is an array
    //put each array item inside an individual text field
    //first remove business hours if exist from previous search
    let bizHourEl = document.getElementsByClassName("bizHour")
    while(bizHourEl.length > 0){
            bizHourEl[0].parentNode.removeChild(bizHourEl[0]);
        };

    let bizHourContainer = document.getElementById("hours");
    const hoursArray = place.opening_hours.weekday_text

    hoursArray.forEach(function(day) {
        let newInput = document.createElement("input");
        newInput.value = day;
        newInput.className = "bizHour"
        newInput.name = "business_hour";
        bizHourContainer.appendChild(newInput);
        });

    //adding the marker with latlong
    var marker = new google.maps.Marker({
        position: myLatLng,
        title: place.name
    });

    marker.setMap(map);

    //text to show inside the marker infoview
    var contentString = '<strong>' + place.name + '</strong>' + '<div>Rating: ' + place.rating + ', ' + place.user_ratings_total + ' Google reviews</div>' + '</div>' + '<div>' + place.international_phone_number + '</div>'

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    //show the infoview when clicked
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
};