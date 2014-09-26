var map;
var infowindow;
var currentPos;

var mapInitialiser = function initialize() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentPos = new google.maps.LatLng(position.coords.latitude,
                                                position.coords.longitude);

            map = new google.maps.Map(document.getElementById('map-canvas'), {
                center: currentPos,
                zoom: 13
            });

            var request = {
                location: currentPos,
                radius: 350,
                types: ['restaurant']
            };

            infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
};

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            if (visited) {
                createMarker(results[i], true)
            } else {
                createMarker(results[i], false);
            }
        }
    }
}

function createMarker(place, visited) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
                                            map: map,
                                            position: place.geometry.location
                                        });

    if (visited) {
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    }

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name + " - " + place.geometry.location.B);
        infowindow.open(map, this);
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    });
}
