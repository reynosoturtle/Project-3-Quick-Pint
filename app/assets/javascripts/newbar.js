if (window.location.pathname == "/bars/new") {

    var map;
    var infowindow;
    var autoComplete;
    var marker = null;
    var myLatLng;

    //initialize map
    function initMap() {
        alert('map loading')
        //show Singapore on map
        var Singapore = new google.maps.LatLng(1.3521, 103.8198);

        //create infowindow
        infowindow = new google.maps.InfoWindow();

        //positioning of map
        map = new google.maps.Map(
            document.getElementById('map'), { center: Singapore, zoom: 11 });

    }

    //when place_changed is executed, run this
    function handlePlaceChanged() {

        //getPlace gives me the details from google of the location in the autocomplete field
        const place = autoComplete.getPlace();
        console.log('place', place);

        //save the lat long to place the marker later on
        const lat = place.geometry.location.lat();
        const long = place.geometry.location.lng();
        myLatLng = new google.maps.LatLng(lat, long);

        //input the data retrieved from google into the text fields
        document.getElementById("name").value = place.name;
        document.getElementById("address").value = place.formatted_address;
        document.getElementById("hours").value = place.opening_hours.weekday_text;
        //saving these to db because we need them for map markers (these will be hidden fields on views)
        document.getElementById("lat").value = lat;
        document.getElementById("long").value = long;
        document.getElementById("place_id").value = place.place_id;

        //adding the marker with latlong
        if (marker) { marker.setMap(null) }
        marker = new google.maps.Marker({
            position: myLatLng,
            title: place.name
        });

        marker.setMap(map);

        //text to show inside the marker infoview
        var contentString = '<strong>' + place.name + '</strong>' + '<div>Rating: ' + place.rating + ', ' + place.user_ratings_total + ' Google reviews</div>' + '</div>' + '<div>' + place.international_phone_number + '</div>'

        infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        //show the infoview when clicked
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    };
}