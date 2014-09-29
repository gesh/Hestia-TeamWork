/// <reference path="scripts/MapInitialiser.js"/>
/// <reference path="camera.js" />
/// <reference path="../kendo/js/jquery.min.js" />

(function () {
    var app;

    document.addEventListener('deviceready', function () {
        
        navigator.splashscreen.hide();


        app = new kendo.mobile.Application(document.body, { transition: 'slide', skin: 'flat', initial: 'views/map.html' });


        var cameraButton = document.getElementById('camera-button');
        console.log(cameraButton);

    }, false);
}());