function autoCompleteField(){
    autoComplete = new google.maps.places.Autocomplete(document.querySelector('#autoComplete'));

    //location bound to Singapore's latlng
    autoComplete.bindTo('bounds', map);

    autoComplete.addListener('place_changed', () => { fillUpFields();
        placeMarker();
    });
};