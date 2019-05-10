if (window.location.pathname == '/bars' || window.location.pathname == '/') {

    navigator.geolocation.getCurrentPosition(position => {

        const myLat = position.coords.latitude;
        const myLong = position.coords.longitude;

        let barCoords = document.querySelectorAll('.latLong');

        for (let i = 0; i < barCoords.length; i++) {

            const barCoordsArr = barCoords[i].innerHTML.split(',');

            for (let j in barCoordsArr) {
                barCoordsArr[j] = parseFloat(barCoordsArr[j])
            };

            const distance = Math.sqrt(Math.pow((myLat - barCoordsArr[0]), 2) + Math.pow((myLong - barCoordsArr[1]), 2)) * 110.567;

            function round(value) {
                return Number(Math.round(value + 'e' + 1) + 'e-' + 1);
            }
            if (distance < 1) {
                console.log("dsa")
                barCoords[i].innerText = round(distance*1000) + ' m';
            } else {barCoords[i].innerText = round(distance) + ' km';
        }
            barCoords[i].style.visibility = 'visible';
        }
    })
}