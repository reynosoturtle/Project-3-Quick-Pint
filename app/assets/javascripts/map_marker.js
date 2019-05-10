//adding the marker with latlong
function placeMarker(barName=null,barId = null) {

    let placeName;

    barName? placeName=barName:placeName=place.name

    if (marker) { marker.setMap(null) }
        marker = new google.maps.Marker({
            position: myLatLng,
            title: barName
        });

    marker.setMap(map);

    //text to show inside the marker infoview
    if (!barName){

        var contentString = '<strong>' + place.name + '</strong>' + '<div>Rating: ' + place.rating + ', ' + place.user_ratings_total + ' Google reviews</div>' + '</div>' + '<div>' + place.international_phone_number + '</div>'

        infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        //show the infoview when clicked
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }
};