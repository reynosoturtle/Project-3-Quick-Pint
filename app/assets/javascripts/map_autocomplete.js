function autoCompleteField(){
    autoComplete = new google.maps.places.Autocomplete(document.querySelector('#autoComplete'));

    //location bound to Singapore's latlng
    autoComplete.bindTo('bounds', map);

    autoComplete.addListener('place_changed', () => { fillUpFields();
        placeMarker();
    });
};

//when place_changed is executed, run this
function fillUpFields() {

    //getPlace gives me the details from google of the location in the autocomplete field
    place = autoComplete.getPlace();
    // console.log('place', place);

    //save the lat long to place the marker later on
    const lat = place.geometry.location.lat();
    const long = place.geometry.location.lng();
    myLatLng = new google.maps.LatLng(lat, long);

    //input the data retrieved from google into the text fields
    document.getElementById("name").value = place.name;
    document.getElementById("address").value = place.formatted_address;
    document.getElementById("hours").value = place.opening_hours.weekday_text.join(",")
    //saving these to db because we need them for map markers (these will be hidden fields on views)
    document.getElementById("lat").value = lat;
    document.getElementById("long").value = long;
    document.getElementById("place_id").value = place.place_id;
    };