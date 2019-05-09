if (document.querySelector('#autoComplete')){
    autoComplete();
}
const pathName = window.location.pathname.split('/')
console.log(pathName)
console.log(isNaN(parseInt(pathName[2])));
if (pathName[1] === 'bars' && !isNaN(parseInt(pathName[2]))){
    alert('we are on the show page')
}


function autoComplete(){
//adding auto completion stuff
        autoComplete = new google.maps.places.Autocomplete(document.querySelector('input'));

        //location bound to Singapore's latlng
        autoComplete.bindTo('bounds', map);

        autoComplete.addListener('place_changed', handlePlaceChanged);
}