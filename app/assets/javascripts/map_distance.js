if (window.location.pathname == "/bars") {

    navigator.geolocation.getCurrentPosition(position => {

        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        fetch("/distance/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ lat: lat, long: long })
        })
        .then(res => {
            res.json().then(res => console.log(res))
        })
    })
}