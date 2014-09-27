var map;
var infowindow;
var currentPos;

var visited = false;
var inpuType;
var inputRadius;


function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            if (results[i].isVisited) {
                createMarker(results[i], true)
            } else {
                createMarker(results[i], false);
            }
        }
    }
}

function createMarker(place, isVisited) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
                                            map: map,
                                            position: place.geometry.location
                                        });

    if (visited) {
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    }

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        alert("You've visited " + place.name);
        infowindow.open(map, this);
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
        marker.isVisited = true;
    });
}


var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
    scope.map = {
        initialize: function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    //currentPos = new google.maps.LatLng(position.coords.latitude,
                    //                                    position.coords.longitude);

                    currentPos = new google.maps.LatLng(42.6509467, 23.37947029999998);

                    var mapElement = document.getElementById('map-canvas');

                    if (mapElement) {
                        map = new google.maps.Map(document.getElementById('map-canvas'), {
                            center: currentPos,
                            zoom: 11
                        });

                        var request = {
                            location: currentPos,
                            radius: 35000,
                            type: 'museum'
                        };

                        infowindow = new google.maps.InfoWindow();
                        var service = new google.maps.places.PlacesService(map);
                        //var req = makeRequest();
                        service.nearbySearch(request, callback);
                    }
                });
            }

            //google.maps.event.addDomListener(window, 'load', initialize);
        },

        // TODO: Need fix 
        //makeRequest: function () {
        //    var request = {
        //        location: currentPos,
        //        radius: 35000,
        //        type: 'restaurant'
        //    };

        //    return request;
        //},
    };

}(app.viewmodels));