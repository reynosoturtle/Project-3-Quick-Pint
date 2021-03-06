if (window.location.pathname == '/bars' || window.location.pathname == '/') {

    console.log('requesting for user longlat')
    // put loader here
    // document.getElementById('loader').style.display = "block"

    navigator.geolocation.getCurrentPosition(position => {

        const myLat = position.coords.latitude;
        const myLong = position.coords.longitude;

        console.log('user longlat received')

        let barCoords = document.querySelectorAll('.latLong');

        for (let i = 0; i < barCoords.length; i++) {

            const barCoordsArr = barCoords[i].innerHTML.split(',');

            for (let j in barCoordsArr) {
                barCoordsArr[j] = parseFloat(barCoordsArr[j])
            };

            console.log('calculating distance')
            const distance = Math.sqrt(Math.pow((myLat - barCoordsArr[0]), 2) + Math.pow((myLong - barCoordsArr[1]), 2)) * 110.567;

            function round(value) {
                return Number(Math.round(value + 'e' + 0) + 'e-' + 0);
            }
            // if (distance < 1) {
            //     console.log("dsa")
                barCoords[i].innerText = round(distance*1000) + ' m';
        //     } else {barCoords[i].innerText = round(distance) + ' km';
        // }
            // console.log('done calculating and now rendering')
            barCoords[i].style.visibility = 'visible';

            // clear loader here
            if (i == barCoords.length - 1) {
              console.log('done loading')
              document.getElementById('loader').style.display = "none"
            }
        }
    })
}