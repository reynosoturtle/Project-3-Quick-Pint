function getLocation() {
  navigator.geolocation.getCurrentPosition(
            function(position) {
                var latLngA = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                var latLngB = new google.maps.LatLng(40.778721618334295, -73.96648406982422);
                var distance = google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB);
                alert(distance);//In metres
            },
            function() {
                alert("geolocation not supported!!");
            }
    );
}