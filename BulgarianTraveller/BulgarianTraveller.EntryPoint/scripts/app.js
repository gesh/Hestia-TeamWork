/// <reference path="scripts/MapInitialiser.js"/>
/// <reference path="../kendo/js/jquery.min.js" />

(function () {
    var app;

    document.addEventListener('deviceready', function () {
        
        navigator.splashscreen.hide();

        app = new kendo.mobile.Application(document.body, { transition: 'slide', skin: 'flat', initial: 'views/map.html' });

        

    }, false);
}());