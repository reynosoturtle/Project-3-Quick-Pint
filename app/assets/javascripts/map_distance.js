if (window.location.pathname == '/bars' || window.location.pathname == '/') {

    navigator.geolocation.getCurrentPosition(position => {

        const myLat = position.coords.latitude
        const myLong = position.coords.longitude

        let barCoords = document.querySelectorAll('.latLong')

        for (let i = 0; i< barCoords.length;i++){

            const barDistArr = barCoords[i].innerHTML.split(',')
            for (let j in barDistArr){
                barDistArr[j]=parseFloat(barDistArr[j])

            }
            console.log(barDistArr)

            const distance = Math.sqrt(Math.pow((myLat-barDistArr[0]),2)+Math.pow((myLong-barDistArr[1]),2)) * 110.567

            console.log(distance)

            barCoords[i].innerText = distance
            barCoords[i].style.visibility = 'visible'
        }
    })
}